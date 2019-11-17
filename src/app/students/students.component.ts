import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.scss']
})
export class StudentsComponent implements OnInit {   

    students: Student[] = [];

    constructor(private studentService: StudentService){}

    ngOnInit() {
        this.studentService.getList()
            .subscribe((res:Student[]) => {
                this.students = res;
            })
    }
}