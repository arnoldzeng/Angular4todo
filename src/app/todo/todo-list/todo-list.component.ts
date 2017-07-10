import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../domain/entities';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    _todos: Todo[] = [];
    @Input()
    set todos(todos: Todo[]) {
        this._todos = [...todos];
    }

    get todos() {
        return this._todos;
    }

    @Output() onRemoveTodo = new EventEmitter<Todo>();
    @Output() OnToggleTodo = new EventEmitter<Todo>();

    onRemoveTriggered(todo: Todo) {
        this.onRemoveTodo.emit(todo);
    }

    onToggleTriggered(todo: Todo) {
        this.OnToggleTodo.emit(todo);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
