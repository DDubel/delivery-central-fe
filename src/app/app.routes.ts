import { Routes } from '@angular/router';
import {MainPageComponent} from "../components/main-page/main-page.component";
import {LogInComponent} from "../components/log-in/log-in.component";

export const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: '', redirectTo: '/log-in', pathMatch: 'full'},
  { path: '**', redirectTo: '/log-in'}
];
