import { Injectable } from '@angular/core';
import { Todo } from '../domain/entities';
import { UUID } from 'angular2-uuid';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  // todos: Todo[] = [];

  private api_url = 'http://localhost:3000/todos';
  // private api_url = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  // testTodo(todoItem: string): Todo[] {
  //   let todo = {
  //     id: UUID.UUID(),
  //     desc: todoItem,
  //     completed: false
  //   };
  //   this.todos.push(todo);
  //   return this.todos;
  // }

  // POST /todos
  // testTodo(desc: string): Promise<Todo> {
  //   const todo = {
  //     id: UUID.UUID(),
  //     desc: desc,
  //     completed: false,
  //   };
  //   return this.http
  //       .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
  //       .toPromise()
  //       .then(res => res.json() as Todo)
  //       .catch(this.handleError);
  // }
  testTodo(desc: string): Promise<Todo> {
    const userId: number = +localStorage.getItem('userId');
    const todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId
    };
    return this.http
        .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Todo)
        .catch(this.handleError);
  }


  // PATCH /todos/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    const updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
        .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
        .toPromise()
        .then(() => updatedTodo)
        .catch(this.handleError);
  }

  // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  // GET /todos
  getTodos(): Promise<Todo[]> {
    const userId: number = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    return this.http.get(url)
        .toPromise()
        .then(res => res.json() as Todo[])
        .catch(this.handleError);
  }
  // getTodos(): Promise<Todo[]> {
  //   return this.http.get(this.api_url)
  //       .toPromise()
  //       .then(res => res.json() as Todo[])
  //       .catch(this.handleError);
  // }
  // filterTodos(filter: string): Promise<Todo[]> {
  //   switch ( filter) {
  //     case 'ACTIVE': return this.http
  //         .get(`${this.api_url}?completed=false`)
  //         .toPromise()
  //         .then(res => res.json() as Todo[])
  //         .catch(this.handleError);
  //     case 'COMPLETED': return this.http
  //         .get(`${this.api_url}?completed=true`)
  //         .toPromise()
  //         .then(res => res.json() as Todo[])
  //         .catch(this.handleError);
  //     default:
  //       return this.getTodos();
  //   }
  // }

  // GET /todos?completed=true/false
  filterTodos(filter: string): Promise<Todo[]> {
    const userId: number = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    switch (filter) {
      case 'ACTIVE': return this.http
          .get(`${url}&completed=false`)
          .toPromise()
          .then(res => res.json() as Todo[])
          .catch(this.handleError);
      case 'COMPLETED': return this.http
          .get(`${url}&completed=true`)
          .toPromise()
          .then(res => res.json() as Todo[])
          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
