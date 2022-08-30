import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { News } from "./news.model"
import { apiBaseUrl } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataCompareService {

  private url:string = `${apiBaseUrl}cat_compare/`
  constructor(private http:HttpClient){}

  getNewsData()
  {
    return this.http.get<News[]>(this.url).pipe(map((res:News[])=>{
      return res;
    }))
  }
}
