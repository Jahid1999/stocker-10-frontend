import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class BarGraphService {
  constructor(private http: HttpClient) {}

  getGainerLooser() {
    return this.http.get<any>(
      apiEndpoints.baseURL + '/cat_gainer_loser/?format=json'
    );
  }

  getTodaysData() {
    return this.http.get<any>(
      apiEndpoints.baseURL + '/cat_todays_value/?format=json'
    );
  }

  getCompareData() {
    return this.http.get<any>(
      apiEndpoints.baseURL + '/cat_compare/?format=json'
    );
  }

  // recieveTodayData()
  // {
  //   return this.http.get<TodayData[]>(this.url).pipe(map((res:TodayData[])=>{
  //     // console.log(res);
  //     return res;
  //   }))

  // }
}
