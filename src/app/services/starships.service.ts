import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStarship } from '../models/starship.interface';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public base_url: string = "https://swapi.dev/api";

  constructor(private http: HttpClient) { }

  getStarships(param: string = "") {
    return this.http.get(`${this.base_url}/starships/${param ? param+'/' : ""}`);
  }

  createStarship(starship: IStarship) {
    const starships: IStarship[] = JSON.parse(localStorage.getItem("starships")) || [];
    starships.push(starship);
    localStorage.setItem("starships", JSON.stringify(starships));
    return starship;
  }

  getLocalStarShips() {
    return JSON.parse(localStorage.getItem("starships")) || [];
  }

  searchLocalStarship(id) {
    const localStarships = this.getLocalStarShips();
    return localStarships.find((starship: IStarship) => {
      const urlSplitted = starship.url.split("/");
      return id === urlSplitted[urlSplitted.length-2];
    });
  }
}
