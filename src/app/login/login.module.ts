/**
 * Created by arnoldzeng on 2017/7/3.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.moudule';

import { LoginComponent } from './login.component';
import { LoginRoutingModule} from './login-routing.module';

@NgModule({
    imports: [
        LoginRoutingModule,
        ShareModule
    ],
    declarations: [ LoginComponent ]
})
export class LoginModule { }
