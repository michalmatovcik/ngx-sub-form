import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Person} from './model/person';

@Component({
  selector: 'lib-custom-library',
  template: `
    <p>
      custom-library works!
    </p>
    <lib-person-form
    [person]="person$ | async"
    ></lib-person-form>
  `,
  styles: [
  ]
})
export class CustomLibraryComponent implements OnInit {

  person$ : Observable<Person> = of(new Person());

  constructor() { }

  ngOnInit(): void {
  }

}
