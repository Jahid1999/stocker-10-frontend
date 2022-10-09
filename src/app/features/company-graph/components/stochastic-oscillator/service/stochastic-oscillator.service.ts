import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StochasticOscillatorService {

  dataReady = false;

  constructor(private http: HttpClient) { }

  getStochasticData(companyCode: string){
    //companyCode = 'ACI';
    return this.http.get(apiEndpoints.baseURL+'/stochastic/'+companyCode);
  }

  getCandleData(companyCode: string){
    //companyCode = 'ACI';
    return this.http.get(apiEndpoints.baseURL+'/candle_graph/'+companyCode);
  }
}
