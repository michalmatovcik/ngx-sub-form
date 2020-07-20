import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Controls, NgxRootFormComponent} from 'ngx-sub-form';
import {Person} from '../model/person';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lib-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent extends NgxRootFormComponent<Person>{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  @Input('person')
  dataInput: Required<Person> | null | undefined;

  @Output('personUpdated')
  dataOutput: EventEmitter<Person> = new EventEmitter<Person>();

  protected getFormControls(): Controls<Person> {
    return {
      name: new FormControl()
    }
  }

}
