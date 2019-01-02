import { Component, OnInit } from '@angular/core';
import { ViewChild , AfterViewInit} from '@angular/core' ;
import { RightComponent } from 'src/app/new-right/right/right.component';
import { RightSearchComponent } from './right-search/right-search.component';

@Component({
  selector: 'app-new-right',
  templateUrl: './new-right.component.html',
  styleUrls: ['./new-right.component.css']
})
export class NewRightComponent implements OnInit {

  @ViewChild(RightComponent)
  private rightCom: RightComponent ;
  @ViewChild(RightSearchComponent)
  private rightSea: RightSearchComponent ;

  //tap按钮 为一个数组
  tapArr = ['服务器1'] ;
  ipName = '' ;
  isChange1Class = '';
  isWindowServer = null ;
  // isChange2Class = '';
  // isChange3Class = '';
  // isChange4Class = '';
  isChange1Class2 = '';
  // isChange2Class2 = '';
  // isChange3Class2 = '';
  // isChange4Class2 = '';
  change0 = '链接';
  // change1 = '链接';
  // change2 = '链接';
  // change3 = '链接';
  fileStr = '请选择服务器' ;
  direction = 0;


  constructor() { }

  ngOnInit() {
  }

  //点击发生切换事件
  change(i, index){
    // this.direction = 1 ;

    //给点击的tap按钮加上样式
    this.isChange1Class = i ;
    this.change0 = '已链接';
    this.isChange1Class2 = 'change2';
    var m = this.rightCom ;
    var n = this.rightSea ;
    m.baseUrl = m.baseUrlArr[index] ;
    m.downUrl = m.downUrlArr[index] ;

    if(index%2 == 0){
    // m.isWindowServer = false ;
    // m.isWindowServer = false ;
    // m.file = ["root"]
    // m.fileStr2 = "root"
    // m.getData(m.baseUrl + "showFile","/root/","root") ;
    // console.log(m.baseUrl);
    // console.log(m.downUrl);
    this.changeToGetData(m,false,["root"],"root","/root") ;
    }else{

      this.changeToGetData(m,true,["c:"],"c:","c:") ;
      n.ipAddress = m.downUrlArr[index] ;
    }

  }

  changeToGetData(m,isWindowServer,file,fileStr,param){
        m.isWindowServer = isWindowServer ;
        m.file = file ;
        m.fileStr2 = fileStr ;
        m.getData(m.baseUrl + "showFile",param,fileStr) ;
  }

  //增加一个服务器
  addServer(){
    let index = this.tapArr.length + 1 ;
    let relUrl = this.fullUrl(this.ipName) ;
    this.tapArr.push('服务器'+index) ;

    this.rightCom.baseUrlArr.push(relUrl + "file/") ;
    this.rightCom.downUrlArr.push(relUrl) ;

    // this.rightCom.baseUrl = this.rightCom.baseUrlArr[index-1] ;
    // this.rightCom.downUrl = this.rightCom.downUrlArr[index-1] ;
    console.log(this.rightCom.baseUrlArr) ;
    console.log(this.rightCom.downUrlArr) ;
    this.ipName = null ;
  }

  //删除服务器
  deleteServer(num){
    this.tapArr.splice(num,1) ;
    this.rightCom.downUrlArr.splice(num,1) ;
    this.rightCom.baseUrlArr.splice(num,1) ;

    console.log(111);

  }

  //清空输入框中的内容
  clear(){
    this.ipName = null ;
  }

  fullUrl(str){
    return "http://" + str + ":8899/" ;
  }
}
