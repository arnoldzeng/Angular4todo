import {Component} from '@angular/core';

// import {Hero} from './hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // template : '<hero-form></hero-form>'
})
export class AppComponent {
    title = 'app works!';
    test2 = 'this is apple';
    heroes = ['apple', 'banner', 'magneta'];
    myHero = this.heroes[0];
    values = '';
    value = '';
    // = '';
    onclickMe() {
        alert(1);
        this.test2 = 'you are me apple';
    }
    onKey(value: string) {
        this.values += value + ' | ';
    }
    onEnter(value: string) {
        this.value = value ;
    }
    updata(value: string) {
        this.value = value ;
    }
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
            // this.value = '';
        }
    }
}
