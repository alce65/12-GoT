/* eslint-disable no-unused-vars */
import { Character, iCharacter } from './character';

export class King extends Character implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public kingdomYears: number
    ) {
        super(name, family, age, 'king');
        this.message = 'Vais a morir todos';
    }
}
