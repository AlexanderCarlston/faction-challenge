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
  repositories = []
  savedRepositories = []
  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
    var counter = 0
    var searchTerm = this.dataService.getSearchTerm()
    searchTerm.subscribe(value => {
      console.log('Received new subject value: ' + value)

      counter += 1
      console.log("counter", counter)

      if(counter === 1){
        this.savedRepositories = this.repositories
        this.repositories = this.repositories.filter(repository => repository.name.includes(value))
      }

      if(counter !== value.length){
        this.repositories = this.savedRepositories.filter(repository => repository.name.includes(value))
      } else {
        this.repositories = this.repositories.filter(repository => repository.name.includes(value))
      }

    })
  }

  submit(){
    var searchTerm = this.dataService.getSearchTerm()
    // console.log(this.userName, name)
    fetch("https://api.github.com/users/" + this.userName + "/repos")
    .then(response => response.json())
    .then(data => {
      this.repositories = data
      // if(name == ""){
      //   console.log("true")
      //   this.repositories = data
      // } else {
      //   this.repositories = data.filter(repository => repository.name.includes(name))
      // }
    })
    .catch(error => console.log(error))

  }
}
