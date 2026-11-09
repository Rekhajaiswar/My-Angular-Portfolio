import { Component } from '@angular/core';
import {Project} from "./project.model";
@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    {
     id: 1,
     title: 'Portfolio Website',
     description: 'A portfolio website built with html,css',
     image:'',
     technologies: ['HTML', 'CSS'],
     githubUrl: '',
     liveUrl: ''
},
{
  id: 2,
  title: 'Ecommerce Website',
  description: 'An ecommerce website built with html,css',
  image:'',
  technologies: ['HTML', 'CSS'],
  githubUrl: '',
  liveUrl: ''
},
{
  id: 3,
  title: 'Employee Management System',
  description: 'An employee management system built with html,css',
  image:'',
  technologies: ['HTML', 'CSS','javascript','angular'],
  githubUrl: '',
  liveUrl: ''
}

];
}

