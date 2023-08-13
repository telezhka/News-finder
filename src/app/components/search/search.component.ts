import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchdataService } from 'src/app/services/searchdata.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient, private dataService: SearchdataService) { }
  baseURL: string = 'https://api.spaceflightnewsapi.net/v4/articles/';
  searchResults: any[] = [];
  // flag: any = '';
  ngOnInit() {
    // this.flag = ['The', 'most', 'successful', 'IT', 'companies', 'in', '2020']
  }
  onFormSubmit(searchResult: String) {
    const searchArr = searchResult.split(' ')
    // console.log("Form submitted", searchResult);
    // console.log(searchArr);
    
    // console.log(`${this.baseURL}?title_contains_one=${searchArr}&summary_contains_one=${searchArr}`);
    
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