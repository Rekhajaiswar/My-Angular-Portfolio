import { Component } from "@angular/core";
import { AboutInfo } from "./about.model";
@Component({
  imports: [],
  selector: "app-about",
  styleUrl: "./about.css",
  templateUrl: "./about.html",
})
export class About {
  about: AboutInfo = {
    aboutpage: "About Me",
    aboutDes: `My journey into web development started with an interest in creating things for the web. As I explored frontend technologies, I developed a passion for building interactive and user-friendly interfaces.

I enjoy working with Angular and TypeScript to create structured, reusable, and responsive web applications. I also like exploring new technologies and finding better ways to solve problems through code.

Currently, I am focused on improving my development skills, building real-world projects, and growing as a developer.`
};

}
