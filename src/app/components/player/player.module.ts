import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from 'src/app/components/player/registration-form/registration-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
  ],
  exports: [RegistrationFormComponent],
})
export class PlayerModule { }