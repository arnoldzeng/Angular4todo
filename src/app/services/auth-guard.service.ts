import {Injectable, Inject} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

    constructor(private router: Router, @Inject('auth') private authService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // 取得用户访问的URl
        let url: string = state.url;

        return this.authService.getAuth()
            .map(auth => !auth.hasError);
    }

    canLoad(route: Route): Observable<boolean>{
        let url = `/${route.path}`;
        return this.authService.getAuth()
            .map(auth => !auth.hasError);
    }

    checkLogin(url: string): boolean {
        // 如果用户已登录就放行
        if (localStorage.getItem('userId') !== null) {
            return true;
        }
        // 否则，存贮要访问的的URL到本地
        localStorage.setItem('redirectUrl', url);
        // 然后导航到登录页面
        this.router.navigate(['/login']);
        // 返回 false, 取消导航
        return false;
    }
}
