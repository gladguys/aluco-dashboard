import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private tokenService: TokenService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.tokenService.hasToken()) {
			let authReq = req.clone({setHeaders:{'Authorization' : this.tokenService.getToken()}});
			return next.handle(authReq);
		}
		return next.handle(req);
	}
}