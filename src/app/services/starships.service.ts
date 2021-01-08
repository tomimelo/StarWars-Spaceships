import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "https://swapi.dev/api";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(url = `${base_url}/starships`) {
    return this.http.get(url);
  }
}
