import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service' ;


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  // p: number = 1;
  newFileArr = [] ;
  // fileArr = ['文件夹1','1.txt','Ace.java'] ;
  fileArr = [] ;
  firstFile = false ;
  isWindowServer = false ;

  file =  !this.isWindowServer ? ['root']:['c:'];
  fileStr = '' ;
  fileStr2 = '' ;

  isActive1 = '';
  baseUrlArr = ["http://10.52.19.163:8899/file/"] ;
  downUrlArr = ["http://10.52.19.163:8899/"] ;
  baseUrl = this.baseUrlArr[0] ;
  downUrl = this.downUrlArr[0] ;
  // selectedFile = '.txt' ;
  // 构建前台对象数组 对象两个属性(路径名 数据)
  // 1.记录当前路径下的数据
  // 2.打开页面 构建对象 存储入内 push
  // 3.返回上一级 pop出一个对象
  localData = [{
    name : 'root' ,
    data : this.fileArr
  }] ; //管理数据

  windowLocalData = [{
    name : 'c:' ,
    data : this.fileArr
  }
  ]


  constructor(
        private fileService:FileService) { }

  ngOnInit() {
    let getUrl = this.baseUrl + "showFile" ;
    this.getData(getUrl,'/root/','root') ;
    this.fileStr = this.arrToStr(this.file,'/') ;
    this.fileStr2 = this.arrToStr(this.file,' > ') ;
  }

  //**********函数功能部分

  从后台获取数据
  getData(url,path,currentPah){

    let that = this ;

     this.fileService.getData(url,path).subscribe(data=>{
          // console.log(data);
          that.fileArr = data['result'];
          // console.log(that.fileArr) ;  //这一行有数据
          // console.log(data.result) ;
          that.newFileArr = that.check(that.fileArr) ;
          // console.log(a) ;
          //生成localData 便于返回上一级
          var object = {
            name: '',
            data: [],
          } ;
           object.name = currentPah ;
           object.data = that.fileArr ;

           if(this.isWindowServer){
              this.windowLocalData.push(object) ;
           }else{
            this.localData.push(object) ;
           }
        })
    // console.log(this.fileArr) ;   // 这一行就没有数据了 ？？？？？？
  }



  //数组转字符串
  arrToStr(arr,identified){
    let str = '' ;
    let that = this ;
    arr.forEach(function(item,index){
      //若为数组最后一个元素 则无需添加'\'
      if(index == arr.length-1){
        str = str + item ;
      }else{
        str = str + item + identified ;
      }
    })
    return str ;
  }



  //区分文件以及文件夹
  check(arr){
    var newArr = [] ;
    // 定义 newArrChild1 newArrChild2 两个数组用来接受文件夹 以及 文件
    var newArrChild1 = [] ;
    var newArrChild2 = [] ;
      arr.forEach(function(item){
          //去除带. 的文件
          var reg0 = /^\./ ;
          var result0 = reg0.test(item) ;
          if(!result0){
              //判断是否为文件夹
            var reg = /.*\..*/ ;
            var result = reg.test(item) ;
            var txt = item.indexOf('.txt') ;

            var obj = {
              name: null,
              isFile: null ,
              isTxt: null ,
            }  ;
            obj.name = item ;
            obj.isFile = result ;
            obj.isTxt = txt ;


            if(!result){
              newArrChild1.push(obj) ;
            }else{
              newArrChild2.push(obj) ;
            }
            // newArr.push(obj) ;
            return obj ;
        }

      })

      newArr = this.mySort(newArrChild1).concat(this.mySort(newArrChild2))
      // console.log(newArr) ;
      return newArr ;
    }

  // 排序函数
    mySort(arr){
       return arr.sort(function(a,b){
          let i = a.name ;
          return i.localeCompare(b.name) ;
        })
    }



  // 双击打开文件夹
  // 1.获取文件夹信息
  // 2.将文件名添加到路径名后
  // 3.根据现在的文件名查找 文件夹目录下的内容
  // 4.显示文件
  openFile(i){
     this.file.push(i.name) ;
     this.fileStr = this.arrToStr(this.file,'/') ;
     this.fileStr2 = this.arrToStr(this.file,' > ') ;

     //显示出 返回上一级 的按钮
     this.firstFile = true ;
     //从后台获取的数据
    //  this.newFileArr = this.check(this.getData(i.name)) ;
    console.log(this.fileStr) ;

      let url = this.baseUrl + "showFile" ;
      if(!this.isWindowServer){
      this.getData(url,'/'+this.fileStr,i.name) ;
      }else{
      this.getData(url,this.fileStr,i.name) ;
      }
    // console.log(this.fileArr)
    //  var newData = this.fileArr ;

     this.isActive1 = 'show';
     var that = this;
     var timer = setTimeout(function(){
       // alert("2");
       that.isActive1 = '';
       },200)

  }

  //返回上一层按钮
  back(){
    //修改文件路径
    this.file.pop() ;
    console.log(this.file) ;
    this.fileStr = this.arrToStr(this.file,'/') ;
    this.fileStr2 = this.arrToStr(this.file,' > ') ;

    //返回到 root层时无需 显示按钮
    if(!(this.fileStr == 'root' || this.fileStr == 'c:')){
        this.firstFile = true ;
    }else{
      this.firstFile = false ;
    }

    //获取当前对象数组中的数据
    var index = this.file[this.file.length-1] ;
    if(index == 'root'){

    }
    console.log(index) ;
    var data1 = [] ;
    if(this.isWindowServer){
      this.windowLocalData.forEach(function(item){
        if(item.name == index){
          data1 = item.data ;
        }
      })
    }else{
      this.localData.forEach(function(item){
        if(item.name == index){
          data1 = item.data ;
        }
      })
    }
    this.newFileArr = this.check(data1) ;

    this.isActive1 = 'show';
    var that = this;
    var timer = setTimeout(function(){
      // alert("2");
      that.isActive1 = '';
      },200)
  }

  //下载文件
  download(i){
    // let head = new Headers({ 'Content-Type': 'application/json' });
    let filePath =  "/" + this.fileStr + "/" + i.name ;
    let url = this.baseUrl + "download" ;
    // let options = new RequestOptions({ headers: head, responseType: 3 });
    let that = this ;
    this.isActive1 = 'show';

   this.fileService.getData(url,filePath).subscribe(res => {
           console.log(res) ;
         },
         res => {

          const link = document.createElement('a');
          const blob = new Blob([res.error.text]);
          link.setAttribute('href', window.URL.createObjectURL(blob));
          link.setAttribute('download', i.name);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          that.isActive1 = '';
        })
  }

}
