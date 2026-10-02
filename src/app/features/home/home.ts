import { Component } from '@angular/core';
import{About} from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Hero } from './hero/hero';

@Component({
  imports: [About, Skills, Projects, Contact,Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
