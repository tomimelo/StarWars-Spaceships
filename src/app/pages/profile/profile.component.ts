import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: IUser = null;
  public loading: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.userLogged;
    this.loading = false;
  }

  logout() {
    this.authService.logout();
  }

}
