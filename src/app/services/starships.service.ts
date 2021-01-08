import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public base_url: string = "https://swapi.dev/api";

  constructor(private http: HttpClient) { }

  getStarships(param: string = "") {
    return this.http.get(`${this.base_url}/starships/${param}`);
  }
}
