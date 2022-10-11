import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiEndpoints} from "../../../../../api-endpoints";

@Injectable({
  providedIn: 'root'
})
export class SharePatternService {
  constructor(private http: HttpClient) {}

  getSharePattern(companyCode:any) {
    return this.http.get<any>(
      apiEndpoints.baseURL + `/shareholder_data/${companyCode}`
    );
  }
}
