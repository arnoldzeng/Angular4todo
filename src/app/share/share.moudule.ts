/**
 * Created by arnoldzeng on 2017/7/5.
 */
import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { OrderListModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';


@NgModule({
    imports: [
        CommonModule ,
        FormsModule,
        MdlModule,
        // BrowserAnimationsModule,
        OrderListModule,
        TooltipModule,
        MessagesModule,
        PaginatorModule,
        DialogModule
    ],
    exports: [
        CommonModule ,
        FormsModule,
        MdlModule,
        // BrowserAnimationsModule,
        TooltipModule,
        MessagesModule,
        PaginatorModule,
        DialogModule
    ]
})
export class ShareModule {}
