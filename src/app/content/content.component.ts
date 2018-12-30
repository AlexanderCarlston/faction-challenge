import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() name: "test"
  repositories = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(name, "this.name")
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  submit(){
    var name = this.dataService.getName()
    console.log(name)
    fetch("https://api.github.com/users/" + this.name + "/repos")
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
