import {Injectable, Inject} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // 取得用户访问的URl
        let url: string = state.url;
        return this.checkLogin(url);
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
