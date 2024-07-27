import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private httpClient: HttpClient){}

  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


  getSearchFood(name : any) : Observable <any> | any{

    console.log(name.search)
    return this.httpClient.get<any>(`https://dummyjson.com/recipes/search?q=${name}`)
  }


}
