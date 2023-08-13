import { Component } from '@angular/core';
import { SearchdataService } from 'src/app/services/searchdata.service';
import { DatePipe } from '@angular/common';

interface SearchResult {
  image_url: string;
  title: string;
  summary: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [DatePipe]
})
export class SearchComponent{
  constructor(private datePipe: DatePipe, private dataService: SearchdataService) { }
  searchResults: any[] = [];
  isOpen: boolean = false;
  markup: string = ''
  result: SearchResult | null = null;

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
  formatDate(dateString: string): string {
  if (dateString === null) {
    return ''; 
  }

  const date = new Date(dateString);
  return this.datePipe.transform(date, 'MMMM d\'th\', yyyy') || '';
  }
  openArt(id: any) {
    this.isOpen = true
    this.result = this.searchResults.find(option => option.id === id)
  
  }
  closeArt() {
    // const cont = document.querySelector(".art-cont")
    this.markup = ''
    this.isOpen = false
  }
}