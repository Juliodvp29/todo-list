import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt?: Date;
}

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {
  @Input() task!: Task;
  @Output() taskChange = new EventEmitter<Task>();
  @Output() removeTask = new EventEmitter<number>();

  deleteTask() {
    this.removeTask.emit(this.task.id);
  }

  onTaskChange() {
    this.taskChange.emit(this.task);
  }
}