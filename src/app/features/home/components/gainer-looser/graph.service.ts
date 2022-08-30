import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  getGainerLooser(){
    return this.http.get<any>(apiBaseUrl + "cat_gainer_loser/?format=json", );
  }
}
