/**
 * Created by arnoldzeng on 2017/7/3.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login',
        redirectTo: 'todo'
    }
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
    // {
        // path: 'todo',
        // redirectTo: 'todo/ALL',
        // canLoad: [AuthGuardService]
    // }
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
