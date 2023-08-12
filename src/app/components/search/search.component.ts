import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient) { }
  baseURL: string = 'https://api.spaceflightnewsapi.net/v4/articles/';
  flag: any = '';
  ngOnInit() {
    // this.flag = "start"
  }
  onFormSubmit(searchResult: String) {
    // searchResult.preventDefault(); // Відміна стандартної дії форми
    console.log("Form submitted", searchResult);
    console.log(`${this.baseURL}?title_contains_one=${searchResult}`);
    
      this.http.get(`${this.baseURL}?title_contains_one=${searchResult}`).subscribe(
      (data) => {
        console.log('GET request successful', data);
        // Ваш код для обробки отриманих даних
      },
      (error) => {
        console.log('Error occurred', error);
        // Обробка помилки, якщо вона сталася
      }
    );
  }
}