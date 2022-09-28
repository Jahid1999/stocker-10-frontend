import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor(private http: HttpClient) {}

  url = apiEndpoints.baseURL;

  getGainerLooser() {
    return this.http.get<any>(this.url + 'cat_gainer_loser/?format=json');
  }
}
