import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class BbGraphService {
  private url: string = `${apiEndpoints.baseURL}/`;
  // private TodayData: any[] = []
  private recievedData: any;
  constructor(private http: HttpClient) { }

  recieveBbData(companyName: any) {
    var bbUrl = this.url + 'bollingerBand/'+companyName;
    return this.http.get<any[]>(bbUrl).pipe(
      map((res: any[]) => {
        // console.log(res);
        return res;
      })
    );
  }
  recieveCandleData(companyName:any){
    var candleUrl = this.url +'candle_graph/'+companyName;
    return this.http.get<any[]>(candleUrl).pipe(
      map((res: any[]) => {
        // console.log(res);
        return res;
      })
    );
  }

  recieveSMA(companyName:any){
    var smaUrl = this.url +'moving_average_graph/'+companyName;
    return this.http.get<any[]>(smaUrl).pipe(
      map((res: any[]) => {
        // console.log(res);
        return res;
      })
    );
  }

  getCompanyNameCode() {
    let url = "http://63.33.210.220/api/home_company_data/";
    return this.http.get<any[]>(url).pipe(
      map((res: any) => {
        return res
      })
    )
  }

}
