import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { apiEndpoints } from 'src/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class OtherIndicatorsService {

  private url: string = `${apiEndpoints.baseURL}/dY_MACD_PE/`;

  constructor(private http: HttpClient) { }

  public getOtherIndicatorsData(company_code: string): Observable<any>{
    console.log(this.url+company_code);
    return this.http.get<any>(this.url + company_code as string);
  }

}
