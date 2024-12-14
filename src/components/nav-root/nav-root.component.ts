import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-nav-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-root.component.html',
  styleUrl: './nav-root.component.scss'
})
export class NavRootComponent {

}
