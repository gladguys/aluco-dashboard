import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {

    constructor(
        private router: Router,
        private userService: UserService) {}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
            if(this.userService.getUser()){
                return true;
            }
            this.router.navigateByUrl('/signin');
            return false;
    }

}