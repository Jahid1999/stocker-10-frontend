import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { News } from './news.model';
import { apiEndpoints } from 'src/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url: string = `${apiEndpoints.baseURL}/report_with_news/`;
  constructor(private http: HttpClient) {}

  getNewsData(company_code:string ) {
    return this.http.get<News[]>(this.url+company_code).pipe(
      map((res: News[]) => {
        return res;
      })
    );
  }
}
