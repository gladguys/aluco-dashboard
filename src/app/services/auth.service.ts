import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({providedIn:'root'})
export class AuthService {
    
    constructor(private http: HttpClient, private userService: UserService) {}

    authenticate(email: string, password: string) {
        
        return this.http.post(API_URL+'/auth', {email,password})
        .pipe(tap((res:any) => {
            const token = res.token;
            console.log(token);
            this.userService.setToken(token);
          }));
    }
    

}