import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, TaskItem } from "../task-item/task-item";

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, TaskItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList implements OnInit {
  @ViewChild('taskInput') taskInput!: ElementRef<HTMLInputElement>;

  newTaskTitle = '';
  tasks: Task[] = [];
  private readonly STORAGE_KEY = 'todolist-tasks';

  ngOnInit() {
    this.loadTasks();
  }

  private loadTasks() {
    try {
      const savedTasks = localStorage.getItem(this.STORAGE_KEY);
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: task.createdAt ? new Date(task.createdAt) : new Date()
        }));
      } else {
        this.tasks = [
          {
            id: 1,
            title: 'Bienvenido a TaskFlow',
            completed: false,
            createdAt: new Date()
          },
          {
            id: 2,
            title: 'Marca esta tarea como completada',
            completed: false,
            createdAt: new Date()
          },
          {
            id: 3,
            title: 'Elimina esta tarea si quieres',
            completed: false,
            createdAt: new Date()
          }
        ];
        this.saveTasks();
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
      this.tasks = [];
    }
  }

  private saveTasks() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }

  private generateId(): number {
    return Math.max(0, ...this.tasks.map(t => t.id)) + 1;
  }

  addTask() {
    const title = this.newTaskTitle.trim();
    if (!title) return;

    const newTask: Task = {
      id: this.generateId(),
      title: title,
      completed: false,
      createdAt: new Date()
    };

    this.tasks.unshift(newTask);
    this.newTaskTitle = '';
    this.saveTasks();

    setTimeout(() => {
      if (this.taskInput) {
        this.taskInput.nativeElement.focus();
      }
    }, 100);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  updateTask(id: number, updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
      this.saveTasks();
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  getCompletedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed);
    this.saveTasks();
  }

  toggleAll() {
    const allCompleted = this.tasks.every(task => task.completed);
    this.tasks.forEach(task => {
      task.completed = !allCompleted;
    });
    this.saveTasks();
  }
}