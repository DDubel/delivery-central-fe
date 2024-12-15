import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-nav-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './nav-root.component.html',
  styleUrl: './nav-root.component.scss'
})
export class NavRootComponent {
  router: Router = inject(Router);
  logout() {
    this.router.navigate(['/log-in']);
  }
}
