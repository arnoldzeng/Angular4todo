/**
 * Created by arnoldzeng on 2017/7/3.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'testmap',
        pathMatch: 'full'
    },
    // {
    //     path: 'prime',
    //     redirectTo: 'prime',
    //     // pathMatch: 'full'
    // },
    // {
    //     path: 'prime',
    //     component: PrimeComponent
    // },
    // {
    //     path: 'login',
    //     redirectTo: 'todo/All'
    // }
    // {
    //     path: 'login',
    //     // redirectTo: 'login',
    //     component: LoginComponent
    // }
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    {
        path: 'todo',
        redirectTo: 'todo/ALL',
        canLoad: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(routes, { useHash: true })
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
