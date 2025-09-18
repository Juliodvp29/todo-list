import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskItem } from "../task-item/task-item";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, TaskItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {

  newTaskTitle = '';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Task 3',
      completed: false,
    },
  ];


  addTask(task: string) {

    const newTask: Task = {
      id: this.tasks.length + 1,
      title: task,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask(id: number, task: Task) {
    this.tasks = this.tasks.map(task => task.id === id ? task : task);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find(task => task.id === id);
  }

}
