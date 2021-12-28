import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from '../service/localStorage.service';
import { Store, Action, select } from '@ngrx/store';
import { SubmitAction } from '../actions/form_test.actions';

import * as fromFormReducer from '../reducers/form1.reducer';
import * as fromFormAction from '../actions/form_test.actions';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-material2',
  templateUrl: './form-material2.component.html',
  styleUrls: ['./form-material2.component.scss']
})
export class FormMaterial2Component implements OnInit {
  formState$: Observable<fromFormReducer.State>;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private store: Store<fromFormReducer.State>
  ) {
    console.log(this.formState$);
    this.formState$ = store.pipe(select('form'));
  }

  profileForm: any;

  ngOnInit() {
    const value = this.localStorageService.getData('profilFormData');
    this.profileForm = this.formBuilder.group({
      firstName: [value && value.firstName],
      lastName: [value && value.lastName],
      address: [value && value.address]
    });
  }

  saveForm() {
    //this.localStorageService.setData('profilFormData', this.profileForm.value);
    //this.store.dispatch(new SubmitAction);
    //this.store.dispatch({ type: 'ADD_TODO', payload: this.profileForm.value });
    this.store.dispatch(
      new fromFormAction.SubmitAction(this.profileForm.value)
    );
  }
}
