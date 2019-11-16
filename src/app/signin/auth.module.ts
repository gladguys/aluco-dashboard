import { NgModule } from '@angular/core';
import { SignInComponent } from './signin.component';
import { CustomMaterialModule } from '../customMaterialModule';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CustomMaterialModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }