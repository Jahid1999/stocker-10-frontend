import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';
import { bbData } from './bb-graph-model';

@Injectable({
  providedIn: 'root'
})
export class BbGraphService {
  private url: string = `${apiEndpoints.baseURL}/bollingerBand/`;
  // private TodayData: any[] = []
  private recievedData: any;
  constructor(private http: HttpClient) { }

  recieveBbData(companyName: any) {
    var bbUrl = this.url + companyName;
    return this.http.get<bbData[]>(bbUrl).pipe(
      map((res: bbData[]) => {
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
