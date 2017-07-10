/**
 * Created by arnoldzeng on 2017/7/4.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.moudule';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';

import { TodoComponent } from './todo.component';
import { TodoRoutingModule} from './todo-routing.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTodoDbService } from './todo-data';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    imports: [
        TodoRoutingModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
        ShareModule
    ],
    declarations: [
        TodoComponent,
        TodoHeaderComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoListComponent
    ],
    providers: [
        {provide: 'todoService', useClass: TodoService}
    ]
})
export class TodoModule { }
