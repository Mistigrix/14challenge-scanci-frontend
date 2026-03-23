import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Auth } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
protected readonly title = signal('qrcode-frontend');

 constructor(private authService: Auth) {}


  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
