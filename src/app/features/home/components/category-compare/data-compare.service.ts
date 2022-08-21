import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DataCompare } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataCompareService {

  private url:string = 'http://20.237.1.65/api/cat_compare/'
  constructor(private http:HttpClient){}

  getCompareData()
  {
    return this.http.get<DataCompare[]>(this.url).pipe(map((res:DataCompare[])=>{
      return res;
    }))
  }
}
