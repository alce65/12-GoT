import { createAction } from '@reduxjs/toolkit';
import { anyCharacter } from '../../models/character';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadSpeakerAction = createAction<anyCharacter>(
    actionTypes['speaker@load'].toLocaleString()
);

export const unloadSpeakerAction = createAction(
    actionTypes['speaker@unload'].toLocaleString()
);
