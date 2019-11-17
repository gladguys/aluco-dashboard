import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { Class } from '../models/class.model';

@Component({
    templateUrl: 'classes.component.html',
    styleUrls: ['classes.component.scss']
})
export class ClassesComponent implements OnInit {   

    classes: Class[] = [];

    constructor(private classService:ClassService){}

    ngOnInit() {
        this.classService.getList()
            .subscribe((res:Class[]) => {
                this.classes = res;
            })
    }
}