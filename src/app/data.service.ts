import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //API
  baseUrl: string = "https://api.github.com/users/"
  //Variables
  searchTerm$ = new Subject<string>();
  repositories = []
  constructor() { }

  getSearchTerm(){
    return this.searchTerm$
  }

  getRepositories(){
    return this.repositories
  }

  updateRepositories(updateRepositories){
    this.repositories = updateRepositories
  }

  filterRepositories(event){

  }

  subscribeToSearchTerm(){

  }
  
}