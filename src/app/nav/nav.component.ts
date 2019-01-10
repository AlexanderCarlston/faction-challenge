import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm: string = ""
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // console.log(this.dataService.getName())
  }

  onKey(event: any){
    this.dataService.updateName(this.searchTerm + event.target.value)


  }

}
