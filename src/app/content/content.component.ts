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
    console.log(this.token)
    fetch(`https://api.github.com/users/{{this.token}}/repos`)
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
}
