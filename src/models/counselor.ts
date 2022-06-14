/* eslint-disable no-unused-vars */
import { Character, iCharacter } from './character';

export class Counselor extends Character implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public chief: Character
    ) {
        super(name, family, age, 'counselor');
        this.message = 'No se por qué, pero creo que voy a morir pronto';
    }
}
