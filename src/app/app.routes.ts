import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CasesComponent } from './components/cases/cases.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { filter } from 'rxjs';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'files', component: CasesComponent, data: { filter: 'all'}},
    { path: 'newfiles', component: CasesComponent, data: { filter: 'new' }},
    { path: 'mytasks', component: TasksComponent}
];
