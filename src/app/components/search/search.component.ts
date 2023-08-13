import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchdataService } from 'src/app/services/searchdata.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  constructor( private dataService: SearchdataService) { }
  searchResults: any[] = [];
  onFormSubmit(searchResult: String) {
    const searchArr = searchResult.split(' ')
    this.dataService.fetchData(searchArr).subscribe(
      (results) => {
        this.searchResults = results;
        console.log(this.searchResults);
        
      },
      (error) => {
        console.log('Error occurred', error);
      }
    );
  }
}