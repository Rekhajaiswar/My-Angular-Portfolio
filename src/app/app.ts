import { Component, signal } from '@angular/core';
import { Navbar } from './component/navbar/navbar';
import { Home } from './features/home/home';
@Component({
  imports: [Navbar, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My-Portfolio');
}

