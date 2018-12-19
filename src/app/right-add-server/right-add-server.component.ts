import { Component, OnInit } from '@angular/core';
import { ViewChild , AfterViewInit} from '@angular/core' ;
import { NewRightComponent } from '../new-right/new-right.component'

@Component({
  selector: 'app-right-add-server',
  templateUrl: './right-add-server.component.html',
  styleUrls: ['./right-add-server.component.css']
})
export class RightAddServerComponent implements OnInit {
  @ViewChild(NewRightComponent)
  private server: NewRightComponent ;
  ipName = null ;
  constructor() { }

  ngOnInit() {
  }

  addServer(){
    let index = this.server.tapArr.length ;
    this.server.tapArr.push('服务器'+index) ;
  }

}
