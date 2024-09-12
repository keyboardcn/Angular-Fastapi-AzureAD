import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type TodoListType = {
  id?: string;
  owner_id?: string;
  name?: string;
  is_completed?: boolean;
};

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: Record<'items', any> = {items: []};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodoList(`${environment.apiConfig.uri}/todoitems`);
  }

  getTodoList(url: string): void {
    this.http.get(url).subscribe((rst) => {
      this.todoList = rst as Record<'items', any>;
      console.log(this.todoList);
    });
  }
}

