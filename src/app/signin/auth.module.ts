import { NgModule } from '@angular/core';
import { SignInComponent } from './signin.component';
import { CustomMaterialModule } from '../customMaterialModule';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CustomMaterialModule
    ]
})
export class AuthModule { }