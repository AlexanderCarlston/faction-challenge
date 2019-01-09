import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class ContentComponent implements OnInit {

  userName = ""
  repositories$ = []
  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  submit(){
    var name = this.dataService.getName()
    // console.log(this.userName, name)
    fetch("https://api.github.com/users/" + this.userName + "/repos")
    .then(response => response.json())
    .then(data => {
      if(name == ""){
        console.log("true")
        this.repositories$ = data
      } else {
        this.repositories$ = data.filter(repository => repository.name.includes(name))
      }
    })
    .catch(error => console.log(error))
  }
}
