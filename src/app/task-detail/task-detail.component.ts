import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  @Input() selectedTask: Task | null = null;
}
