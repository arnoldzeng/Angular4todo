/**
 * Created by arnoldzeng on 2017/7/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestmapComponent } from './testmap.component';

const routes: Routes = [
    {
        path: 'testmap',
        component: TestmapComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TestmapRoutingModule { }
