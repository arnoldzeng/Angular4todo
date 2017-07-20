/**
 * Created by arnoldzeng on 2017/7/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeComponent } from './prime.component';

const routes: Routes = [
    {
        path: 'prime',
        component: PrimeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PrimeRoutingModule { }
