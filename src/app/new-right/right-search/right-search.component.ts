import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http" ;
import { FileService } from '../../file.service' ;

@Component({
  selector: 'app-right-search',
  templateUrl: './right-search.component.html',
  styleUrls: ['./right-search.component.css']
})
export class RightSearchComponent implements OnInit {
  isActive1 = '';
  direction = 1;
  isActive2 = '';
  isActive3 = '';
  ipAddress = "http://10.52.19.163:8899" ;
  proName : null
  pro = {
    name : '' ,
    result : null
  }

  constructor(private http:HttpClient,
        private fileService: FileService) { }

  ngOnInit() {
  }

  getStatus(proName){
    let that = this ;
    this.fileService.getData( this.ipAddress + "process/showProcess",proName).subscribe(data=>{
        that.pro.name = that.proName ;
        that.pro.result = data['result'] ;

    })

  }

  clean(){
    this.pro = {
      name : '' ,
      result : null
    }

    this.proName = null ;
  }

  search(){
   if(this.direction == 1 ){
     this.direction = 0;
    this.isActive1 = 'show';
    this.isActive2 = 'change';
   }
   else{
    this.direction = 1;
    this.isActive1 = '';
    this.isActive2 = '';
   }
  }
}
