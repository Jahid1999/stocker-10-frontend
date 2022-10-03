import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/api-endpoints';
@Injectable({
  providedIn: 'root'
})
export class ObvDataService {

  constructor(private http: HttpClient) {}

  getOBVGraphData(companyCode:any) {
    return this.http.get<any>(
      apiEndpoints.baseURL + `/ovp/${companyCode}`
    );
  }
}
