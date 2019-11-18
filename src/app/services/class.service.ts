import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from '../models/class.model';

@Injectable({ providedIn: 'root' })
export class ClassService {
    
    constructor(private http: HttpClient) {}

    save(newClass: Class) {
        return this.http.post(API_URL + "/classes", newClass);
    }

    getList() {
        return this.http.get(API_URL + "/classes");
    }

}