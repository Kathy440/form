import { IFormState, getDefaultFormState } from './application-state';
import { Action, Store } from '@ngrx/store';
import * as SubmitActions from '../actions/form_test.actions';
import { Profil } from '../model/profil';

export interface State {
  firstName: string;
  lastName: string;
  address: string;
  //profil: Profil[];
}

const initialState: State = {
  //profil: [new Profil('Jean', 'Paul', '19 rue')]
  firstName: '',
  lastName: '',
  address: ''
};

export function formReducer(
  state: State = initialState,
  action: SubmitActions.ALL_REDUCER_ACTIONS
) {
  switch (action.type) {
    case SubmitActions.SubmitActionTypes.SUBMIT:
      return [...status, action.payload.value];

    default: {
      return state;
    }
  }
}

/* export function formReducer(state = initialState, action): State {
  //On aimerai modifier le state selon l'action reçu
  switch (action.type) {
    //Si c add todo
    case 'ADD_TODO':
      //on aimerai retourner la liste des todo
      return {
        ...state,
        //puis pr le todo on va s'enservir pr le emasc 6
        //on prend l'ancienne liste des todos et on rajoute action.jasmine-payload

        //profil: [...state.firstName, ...state.lastName, ...state.address, action.payload],
        profil: [...state.profil, action.payload]
        //payload parametre qu'on souhaite passer à l'action
      };
    default:
      return state;
  }
} */
