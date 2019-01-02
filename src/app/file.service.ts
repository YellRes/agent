import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable , of } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

    getData(url,path){
      return this.http.post(url,path) ;
    }


}
