import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm$;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.searchTerm$ = this.dataService.getSearchTerm()
  }

  onKey(event: any){
    // this.dataService.updateName(this.searchTerm + event.target.value)
    this.dataService.filterRepositories(event)
  }

}
