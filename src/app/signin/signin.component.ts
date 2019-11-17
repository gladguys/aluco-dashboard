import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: [
        './signin.component.scss'
    ]
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, 
                private authService: AuthService,
                private router: Router,
                private userService: UserService) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(email, password).subscribe( (res: any) => {
            this.saveToken(res);
            this.router.navigateByUrl('/');
        }, err => {
            console.error("deu ruim");
        });
    }

    saveToken(payload: any) {
        this.userService.setToken(payload);
    }
 }