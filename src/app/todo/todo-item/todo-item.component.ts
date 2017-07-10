import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() isChecked = false;
  @Input() todoDesc = '';
  @Output() onToggleTriggered = new EventEmitter<boolean>();
  @Output() onRemoveTriggered = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.onToggleTriggered.emit();
  }

  remove() {
    this.onRemoveTriggered.emit();
  }
}
