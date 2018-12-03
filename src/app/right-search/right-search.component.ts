import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http" ;

@Component({
  selector: 'app-right-search',
  templateUrl: './right-search.component.html',
  styleUrls: ['./right-search.component.css']
})
export class RightSearchComponent implements OnInit {
  pro = {
    name : '' ,
    result : null 
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getStatus(proName){
    let that = this ;
    this.http.post("http://10.52.19.163:8899/process/showProcess",proName).subscribe(data=>{
        that.pro.name = proName ;
        that.pro.result =  data.result ;
    })
  }

  clean(){
    this.pro = {
      name : '' ,
      result : null 
    }
  }

}
