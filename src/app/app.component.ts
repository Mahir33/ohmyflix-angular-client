// src/app/app.component.ts
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// The @Component decorator is used to define the metadata for the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false, // Ensure that the component is not treated as a standalone component
})


export class AppComponent {
  // Define the title of the application
  title = 'myFlix-Angular-client';

  // Define a property to store the login status of the user
  isLoggedIn = false;

  // Inject the Router and ChangeDetectorRef services into the constructor
  constructor(public router: Router, private cdr: ChangeDetectorRef) {
    // Check if the user is logged in
    this.isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in
    // Subscribe to the router events
    this.router.events.subscribe(() => {
      // Update the login status
      this.isLoggedIn = !!localStorage.getItem('token');
      // Detect changes to the component
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
