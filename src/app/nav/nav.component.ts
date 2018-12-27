import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  name = ""
  constructor() { }

  ngOnInit() {
  }

  getName(){
    return this.name
  }

  onKey(event: any){
    console.log(this.name + event.target.value)
  }

}
