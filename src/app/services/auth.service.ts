import { Injectable } from '@angular/core';

import { IUser } from '../models/user.interface';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registeredUsers: IUser[] = [];
  public userLogged: IUser = null;

  constructor(private router: Router) {
    this.checkUserLogged();
    this.registeredUsers = this.getRegisteredUsers();
  }

  login(user) {
    const userFound = this.registeredUsers.find(u => u.username === user.username && u.password === user.password);
    if (!userFound) {
      return Swal.fire("Error!", "Username or password is incorrect. Try again", "error");
    }
    this.saveUser(userFound);
    Swal.fire("Success!", "User logged!", "success");
    this.router.navigateByUrl("/");
  }

  register(user) {
    const usernameExists = this.registeredUsers.find(u => u.username === user.username);
    if(usernameExists) {
      return Swal.fire("Error!", "Username already exists. Try with a different one", "error");
    }
    this.addUser(user);
    this.saveUser(user);
    Swal.fire("Success!", "User registered", "success");
    this.router.navigateByUrl("/");
  }

  getRegisteredUsers(): IUser[] {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  checkUserLogged(): void {
    this.userLogged = JSON.parse(localStorage.getItem("user")) || null;
  }

  addUser(user): void {
    this.registeredUsers.push(user);
    localStorage.setItem("users", JSON.stringify(this.registeredUsers));    
  }

  saveUser(user): void {
    this.userLogged = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  isLogged(): boolean {
    return this.userLogged ? true : false;
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigateByUrl("/login");
  }

}
