import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080/api/auth";

@Injectable({providedIn:'root'})
export class AuthService {
    
    constructor(private http: HttpClient) {}

    authenticate(email: string, password: string) {
        
        return this.http.post(API_URL+'/auth', {email,password});
    }
    

}