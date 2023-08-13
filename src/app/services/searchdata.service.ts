import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {
baseURL: string = 'https://api.spaceflightnewsapi.net/v4/articles/';

  constructor(private http: HttpClient) { }

  fetchData(searchArr: string[]): Observable<any[]> {
    const searchQuery = `${this.baseURL}?title_contains_one=${searchArr.join(',')}&summary_contains_one=${searchArr.join(',')}`;
    return this.http.get<any>(searchQuery).pipe(
      map(data => data.results)
    );
    // console.log();
    
  }
}
