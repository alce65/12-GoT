// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import { anyCharacter } from '../../models/character';
import * as ac from './action.creators';

const initialState: Array<anyCharacter> = [];
export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadCharactersAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(ac.addCharacterAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateCharacterAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteCharacterAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addCase(ac.dieCharacterAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, lifeState: false }
                    : item
            )
        )
        .addDefaultCase((state) => state);
});
