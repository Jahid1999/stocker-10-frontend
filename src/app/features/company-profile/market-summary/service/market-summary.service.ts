import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketSummaryService {

  constructor(private http: HttpClient) { }

  getMarketSummary(companyCode:string){
    companyCode = 'ACI'
    return this.http.get(apiEndpoints.baseURL+'/market_summary/'+companyCode);
  }
  getGraphData(companyCode:string){
    let startingFrom = new Date();

    startingFrom.setDate(startingFrom.getDate()-365)
    //yesterdayDate.setDate(yesterdayDate.getDate() - 365);
    //console.log(yesterdayDate.toDateString())
    companyCode = 'ACI';
    return this.http.get(apiEndpoints.baseURL+'/get_market_summary_graph/'+companyCode+'/'+startingFrom.toDateString());
  }
}
