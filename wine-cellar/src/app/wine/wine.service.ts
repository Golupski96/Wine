import { Injectable } from '@angular/core';
import { Wine } from './model/wine';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = "http://localhost:3000/api/wines";

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private httpClient: HttpClient) { }

  create(wine: Wine): Observable<any> {
    return this.httpClient.post(baseURL, wine);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(baseURL + "/" + id);
  }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  update(wine: Wine): Observable<any> {
    return this.httpClient.put(baseURL + "/" + wine.id, wine);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(baseURL + "/" + id);
  }

}
