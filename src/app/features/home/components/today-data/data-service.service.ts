import { Injectable , OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TodayData } from './Today-data-bar-model';
import { apiBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = `${apiBaseUrl}cat_todays_value/`
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
