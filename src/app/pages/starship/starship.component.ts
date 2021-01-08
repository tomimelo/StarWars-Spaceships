import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStarship } from 'src/app/models/starship.interface';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  private starshipId: string;
  public starship: IStarship;
  public loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    document.title = "SWAPI Starships - Starship Details";
    this.starshipId = this.route.snapshot.paramMap.get("id");
    this.getStarship();
  }

  getStarship() {
    const starshipFound = this.starshipsService.searchLocalStarship(this.starshipId);
    if(!starshipFound) {
      this.starshipsService.getStarships(this.starshipId).subscribe((starship: IStarship) => {
        this.starship = starship;
        this.loading = false;
      });
    } else {
      this.starship = starshipFound;
      this.loading = false;
    }
  }

}
