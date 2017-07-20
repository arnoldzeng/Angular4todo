import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AutoCompleteModule} from 'primeng/primeng';

@Component({
    selector: 'app-prime',
    templateUrl: './prime.component.html',
    styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
    display: boolean = false;
    // msgs: Message[] = [];
    //
    // showInfo() {
    //     this.msgs = [];
    //     this.msgs.push({serverity:'info', summary:'info Message', detail:'PrimeNG rocks'});
    // }
    showDialog() {
        this.display = true;
    }
    constructor() {
    }

    ngOnInit() {
    }

}
