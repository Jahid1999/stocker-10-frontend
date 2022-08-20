import { Injectable , OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TodayData } from './Today-data-bar-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = 'http://20.237.1.65/api/cat_todays_value/'
  // private TodayData: any[] = []
  private recievedData:any
  constructor(private http:HttpClient){}

  recieveTodayData()
  {
    return this.http.get<TodayData[]>(this.url).pipe(map((res:TodayData[])=>{
      // console.log(res);
      return res;
    }))

  }

}
