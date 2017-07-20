/**
 * Created by arnoldzeng on 2017/7/18.
 */
import { NgModule } from '@angular/core';
import {PrimeComponent} from './prime.component';

import { PrimeRoutingModule} from './prime-routing.module';
import { ShareModule } from '../share/share.moudule';




@NgModule({
    imports: [
        PrimeRoutingModule,
        ShareModule
    ],
    declarations: [ PrimeComponent ]
})
export class PrimeModule { }
