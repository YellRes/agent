import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http" ;



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
  file = ['root'] ;
  fileStr = '' ;
  isActive1 = '';
  
  // selectedFile = '.txt' ;
  // 构建前台对象数组 对象两个属性(路径名 数据)
  // 1.记录当前路径下的数据
  // 2.打开页面 构建对象 存储入内 push
  // 3.返回上一级 pop出一个对象
  localData = [{
    name : 'root' ,
    data : this.fileArr 
  }] ; //管理数据

  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getData('/root/','root') ;
    // console.log(this.fileArr) ;
    // let that = this ;
    // var timer = setTimeout(function(){
    //   // alert("2");
    //   that.newFileArr = that.check(this.fileArr) ;
    //   },200)
   
    // console.log(this.newFileArr) ;
    // console.log(this.newFileArr) ;
    this.fileStr = this.arrToStr(this.file) ;
    

    // console.log(this.arrToStr(this.file)) ;
   
  }

  //**********函数功能部分

  从后台获取数据
  getData(path,currentPah){
  
    let that = this ;
     this.http.post("http://10.52.19.163:8899/file/showFile",path).subscribe(data=>{
          // console.log(data);
          that.fileArr = data.result;         
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
     
           this.localData.push(object) ;
        })
    // console.log(this.fileArr) ;   // 这一行tm就没有数据了 ？？？？？？
  }

  

  //数组转字符串
  arrToStr(arr){
    let str = '' ;
    let that = this ;
    arr.forEach(function(item,index){
      //若为数组最后一个元素 则无需添加'\'
      if(index == arr.length-1){
        str = str + item ;
        
      }else{
        str = str + item + "\/" ;
      }
    })
    return str ;
  }



  //区分文件以及文件夹
  check(arr){
    // console.log(arr) ;
    var newArr = [] ;
    
      arr.forEach(function(item){
         
          //去除带. 的文件夹
         
          var reg0 = /^\./ ;
          var result0 = reg0.test(item) ;
          // console.log(result0) ;
          if(!result0){
              //判断是否为文件夹
              // console.log(1) ;
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
            //返回对象
            // console.log(obj) ;
            newArr.push(obj) ;
            return obj ;
        }
      })
      // console.log(newArr) ;
      return newArr ;
      
      
    
    }
      
    
   
 
  
  // 双击打开文件夹
  // 1.获取文件夹信息
  // 2.将文件名添加到路径名后
  // 3.根据现在的文件名查找 文件夹目录下的内容
  // 4.显示文件
  openFile(i){
     this.file.push(i.name) ;
     this.fileStr = this.arrToStr(this.file) ;
     //显示出 返回上一级 的按钮
     this.firstFile = true ;
     //从后台获取的数据
    //  this.newFileArr = this.check(this.getData(i.name)) ;
    console.log(this.fileStr) ;
    this.getData('/'+this.fileStr,i.name) ;

     var newData = this.fileArr ;
    //  this.newFileArr = this.check(newData) ;

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
    this.fileStr = this.arrToStr(this.file) ;
    //返回到 root层时无需 显示按钮
    if(!(this.fileStr == 'root')){
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
    this.localData.forEach(function(item){
      if(item.name == index){
        data1 = item.data ;
      }
  
    })
    
    this.newFileArr = this.check(data1) ;

    this.isActive1 = 'show';
    var that = this;
    var timer = setTimeout(function(){
      // alert("2");
      that.isActive1 = '';
      },200)
  }

}
