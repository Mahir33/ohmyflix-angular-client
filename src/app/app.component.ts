// src/app/app.component.ts
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false, // ensure that the component is not treated as a standalone component
})
export class AppComponent {
  title = 'myFlix-Angular-client';
  isLoggedIn = false;

  constructor(public router: Router, private cdr: ChangeDetectorRef) {
    this.isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in
    
    this.router.events.subscribe(() => {
      this.isLoggedIn = !!localStorage.getItem('token');
      this.cdr.detectChanges();
    });
  }

  

  logout(): void {
    // clear local storage
    localStorage.clear();
    this.isLoggedIn = false; // Update isLoggedIn status

    //redirect to welcome page
    this.router.navigate(['welcome']);
  }
}
