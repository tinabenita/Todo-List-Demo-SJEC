import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private apiUrl = "https://localhost:7101/api/TodoList"

  constructor(private http: HttpClient) { }

  private Id: any | null = null;


}
