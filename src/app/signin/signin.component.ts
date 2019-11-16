import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: [
        './signin.component.scss'
    ]
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(email, password).subscribe( res => {
            console.log("deu certo: " + res );
        }, err => {
            console.error("deu ruim");
        });
    }
 }