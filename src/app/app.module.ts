import {BrowserModule} from '@angular/platform-browser';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {CoreModule} from './services/core.module';

import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app-routing.module';
import {TodoModule} from './todo/todo.module';
import {MdlModule} from 'angular2-mdl';
import { PrimeModule } from './prime/prime.module';

import { ShareModule } from './share/share.moudule';
import { TestmapModule } from './testmap/testmap.module';





@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreModule,
        RouterModule,
        LoginModule,
        AppRoutingModule,
        TodoModule,
        MdlModule,
        PrimeModule,
        ShareModule,
        TestmapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
