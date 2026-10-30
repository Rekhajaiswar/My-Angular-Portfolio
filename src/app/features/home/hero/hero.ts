import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  welcome ="Hello, I'm...";
  name = 'Rekha';
  role = 'Frontend Developer';
  description = 'I build responsive, user-friendly websites and applications using modern frontend technologies';
  btn = 'View Work';
  imgUrl ='assets/image.png';

  viewWork(){
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    console.log('View Work clicked');
  }

  downloadCV(){
    console.log('Download CV clicked');
  }
}
