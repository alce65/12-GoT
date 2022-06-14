import { createAction } from '@reduxjs/toolkit';
import { anyCharacter } from '../../models/character';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadCharactersAction = createAction<Array<anyCharacter>>(
    actionTypes['character@load']
);

export const addCharacterAction = createAction<anyCharacter>(
    actionTypes['character@add']
);

export const updateCharacterAction = createAction<anyCharacter>(
    actionTypes['character@update']
);

export const deleteCharacterAction = createAction<anyCharacter>(
    actionTypes['character@delete']
);

export const dieCharacterAction = createAction<anyCharacter>(
    actionTypes['character@die']
);
