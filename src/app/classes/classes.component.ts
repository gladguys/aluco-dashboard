import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { Class } from '../models/class.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'classes.component.html',
    styleUrls: ['classes.component.scss']
})
export class ClassesComponent implements OnInit {

    classes: Class[] = [];
    classForm: FormGroup;

    constructor(private classService: ClassService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.classService.getList()
            .subscribe((res: Class[]) => {
                this.classes = res;
            });

        this.classForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],

        });
    }

    save() {
        const newClass = this.classForm.getRawValue();
        console.log(newClass);
        this.classService.save(newClass).subscribe(res => {
            this.classForm.reset();
            this.classService.getList()
                .subscribe((res: Class[]) => {
                    this.classes = res;
                });
        });
    }
}