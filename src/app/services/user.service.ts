import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new Subject<any>();

    constructor(private tokenService: TokenService) { }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.tokenService.hasToken();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
    }

}