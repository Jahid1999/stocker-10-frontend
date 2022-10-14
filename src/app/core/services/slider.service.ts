import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private url: string = `${apiEndpoints.baseURL}/slidebar/data`;

  constructor(private http: HttpClient) { }


  public getSliderData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
