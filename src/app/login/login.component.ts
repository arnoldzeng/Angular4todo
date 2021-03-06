import { Component, OnInit, Inject } from '@angular/core';
import { Auth } from '../domain/entities';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
  }

    onSubmit() {
      this.service
          .loginWithCredentials(this.username, this.password)
          .subscribe(auth => {
              this.auth = Object.assign({}, auth);
              if (!auth.hasError) {
                  this.router.navigate(['todo']);
              }
          });
  }
  // onSubmit(formValue) {
  //   this.service
  //       .loginWithCredentials(formValue.login.username, formValue.login.password)
  //       .then(auth => {
  //         let redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
  //         if (!auth.hasError) {
  //           this.router.navigate([redirectUrl]);
  //           localStorage.removeItem('redirectUrl');
  //         } else {
  //           this.auth = Object.assign({}, auth);
  //         }
  //       });
  // }
}
