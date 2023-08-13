import { Component } from '@angular/core';
import { SearchdataService } from 'src/app/services/searchdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  searchResults: any[] = [];

  // constructor(private dataService: SearchdataService) {
  //   this.searchResults = this.dataService.getSearchResults();
  // }
  
}
