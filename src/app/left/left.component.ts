import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  isActive1 = '';
  isActive2 = '';
  isActive3 = '';
  isActive4 = '';
  isActive5 = 'show3';
  isActive6 = 'show3';
  direction = 0;
  smallLogo = '<';
  isBlueClass = false ;
  isBlueClass1 = false ;
  isBlueClass2 = true ;
  isBlueClass3 = true ;
  constructor() { }
 
  ngOnInit() {
  }

  isShow(){
    if(this.direction === 0){
      this.direction = 1;
      this.isActive1 = 'show';
      this.smallLogo = '>';
      this.isActive2 = 'show2';
    }else{
      this.direction = 0;
      this.isActive1 = '';
       this.smallLogo = '<';
      this.isActive2 = '';

    }

  } 
  
  // isBlue(){
  //  this.isBlueClass = true ;
  //  this.isBlueClass1 = false ;
  //  this.isBlueClass2 = false ;
  //  this.isActive5 = '';
  //  this.isActive3 = 'show3';
  //  this.isActive4 = '';
  // //  console.log(1);
  // } 
  // isBlue1(){
    
  //   this.isBlueClass = false ;
  //   this.isBlueClass1 = true ;
  //   this.isBlueClass2 = false ;
  //   this.isActive5 = '';
  //   this.isActive3 = '';
  //   this.isActive4 = 'show3';
  // //  console.log(2);

  //  }
   isBlue2(){
    if(this.direction === 0){
    this.isBlueClass = false ;
    this.isBlueClass2 = true ;
    this.isBlueClass1 = false ;
    this.isActive5 = 'show3';
    this.isActive6 = 'show3';
    this.direction = 1;
    this.isActive3 = '';
    this.isActive4 = '';}
    else if( this.direction === 1&&this.isActive6 == 'show3'){
      this.direction = 0;
      this.isActive6 = '';

    }
    else{
      this.isBlueClass = false ;
    this.isBlueClass2 = true ;
    this.isBlueClass1 = false ;
    this.isActive5 = 'show3';
    this.isActive6 = 'show3';
    this.direction = 1;
    this.isActive3 = '';
    this.isActive4 = '';
    }

    
  //  console.log(2);

   }
   isBlue3(){
    this.isActive5 = 'show3';
    this.isBlueClass3 = true ;
   }
}
