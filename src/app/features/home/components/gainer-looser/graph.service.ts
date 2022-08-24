import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  url = "http://20.42.24.211/api/"

  getGainerLooser(){
    return this.http.get<any>(this.url + "cat_gainer_loser/?format=json", );
  }
}
