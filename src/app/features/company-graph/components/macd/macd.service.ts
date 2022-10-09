import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class MacdService {
  constructor(private http: HttpClient) {}

  getMacdData(companyCode:any) {
    return this.http.get<any>(
      apiEndpoints.baseURL + `/macd_graph/${companyCode}`
    );
  }
}
