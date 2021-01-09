import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public loading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
    document.title = "SWAPI Starships - Register";
  }

  initForm() {
    this.registerForm = this.fb.group({
      firstname: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  register() {
    this.loading = true;
    if(this.registerForm.invalid) return;
    this.authService.register(this.registerForm.value);
    this.loading = false;
  }

}
