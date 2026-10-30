import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects = [
    {
      projectTitle: 'first-project',
      web: 'Ecommerce Website',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      img: 'Ecommerce Website.png',
      liveUrl: '...',
      githubUrl: '...'
      },
    {
      projectTitle: 'second-project',
      web: 'Ticket Booking Website',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'SQL', 'API',],
      img: 'Ticket Booking Website',
      liveUrl: '...',
      githubUrl: '...'
      }
  ];


}

