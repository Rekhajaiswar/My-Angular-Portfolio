import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './features/home/home';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [RouterOutlet, Navbar, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My-Portfolio');
}

