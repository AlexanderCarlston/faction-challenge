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
  searchTerm = ""
  repositories = []
  constructor() { }

  getName(){
    return this.searchTerm
  }

  updateName(updateSearchTerm){
    this.searchTerm = updateSearchTerm
  }

  getRepositories(){
    return this.repositories
  }

  updateRepositories(updateRepositories){
    this.repositories = updateRepositories
  }

}