import { Component, signal } from '@angular/core';
@Component({

  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html'
})
export class Navbar {
  logo = 'RJ';

  //signal : use

  menuOpen = signal (false);

  //event binding use

  toggleMenu(){
    this.menuOpen.update(isOpen => !isOpen);
  }
  closeMenu(){
    this.menuOpen.set (false);
  }

}
