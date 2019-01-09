import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  //API
  baseUrl: string = "https://api.github.com/users/"
  repos: string = "repos"
  //Variables
  name = ""
  repositories = []
  constructor() { }
  
  searchRepositories(){

  }

  getName(){
    return this.name
  }

  updateName(updateName){
    this.name = updateName
  }

  filterReopositories(){
    
  }

}
