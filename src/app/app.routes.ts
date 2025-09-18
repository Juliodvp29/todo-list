import { Routes } from '@angular/router';
import { Task } from './pages/task/task';

export const routes: Routes = [
  {
    path: '',
    component: Task,
  },
  {
    path: 'task',
    component: Task,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
