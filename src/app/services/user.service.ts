import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {
            //     this.tokenService.hasToken() && 
            //      this.decodeAndNotify();
     }

    setToken(payload: any) {
        this.tokenService.setToken(payload);
        //this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const payload: any = this.tokenService.getToken();
        const user = payload.user as User;
        console.log(user);
        this.userSubject.next(user);
    }  


}