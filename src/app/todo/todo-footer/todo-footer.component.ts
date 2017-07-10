import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import {EventEmitter} from "selenium-webdriver";

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    @Input() itemCount: number;
    @Output() onClear = new EventEmitter<boolean>();

    onClick() {
        this.onClear.emit(true);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
