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

}
