import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Form2 } from '../model/form2';

export enum SubmitActionTypes {
  SUBMIT = '[FORM] Submit',
  SUBMIT_SUCCESS = '[FORM] Submit Success',
  SUBMIT_FAIL = '[FORM] Submit Fail'
}

export class SubmitAction implements Action {
  readonly type = SubmitActionTypes.SUBMIT;
  constructor(public payload: any) {}
}
export class SubmitSuccessAction implements Action {
  readonly type = SubmitActionTypes.SUBMIT_SUCCESS;

  //Payload sert a ajouter des données supp
  constructor(public payload: any) {}
}
export class SubmitFailAction implements Action {
  readonly type = SubmitActionTypes.SUBMIT_FAIL;
  constructor(public payload: any) {}
}

export type ALL_REDUCER_ACTIONS =
  | SubmitAction
  | SubmitSuccessAction
  | SubmitFailAction;
