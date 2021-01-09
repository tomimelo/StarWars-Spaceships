import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
    document.title = "SWAPI Starships - Login";
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  login() {
    this.loading = true;
    if(this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value);
    this.loading = false;
  }

}
