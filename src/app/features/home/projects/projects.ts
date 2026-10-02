import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  title = "first-project";
  description = "Ecommerce Website";
  technologies = "Angular, TypeScript, HTML, CSS";
  links = "github";
  url = "livedemo";
}
