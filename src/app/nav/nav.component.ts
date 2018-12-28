import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  name: string = ""
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.getName())
  }

  onKey(event: any){
    // console.log(this.name + event.target.value)
    this.dataService.updateName(this.name + event.target.value)
    // console.log("name value", this.dataService.getName())
  }

}
