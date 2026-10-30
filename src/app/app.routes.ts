import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Contact } from './features/home/contact/contact';
import { About } from './features/home/about/about';
import { Skills } from './features/home/skills/skills';
import { Projects } from './features/home/projects/projects';
import { Hero } from './features/home/hero/hero';

export const routes: Routes = [
  { path: 'home', component: Home },
  {path: 'hero', component:Hero},
  {path: 'about', component: About},
  {path: 'skills', component: Skills},
  {path: 'projects', component: Projects},
  {path: 'contact', component: Contact},
];
