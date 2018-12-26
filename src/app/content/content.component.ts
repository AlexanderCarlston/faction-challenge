import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  token: string = ""
  constructor(private data: DataService) { }

  ngOnInit() {

  }

  submit(){
    console.log("worked")
  }
}
