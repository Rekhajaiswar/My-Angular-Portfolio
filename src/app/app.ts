import { Component, signal } from '@angular/core';
import { Navbar } from './component/navbar/navbar';
import { Home } from './features/home/home';
import { Footer } from './features/footer/footer';
@Component({
  imports: [Navbar, Home, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My-Portfolio');
}

