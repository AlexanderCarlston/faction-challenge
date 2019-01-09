import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //API
  baseUrl: string = "https://api.github.com/users/"
  //Variables
  name = ""
  repositories = []
  constructor() { }
  
  search(terms: Observable<string>){

  }

  searchRepositories(term){
    return
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