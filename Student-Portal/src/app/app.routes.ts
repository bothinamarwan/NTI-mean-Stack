import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.routes').then((m) => m.Sroutes),
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotfoundComponent },
];
