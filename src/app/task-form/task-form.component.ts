import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() task: Task = { id: 0, title: '', completed: false };
  @Output() formSubmit = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  submitForm() {
    console.log(this.task)
    if (this.task.id === 0) {
      // If the task has no ID, it's a new task, so we'll create it
      this.taskService.addTask(this.task).subscribe(newTask => {
        this.formSubmit.emit(newTask);
        console.log('Task added successfully');
      });
    } else {
      // If the task has an ID, it exists, so we'll update it
      this.taskService.updateTask(this.task.id, this.task).subscribe(updatedTask => {
        this.formSubmit.emit(updatedTask);
        console.log('Task updated successfully');
      });
    }
  }
}
