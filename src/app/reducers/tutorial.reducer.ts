//Un réducteur est ce qui prend l'action entrante et décide quoi en faire.
//Il prend l'état précédent et renvoie un nouvel état basé sur l'action donnée.

import { Action } from '@ngrx/store';
import { Tutorial } from './../model/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

// Section 1 -> defini un état initial ou par défaut
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// Section 2 -> Il prend un état, que nous définissons comme un  type Tutorial et nous l'avons éventuellement lié à initialState .
//Il prend également en compte l'action de notre fichier /actions
export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  // Section 3
  switch (action.type) {
    //utilisons un commutateur pour déterminer le type d'action
    case TutorialActions.ADD_TUTORIAL:
      //Dans le cas  de l'ajout d'un tutoriel, nous retournons le nouvel état à l'aide de notre fonction newState().
      //Nous passons simplement à l'état précédent dans le premier paramètre, puis notre action dans le second.
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      //state.splice(action.payload, 1);
      const index = action.payload;
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      //ne correspond à aucun cas, il renverra simplement le state,comme prévu dans le premier paramètre de notre réducteur.
      return state;
  }
}
