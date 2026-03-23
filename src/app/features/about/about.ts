import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  stats = [
    { value: '5',  label: 'Types',      color: 'orange' },
    { value: '4',  label: 'Corrections', color: 'green'  },
    { value: '2',  label: 'Formats',     color: 'orange' },
    { value: '∞',  label: 'QR Codes',    color: 'green'  },
  ];

  team = [
    { name: 'Bath Dorgeles',  role: 'Chef de projet & Front' },
    { name: 'Oclin Marcel C.', role: 'Dev Front-end (Angular)' },
    { name: 'Rayane Irie',    role: 'Back-end (Spring Boot)' },
  ];

  stack = [
    'Angular 21',
    'Spring Boot (Java)',
    'ZXing (génération QR)',
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
