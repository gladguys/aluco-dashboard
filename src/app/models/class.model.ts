import { Student } from './student.model';

export class Class {
    id: number;
    name: string;
    description: string;
    creationDate: Date;
    students: Student[];
    //exams: Exam[];
    teacherId: number;
}