import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  name = 'Rekha';
  role = 'Frontend Developer';
  description = 'I build responsive, user-friendly websites and applications using modern frontend technologies';
  btn = 'View Work';
  resume = 'Download CV';

  viewWork(){
    console.log('View Work clicked');
  }

  downloadCV(){
    console.log('Download CV clicked');
  }
}
