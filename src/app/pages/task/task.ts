import { Component } from '@angular/core';
import { SideNav } from "../../components/side-nav/side-nav";
import { TodoList } from "../../components/todo-list/todo-list";

@Component({
  selector: 'app-task',
  imports: [SideNav, TodoList],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  getCurrentDay(): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[new Date().getDay()];
  }

  getCurrentDate(): string {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const now = new Date();
    return `${now.getDate()} de ${months[now.getMonth()]}`;
  }
}