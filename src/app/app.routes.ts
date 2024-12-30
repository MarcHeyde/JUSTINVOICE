import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CasesComponent } from './components/cases/cases.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'cases/:new', component: CasesComponent},
    { path: 'tasks', component: TasksComponent}
];
