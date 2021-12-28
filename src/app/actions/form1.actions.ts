import { Action, createAction, props } from '@ngrx/store';

// Section 2 -> définir le type  d'action
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';

// Section 3 -> créons une classe pour chaque action avec un
//constructeur qui nous permet de passer la charge utile.
export class SubmitForm implements Action {
  readonly type = SUBMIT_FORM;

  //constructor(public payload: any) {}
}

export class SubmitFormSuccess implements Action {
  readonly type = SUBMIT_FORM_SUCCESS;
  constructor(public payload: any) {}
}

// Section 4 -> exportons toutes nos classes d'action pour une utilisation dans le reducer
export type FormActionTypes = SubmitForm;

// NEW TEST

export const submitF = createAction('[submit F] submitF');
export const submitFSuccess = createAction('[submit F] submit F Success');
export const submitFError = createAction('[submit F] submit F Error');
//

//TEST

export const FORM_SUBMIT_TEST = '[test] form submit';
export const FORM_SUBMIT_TEST_SUCESS = '[test] form submit succes';

export const formSubmitTest = createAction(
  FORM_SUBMIT_TEST
  //props<{ key: string }>()
  /* constructor(public payload: number) */
);

/* export class formSubmitTest implements Action {
  readonly type = FORM_SUBMIT_TEST;

  constructor(public payload: any) {}
} */

export const formSubmitTestSucces = createAction(FORM_SUBMIT_TEST_SUCESS);

///
