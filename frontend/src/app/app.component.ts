import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from './model/Task';
import { TodoListService } from './services/todo-list.service';
import { EditTaskComponent } from "./components/edit-task/edit-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, EditTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  taskForm: FormGroup;

  constructor(
    private todolistService: TodoListService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      Title: ['', [Validators.required]],
      Details: ['', [Validators.required]],
    });
  }

  tasks: Task[] = [];
  task: Task = {
    Id: null,
    Title: '',
    Details: '',
  };
  editMode = false;
  isLightMode: boolean = false;

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
  }

  ngOnInit(): void {
      this.loadTasks();
  }

  loadTasks() {

  }

  loadTask(Id: any) {

  }

  addTask() {

  }

  deleteTask(id: any) {

  }

  editTask(id: any) {}

  formReset() {
    this.taskForm.reset();
  }
}
