/**
 * Created by arnoldzeng on 2017/7/4.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

const routes: Routes = [
    {
        path: 'todo',
        redirectTo: 'todo/All'
    },
    {
        path: 'todo/:filter',
        component: TodoComponent
    }
];

@NgModule({
    imports: [
    RouterModule.forChild(routes)
        // RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class TodoRoutingModule { }
