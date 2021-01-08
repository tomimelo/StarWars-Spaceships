import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  private starshipId: string;
  public starship: any;
  public loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.starshipId = this.route.snapshot.paramMap.get("id");
    this.getStarship();
  }

  getStarship() {
    this.starshipsService.getStarships(this.starshipId).subscribe(starship => {
      this.starship = starship;
      this.loading = false;
    });
  }

}
