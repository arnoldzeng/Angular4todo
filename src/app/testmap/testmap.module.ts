/**
 * Created by arnoldzeng on 2017/7/19.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.moudule';

import { TestmapRoutingModule} from './testmap-routing.module';
import {TestmapComponent} from './testmap.component';


@NgModule({
    imports: [
        TestmapRoutingModule,
        ShareModule
    ],
    declarations: [ TestmapComponent ]
})
export class TestmapModule { }
