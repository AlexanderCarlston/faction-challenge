import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  token: string = ""
  repositories = []
  constructor(private data: DataService) { }

  ngOnInit() {

  }

  submit(){
    fetch("https://api.github.com/users/" + this.token + "/repos")
    .then(response => response.json())
    .then(data => this.repositories = data)
    .catch(error => console.log(error))
  }
}
