import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  constructor(private router: Router) {

  }
    public redirectToHome() {
      this.router.navigate(['/main-page']);
    }
}
