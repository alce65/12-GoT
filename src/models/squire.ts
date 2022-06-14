/* eslint-disable no-unused-vars */
import { Knight } from './knight.js';
import { Character, iCharacter } from './character';

export class Squire extends Character implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public submission: number,
        public lord: Knight
    ) {
        super(name, family, age, 'squire');
        this.message = 'Soy un looser';
    }
}
