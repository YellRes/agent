import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http" ;

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  list = [] ;
  url = 'http://120.78.164.247:8080/' ;
  tail = {
    id : 199 ,
    name : 'python',
    description : 'this is pyhton' ,
  } ;
  constructor(private http:HttpClient) { }
 
  ngOnInit() {
    // this.getData() ;
    // this.postData(this.tail) ;
  }

  // getData(){
  //   let that = this ;
  //   this.http.get(this.url+'clazz/findAll').subscribe(data=>{
  //     console.log(data) ;
  //     that.list = data.data ;
  //     console.log(that.list) ;
  //   })
  //   console.log(this.list) ;

  // }

  // postData(clazz){
  //   this.http.post(this.url+'clazz/saveOrUpdate',clazz).subscribe(data=>{
  //     console.log(data) ;
  //   })
  // }


}
