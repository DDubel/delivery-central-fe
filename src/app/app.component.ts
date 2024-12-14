import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavRootComponent} from "../components/nav-root/nav-root.component";
import {FooterRootComponent} from "../components/footer-root/footer-root.component";
import {MainPageComponent} from "../components/main-page/main-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavRootComponent, FooterRootComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'delivery-central';
}
