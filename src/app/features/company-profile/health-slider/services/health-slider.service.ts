import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HealthSliderService {

  private url:string = 'http://63.33.210.220/api/health_indicator/'

  constructor(private http: HttpClient) { }

  public getHealthSliderData(company_name: string): Observable<any>{
    return this.http.get<any>(this.url + company_name);
  }

  public getHealthIndicatorAbbreviation(name: string){

    switch(name){
      case "eps": return "EPS";
      case "audited_PE": return "APE";
      case "unaudited_PE": return "UPE";
      case "PEG_ratio": return "PEG RATIO";
      case "dividend_payout_ratio": return "DP RATIO";
      case "dividend_yield": return "DY";
      default: return "";
    }
  }

}
