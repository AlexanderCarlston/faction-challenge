import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  name = "WORKS"
  repositories = []
  constructor() { }
  
  getName(){
    return this.name
  }

  updateName(updateName){
    this.name = updateName
  }

  filterReopositories(){

  }

}
