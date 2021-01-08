import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IStarship } from 'src/app/models/starship.interface';
import { StarshipsService } from 'src/app/services/starships.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-starship',
  templateUrl: './new-starship.component.html',
  styleUrls: ['./new-starship.component.css']
})
export class NewStarshipComponent implements OnInit {

  public newStarshipForm: FormGroup;
  public imageUrl: string = "assets/imgs/no-starship.jpg";

  constructor(private fb: FormBuilder,
              private starshipsService: StarshipsService) { }

  get imageControl() {
    return this.newStarshipForm.get("img");
  }

  ngOnInit(): void {
    this.initForm();
  }
  
  setDefaultImage() {
    this.imageUrl = "assets/imgs/no-starship.jpg";
  }
  updateImageUrl() {
    if(this.imageControl.value.startsWith("http://") || this.imageControl.value.startsWith("https://")) {
      return this.imageUrl = this.imageControl.value;
    }
    this.imageUrl = `http://${this.imageControl.value}`;
  }

  initForm() {
    this.newStarshipForm = this.fb.group({
      img: new FormControl("", Validators.required),      
      name: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      starship_class: new FormControl("", Validators.required),
      manufacturer: new FormControl("", Validators.required),
      cargo_capacity: new FormControl("", Validators.required),
      cost_in_credits: new FormControl("", Validators.required),
      crew: new FormControl("", Validators.required),
      length: new FormControl("", Validators.required),
      passengers: new FormControl("", Validators.required)
    });
  }

  createStarship() {
    if(this.newStarshipForm.invalid) return;
    const newStarship: IStarship = {
      ...this.newStarshipForm.value,
      url: `starships/s${Math.round(Math.random() * 1000)}/`,
      created: new Date(),
      edited: new Date()
    };
    for (const key in newStarship) {
      if (typeof newStarship[key] === 'number') newStarship[key] = `${newStarship[key]}`
    }
    this.starshipsService.createStarship(newStarship);
    this.initForm();
    this.setDefaultImage();
    Swal.fire("Success!", `Starship: ${newStarship.name} created!`, "success");
  }

}
