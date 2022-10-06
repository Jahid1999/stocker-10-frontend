import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmGraphService {

  constructor(private http: HttpClient) {}

  url = apiEndpoints.baseURL;

  getAverageDirectionalIndex(company_code : any) {
    return this.http.get<any>(this.url + "/averageDirectionalIndex/" + company_code + "/?format=json");
  }
}
