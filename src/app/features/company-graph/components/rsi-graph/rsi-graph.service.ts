import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RsiGraphService {

  constructor(private http: HttpClient) {}

  url = apiEndpoints.baseURL;

  getRSI(company_code : any) {
    return this.http.get<any>(this.url + "/rsi_graph/" + company_code + "/?format=json");
  }
}
