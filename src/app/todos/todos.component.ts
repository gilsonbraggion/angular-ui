import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';
import { TodosModel } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodosModel[];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {

    this.todosService.sendGetRequest().subscribe((data: TodosModel[]) =>  {

      console.log(data);
      this.todos = data;

    });

  }

}
