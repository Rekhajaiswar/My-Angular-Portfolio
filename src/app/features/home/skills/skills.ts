import { Component } from '@angular/core';
import {Skill} from "./skills.model";
@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {

 skills: Skill[] =[
  {
    name: 'HTML5',
    icon: 'devicon-html5-plain colored',
  },

     {
      name: 'CSS3',
      icon: 'devicon-css3-plain colored'
    },
    {
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain colored'
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored'
    },
    {
      name: 'Angular',
      icon: 'devicon-angular-plain colored'
    },
    {
      name: 'React',
      icon: 'devicon-react-original colored'
    },
    {
      name: 'SQL',
      icon: 'devicon-mysql-plain colored'
    },
    {
      name: 'Git',
      icon: 'devicon-git-plain colored'
    },
    {
      name: 'Github',
      icon:'devicon-github-original colored'
    },
    {
      name: 'Figma',
      icon: 'devicon-figma-plain colored'
    }
  ];
  }
