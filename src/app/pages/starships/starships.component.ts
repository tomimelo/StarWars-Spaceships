import { Component, OnInit } from '@angular/core';

import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public starships: any[] = [];
  public nextPage: string = null;
  public previousPage: string = null;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(url?: string) {
    this.starshipsService.getStarships(url).subscribe((resp: any) => {
      this.starships = [...this.starships, ...resp.results];
      this.nextPage = resp.next;
      this.previousPage = resp.previous;
      console.log(resp);
    });
  }

  loadMore() {
    this.getStarships(this.nextPage);    
  }

}
