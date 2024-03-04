import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovingImageComponent } from '../moving-image/moving-image.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  redirectTo(url: string): void {
    window.open(url, '_blank');
  }
  constructor(private router: Router) {}

  navigateToLogin() {
    // Use the Angular Router to navigate to the login page
    this.router.navigate(['/login']); // Assuming 'login' is the route for your login page
  }

}
