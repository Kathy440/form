import { Action } from '@ngrx/store';

export interface IAppState {
  data: string;
  isLoading: boolean;
}
export const initialState: IAppState = {
  data: '',
  isLoading: false
};
export function userReducer(
  state: IAppState = initialState,
  action: Action
): IAppState {
  switch (action.type) {
    case 'INIT_DATA':
      return Object.assign({}, state, { isLoading: true });

    default:
      return state;
  }
}
