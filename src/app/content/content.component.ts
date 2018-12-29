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
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  filterRepositories(){

  }

  submit(){
    var name = this.dataService.getName()
    console.log(name)
    fetch("https://api.github.com/users/" + this.token + "/repos")
    .then(response => response.json())
    .then(data => {
      if(name == ""){
        console.log("true")
        this.repositories = data
      } else {
        var dataUnfiltered = data
        this.repositories = dataUnfiltered.filter(repository => repository.name.includes(name))
      }
    })
    .catch(error => console.log(error))
  }
}
