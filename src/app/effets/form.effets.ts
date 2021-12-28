import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import {
  exhaustMap,
  map,
  mergeMap,
  catchError,
  tap,
  switchMap
} from 'rxjs/operators';

import {
  SubmitAction,
  SubmitSuccessAction,
  SubmitActionTypes
} from '../actions/form_test.actions';
import { FormMaterial2Component } from '../form-material2/form-material2.component';
import { LocalStorageService } from '../service/localStorage.service';

@Injectable()
export class FormEffets {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  /* submitForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<SubmitAction>(SubmitActionTypes.SUBMIT),
        map(action => action.payload),
        switchMap(action => {
          //return this.localStorageService.getData(action.key)
          return this.form2.saveForm().pipe(
            map(() => {
              //return new SubmitSuccessAction();
            })
          );
        })
      ),
    { dispatch: false }
  ); */

  toto = 'toto';
  //console.log(toto)

  nombre: number = -2;
  testClassSubmit: SubmitAction = new SubmitAction('');

  test: string = 'toto';

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SubmitAction>(SubmitActionTypes.SUBMIT),
      map(() => {
        console.log(this.nombre);
        this.localStorageService.setData(
          'profilFormData',
          this.testClassSubmit
        );
        return new SubmitAction('Submit');
      })
    )
  );
}
