import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DataCompare } from './data.model';
import { apiBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataCompareService {

  private url:string = `${apiBaseUrl}cat_compare/`
  constructor(private http:HttpClient){}

  getCompareData()
  {
    return this.http.get<DataCompare[]>(this.url).pipe(map((res:DataCompare[])=>{
      return res;
    }))
  }
}
