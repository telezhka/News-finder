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
    this.flag = ['The', 'most', 'successful', 'IT', 'companies', 'in', '2020']
  }
  onFormSubmit(searchResult: String) {
    const searchArr = searchResult.split(' ')
    console.log("Form submitted", searchResult);
    console.log(searchArr);
    
    console.log(`${this.baseURL}?title_contains_one=${searchArr}&summary_contains_one=${searchArr}`);
    
      this.http.get(`${this.baseURL}?title_contains_one=${searchArr}&summary_contains_one=${searchArr}`).subscribe(
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