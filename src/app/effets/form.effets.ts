import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { formSubmitTest, formSubmitTestSucces } from '../actions/form1.actions';
import {
  exhaustMap,
  map,
  mergeMap,
  catchError,
  tap,
  switchMap
} from 'rxjs/operators';
import { LocalStorageService } from '../service/localStorage.service';
import { EMPTY, Observable, of } from 'rxjs';

import { Action } from '@ngrx/store';
import * as formAction from '../actions/form1.actions';
import { Profil } from '../model/profil';
import {
  SubmitAction,
  SubmitSuccessAction,
  SubmitActionTypes
} from '../actions/form_test.actions';

@Injectable()
export class FormEffets {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  /* submit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(formSubmitTest),
      exhaustMap(action) => {
        this.localStorageService.getData(action.key);
      })
    );
  }); */

  /* submit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(formSubmitTest),
      exhaustMap(action => {
        return this.localStorageService.getData(action.key).pipe(
          map(data => {
            return formSubmitTestSucces();
          })
        );
      })
    );
  }); */

  /* @Effect()
  createCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<formAction.CreateCustomer>(
      formAction.CustomerActionTypes.CREATE_CUSTOMER
    ),
    map((action: formAction.CreateCustomer) => action.payload),
    mergeMap((key: string) =>
      this.localStorageService.getData(key).pipe(
        map(() => new formAction.CreateCustomerSuccess())
        //catchError(err => of(new formAction.CreateCustomerFail(err)))
      )
    )
  ); */

  submitForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<SubmitAction>(SubmitActionTypes.SUBMIT),
        map(action => action.payload),
        switchMap(action => {
          return this.localStorageService.getData(action.key).pipe(
            map(() => {
              //return new SubmitSuccessAction();
            })
          );
        })
      ),
    { dispatch: false }
  );
}
