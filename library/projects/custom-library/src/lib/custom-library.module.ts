import { NgModule } from '@angular/core';
import { CustomLibraryComponent } from './custom-library.component';
import { PersonFormComponent } from './person-form/person-form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { NameSelectorComponent } from './name-selector/name-selector.component';



@NgModule({
  declarations: [CustomLibraryComponent, PersonFormComponent, NameSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CustomLibraryComponent]
})
export class CustomLibraryModule { }
