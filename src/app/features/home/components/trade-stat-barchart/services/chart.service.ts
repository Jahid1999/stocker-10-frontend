import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  tradeStatBarchartData!: any;

  constructor(private http:HttpClient) { }

  getTradeStatBarchartData(){
  return from(this.http.get(apiEndpoints.baseURL+apiEndpoints.tradeStatistics))
  }
}
