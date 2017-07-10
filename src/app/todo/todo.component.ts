import {Component, OnInit, Inject} from '@angular/core';
import {Todo} from '../domain/entities';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TodoService} from './todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    todos: Todo[] = [];
    desc = '';

    constructor(@Inject('todoService') private service,
                private route: ActivatedRoute,
                private router: Router) {
    }

    // constructor(private service: TodoService) {}

    ngOnInit() {
        // this.getTodos();
        this.route.params.forEach((params: Params) => {
            const filter = params['filter'];
            this.filterTodos(filter);
        });
    }

    filterTodos(filter: string): void {
        this.service
            .filterTodos(filter)
            .then(todos => this.todos = [...todos]);
    }

    // testTodo() {
    //     this.todos = this.service.testTodo(this.desc);
    //     this.desc = '';
    // }
    onTextChanges(value) {
        this.desc = value;
    }

    testTodo() {
        this.service
            .testTodo(this.desc)
            .then(todo => {
                this.todos = [...this.todos, todo];
                this.desc = '';
            });
    }

    // toggleTodo(todo: Todo) {
    //     const i = this.todos.indexOf(todo);
    //     this.service
    //         .toggleTodo(todo)
    //         .then(t => {
    //             this.todos = [
    //                 ...this.todos.slice(0, i),
    //                 t,
    //                 ...this.todos.slice(i + 1)
    //             ];
    //         });
    // }

    toggleTodo(todo: Todo): Promise<void> {
        const i = this.todos.indexOf(todo);
        return this.service
            .toggleTodo(todo)
            .then(t => {
                this.todos = [
                    ...this.todos.slice(0, i),
                    t,
                    ...this.todos.slice(i + 1)
                ];
                return null;
            });
    }

    removeTodo(todo: Todo): Promise<void> {
        const i = this.todos.indexOf(todo);
        return this.service
            .deleteTodoById(todo.id)
            .then(() => {
                this.todos = [
                    ...this.todos.slice(0, i),
                    ...this.todos.slice(i + 1)
                ];
                return null;
            });
    }

    // getTodos(): void {
    //     this.service
    //         .getTodos()
    //         .then(todos => this.todos = [...todos]);
    // }
    clearCompleted() {
        const completed_todos = this.todos.filter(todo => todo.completed === true);
        const active_todos = this.todos.filter(todo => todo.completed === false);
        Promise.all(completed_todos.map(todo => this.service.deleteTodoById(todo.id)))
            .then(() => this.todos = [...active_todos]);
    }
    toggleAll() {
        Promise.all(this.todos.map(todo => this.toggleTodo(todo)));
    }
}
