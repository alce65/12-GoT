// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import { Character, anyCharacter, iCharacter } from '../../models/character';
import * as ac from './action.creators';

const initialState: iCharacter = { ...new Character('', '', 0, 'king') };
export const speakerReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadSpeakerAction, (state, action) => action.payload)
        .addCase(ac.unloadSpeakerAction, (state, action) => initialState)
        .addDefaultCase((state) => state);
});
