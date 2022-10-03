import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private url:string = 'http://63.33.210.220/api/slidebar/data/'

  constructor(private http: HttpClient) { }


  public getSliderData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  public tempGetSliderData(){
    let data: any[] = [
      {
        "name" : "BEXIMCO",
        "trade" : 0.10,
        "price" : 13.5,
        "percentage" : 1.5

      },
      {
        "name" : "FORTUNE",
        "trade" : 1.4,
        "price" : 16.5,
        "percentage" : 1.2

      },
      {
        "name" : "LHBL",
        "trade" : -0.3,
        "price" : 73.5,
        "percentage" : -1.3
      },
      {
        "name" : "MALEKSPIN",
        "trade" : 3.09,
        "price" : 65.7,
        "percentage" : 1.1
      },
      {
        "name" : "IPDC",
        "trade" : 0.00,
        "price" : 78.9,
        "percentage" : 0.0

      },
      {
        "name" : "BSC",
        "trade" : 1.65,
        "price" : 34.2,
        "percentage" : 1.7

      },
      {
        "name" : "KDSALTD",
        "trade" : -0.9,
        "price" : 89.7,
        "percentage" : -1.6,

      },
      {
        "name" : "BATBC",
        "trade" : 0.8,
        "price" : 23.6,
        "percentage" : 1.8

      },
      {
        "name" : "INTRACO",
        "trade" : -0.8,
        "price" : 38.6,
        "percentage" : -1.1
      },
      {
        "name" : "OLYMPIC",
        "trade" : 1.2,
        "price" : 41.3,
        "percentage" : 1.9

      },
      {
        "name" : "MEGHNA",
        "trade" : 0.00,
        "price" : 56.6,
        "percentage" : 0.0,

      },
      {
        "name" : "JAMUNA",
        "trade" : 1.21,
        "price" : 45.5,
        "percentage" : 1.5,

      }
    ];

    return data;
  }
}
