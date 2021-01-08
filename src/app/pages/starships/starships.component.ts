import { Component, OnInit } from '@angular/core';
import { IStarship } from 'src/app/models/starship.interface';

import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public starships: IStarship[] = [];
  public nextPage: string = null;
  public previousPage: string = null;
  public loading: boolean = true;
  public loadingMore: boolean = false;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    document.title = "SWAPI Starships - List";
    this.getLocalStarships();
    this.getStarships();
  }

  getLocalStarships() {
    this.starships = this.starshipsService.getLocalStarShips();
  }

  getStarships(page?: string) {
    this.starshipsService.getStarships(page).subscribe((resp: any) => {
      this.starships = [...this.starships, ...resp.results];
      this.nextPage = resp.next;
      this.previousPage = resp.previous;
      this.loading = false;
      this.loadingMore = false;
    });
  }

  getUrl(url: string) {
    const urlSplitted =  url.split("/");
    return urlSplitted[urlSplitted.length-2];
  }

  loadMore() {
    this.loadingMore = true;
    const page = this.nextPage.substring(this.nextPage.lastIndexOf("/")+1);
    this.getStarships(page);    
  }

}
