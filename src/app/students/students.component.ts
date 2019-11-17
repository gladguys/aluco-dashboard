import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.scss']
})
export class StudentsComponent implements OnInit {

    students: Student[] = [];
    studentForm: FormGroup;

    constructor(private studentService: StudentService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.studentService.getList()
            .subscribe((res: Student[]) => {
                this.students = res;
            })

        this.studentForm = this.formBuilder.group({
            registrationNumber: ['', Validators.required],
            name: ['', Validators.required],
            email: [''],
            gender: [''],
            dateBirth: [''],
            phone: [''],
            responsableName: [''],
            address: ['']
        });
    }

    save() {
        const newStudent = this.studentForm.getRawValue();
        console.log(newStudent); 
    }
}