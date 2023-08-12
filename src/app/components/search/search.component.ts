import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  flag: any = '';
  ngOnInit() {
    // this.flag = "start"
  }
  onFormSubmit(event: Event) {
    event.preventDefault(); // Відміна стандартної дії форми
    console.log("Form submitted", this.flag);
  }
}