import { Injectable } from '@angular/core';

import { IUser } from '../models/user.interface';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registeredUsers: IUser[] = [];

  constructor() {
    this.registeredUsers = this.getRegisteredUsers();
  }

  login(user) {
    const userFound = this.registeredUsers.find(u => u.username === user.username && u.password === user.password);
    if (userFound) {
      return Swal.fire("Ok!", "User logged!", "success");
    }
    return Swal.fire("Error!", "Username or password is incorrect. Try again", "error");
  }

  register(user) {
    const usernameExists = this.registeredUsers.find(u => u.username === user.username);
    if(usernameExists) {
      return Swal.fire("Error!", "Username already exists. Try with a different one", "error");
    }
    this.registeredUsers.push(user);
    localStorage.setItem("users", JSON.stringify(this.registeredUsers));
    Swal.fire("Ok!", "User registered", "success");
  }

  getRegisteredUsers(): IUser[] {
    return JSON.parse(localStorage.getItem("users")) || [];
  }


}
