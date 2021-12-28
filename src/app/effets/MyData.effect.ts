import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
/* import {
  Actions,
  ofType,
  createEffect,
  concatLatestFrom,
  Effect
} from '@ngrx/effects'; */
import { LocalStorageService } from '../service/localStorage.service';
import * as SubmitActions from '../actions/form1.actions';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class MyDataEffects {
  /*  getEventStart$ = this.actions$
  //permettra de déclancher l’effect uniquement sur le type défini.
    .ofType('INIT_DATA')
    //fera l’appel au service en retournant l’observable lié
    .switchMap(payload => this.myService.getData())
    //retournera, en cas de requête réussie, une action contenant les données renvoyées par le serveur mais en format json
    .map(responseBody => ({
      type: 'INIT_DATA_SUCCESS',
      payload: responseBody.json()
    }))
    .catch((err: Error) => Observable.of(getEventFailed(err)));
  constructor(
    private actions$: Actions,
    private myService: LocalStorageService
  ) {} */
  constructor(
    private actions$: Actions,
    private myService: LocalStorageService
  ) {}

  //@Effect()
  //offType -> Cela agit comme un filtre et n'invoquera l'effet que lorsqu'il recevra la ou les actions configurées.
  /* loadCategories$ = this.actions$.ofType(SubmitActions.SUBMIT_FORM).pipe(
    switchMap(action => {
      return this.myService.getData();
      .pipe(
						map(movies => new SubmitActions.SUBMIT_FORM_SUCCESS()),
						catchError(err => of(new CategoriesActions.GetCategoriesActionError(err)))
					);
    })
  ); */

  /* loadCustomers = createEffect(() => {
    this.actions$.pipe(
      // filter out the actions, except for `[Customers Page] Opened`
      ofType(SubmitActions.formSubmitTest),
      exhaustMap(() =>
        // call the service
        this.myService.getData().pipe(
          // return a Success action when the HTTP request was successfull (`[Customers Api] Load Sucess`)
          map(() => SubmitActions.formSubmitTestSucces()),
          // return a Failed action when something went wrong during the HTTP request (`[Customers Api] Load Failed`)
          //catchError((error) => of(CustomerApiActions.loadCustomersFailed(error))),
        ),
      ),
    );
  } */
}
