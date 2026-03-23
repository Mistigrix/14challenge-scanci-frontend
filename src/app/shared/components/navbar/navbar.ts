import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuOpen = false; 
  constructor(
    private authService : Auth,
    private router : Router
  ){}

  getUserName(): string{
    return this.authService.getUserName() || 'Utilisateur';
  }

  logout(){
    this.authService.logout();
  }
}
