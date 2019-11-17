import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080/api";

@Injectable({ providedIn: 'root' })
export class ClassService {

    
    constructor(private http: HttpClient) {}


    getList() {
        return this.http.get(API_URL + "/classes");
    }

}