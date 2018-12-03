import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-right',
  templateUrl: './new-right.component.html',
  styleUrls: ['./new-right.component.css']
})
export class NewRightComponent implements OnInit {
  isChange1Class = '';
  isChange2Class = '';
  isChange3Class = '';
  isChange4Class = '';
  isChange1Class2 = '';
  isChange2Class2 = '';
  isChange3Class2 = '';
  isChange4Class2 = '';
  change = '链接';
  change1 = '链接';
  change2 = '链接';
  change3 = '链接';
  fileStr = '请选择服务器' ;
  direction = 0;
  

  constructor() { }

  ngOnInit() {
  }
  isChange1(){
    if(this.direction === 0){
    this.direction = 1; 
    this.isChange1Class = 'change1';
    this.isChange2Class = '';
    this.isChange3Class = '';
    this.isChange4Class = '';
    this.isChange1Class2 = 'change2';
    this.isChange2Class2 = '';
    this.isChange3Class2 = '';
    this.isChange4Class2 = '';
    this.change = '已链接';
    this.change1 = '链接';
    this.change2 = '链接';
    this.change3 = '链接';
    this.fileStr = '服务器1' ;}
    else if(this.direction === 1 && this.fileStr == '服务器1'){
      this.direction = 0;
      this.isChange1Class = '';
      this.isChange1Class2 = '';
      this.change = '链接';
      this.fileStr = '请选择服务器';
    }else{
     
      this.direction = 1; 
      this.isChange1Class = 'change1';
      this.isChange2Class = '';
      this.isChange3Class = '';
      this.isChange4Class = '';
      this.isChange1Class2 = 'change2';
      this.isChange2Class2 = '';
      this.isChange3Class2 = '';
      this.isChange4Class2 = '';
      this.change = '已链接';
      this.change1 = '链接';
      this.change2 = '链接';
      this.change3 = '链接';
      this.fileStr = '服务器1' ;
    }
  }
  isChange2(){
    if(this.direction === 0){
      this.direction = 1;
    this.isChange1Class = '';
    this.isChange2Class = 'change1';
    this.isChange3Class = '';
    this.isChange4Class = '';
    this.isChange1Class2 = '';
    this.isChange2Class2 = 'change2';
    this.isChange3Class2 = '';
    this.isChange4Class2 = '';
    this.change1 = '已链接';
    this.change = '链接';
    this.change2 = '链接';
    this.change3 = '链接';
    this.fileStr = '服务器2' ;}
    else if(this.direction === 1 && this.fileStr == '服务器2'){
      this.direction = 0;
      this.isChange2Class = '';
      this.isChange2Class2 = '';
      this.change1 = '链接';
      this.fileStr = '请选择服务器';
    }else{
      this.direction = 1;
      this.isChange1Class = '';
      this.isChange2Class = 'change1';
      this.isChange3Class = '';
      this.isChange4Class = '';
      this.isChange1Class2 = '';
      this.isChange2Class2 = 'change2';
      this.isChange3Class2 = '';
      this.isChange4Class2 = '';
      this.change1 = '已链接';
      this.change = '链接';
      this.change2 = '链接';
      this.change3 = '链接';
      this.fileStr = '服务器2' ;
    }
  }
  isChange3(){
    if(this.direction === 0){
      this.direction = 1;
    this.isChange1Class = '';
    this.isChange2Class = '';
    this.isChange3Class = 'change1';
    this.isChange4Class = '';
    this.isChange1Class2 = '';
    this.isChange2Class2 = '';
    this.isChange3Class2 = 'change2';
    this.isChange4Class2 = '';
    this.change2 = '已链接';
    this.change1 = '链接';
    this.change = '链接';
    this.change3 = '链接';
    this.fileStr = '服务器3' ;}
    else if(this.direction === 1 && this.fileStr === '服务器3'){
      this.direction = 0;
      this.isChange3Class = '';
      this.isChange3Class2 = '';
      this.change2 = '链接';
      this.fileStr = '请选择服务器';
    }else{
      this.direction = 1;
    this.isChange1Class = '';
    this.isChange2Class = '';
    this.isChange3Class = 'change1';
    this.isChange4Class = '';
    this.isChange1Class2 = '';
    this.isChange2Class2 = '';
    this.isChange3Class2 = 'change2';
    this.isChange4Class2 = '';
    this.change2 = '已链接';
    this.change1 = '链接';
    this.change = '链接';
    this.change3 = '链接';
    this.fileStr = '服务器3' ;
    }
  }
  isChange4(){  
    if(this.direction === 0){
    this.direction = 1;
    this.isChange1Class = '';
    this.isChange2Class = '';
    this.isChange3Class = '';
    this.isChange4Class = 'change1';
    this.isChange1Class2 = '';
    this.isChange2Class2 = '';
    this.isChange3Class2 = '';
    this.isChange4Class2 = 'change2';
    this.change3 = '已链接';
    this.change1 = '链接';
    this.change2 = '链接';
    this.change = '链接';
    this.fileStr = '服务器4' ;}
    else if(this.direction === 1 && this.fileStr == '服务器4'){
      this.direction = 0;
      this.isChange4Class = '';
      this.isChange4Class2 = '';
      this.change3 = '链接';
      this.fileStr = '请选择服务器';
    }else{
      this.direction = 1;
      this.isChange1Class = '';
      this.isChange2Class = '';
      this.isChange3Class = '';
      this.isChange4Class = 'change1';
      this.isChange1Class2 = '';
      this.isChange2Class2 = '';
      this.isChange3Class2 = '';
      this.isChange4Class2 = 'change2';
      this.change3 = '已链接';
      this.change1 = '链接';
      this.change2 = '链接';
      this.change = '链接';
      this.fileStr = '服务器4' ;
    }
  }
}
