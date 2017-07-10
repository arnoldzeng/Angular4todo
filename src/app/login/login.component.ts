import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }
  onSubmit(formValue) {
    // console.log('auth is :' + this.service.loginWithCredentials(this.username));
    console.log(formValue);
  }
}
