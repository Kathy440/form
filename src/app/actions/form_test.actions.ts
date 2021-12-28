import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';

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

//

export const FORM_NAME_CHANGED = 'FORM_NAME_CHANGED';
export const FORM_SET_VALIDITY = 'FORM_SET_VALIDITY';

export interface IFormNameChangedAction extends Action {
  payload: {
    value: string;
  };
}

export interface IFormSetValidityAction extends Action {
  payload: {
    isValid: boolean;
  };
}

export function formNameChanged(value: string): IFormNameChangedAction {
  return {
    type: FORM_NAME_CHANGED,
    payload: {
      value
    }
  };
}

export function formSetValidity(isValid: boolean): IFormSetValidityAction {
  return {
    type: FORM_SET_VALIDITY,
    payload: {
      isValid
    }
  };
}
