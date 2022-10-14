import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileCardService {
  constructor(private http: HttpClient) {}

  url = apiEndpoints.baseURL;

  getProfile(companyname: any) {
    return this.http.get<any>(this.url + '/company_description/' + companyname);
  }
}
