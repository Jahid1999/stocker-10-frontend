import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OtherIndicatorsService {

  private url:string = 'http://63.33.210.220/api/dY_MACD_PE/'

  constructor(private http: HttpClient) { }

  public getOtherIndicatorsData(company_code: string): Observable<any>{
    return this.http.get<any>(this.url + company_code);
  }

}
