import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  name = ""
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
