import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from './../model/tutorial.model';

import { createAction, props } from '@ngrx/store';

// Section 2 -> définir le type  d'action
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';
export const UPDATE_TUTORIAL = '[TUTORIAL] Update';

// Section 3 -> créons une classe pour chaque action avec un
//constructeur qui nous permet de passer la charge utile.
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

export class UpdateTutorial implements Action {
  readonly type = UPDATE_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

// Section 4 -> exportons toutes nos classes d'action pour une utilisation dans le reducer
export type Actions = AddTutorial | RemoveTutorial | UpdateTutorial;

export const storeCounter = createAction(
  '[Counter] Store Counter',
  props<{ val: number }>()
);
