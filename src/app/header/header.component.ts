import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'al-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    user$: Observable<User>;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
    }
}