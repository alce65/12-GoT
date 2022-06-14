import { Counselor } from '../models/counselor';
import { Squire } from '../models/squire';
import { Knight } from '../models/knight';
import { King } from '../models/king';
import { Character } from '../models/character';

export async function createCharacters() {
    const data: Array<Character> = [
        { ...new King('Joffrey', 'Baratheon', 33, 2) },
        { ...new Knight('Jaime', 'Lannister', 33, 'espada', 8) },
        { ...new Knight('Daenerys', 'Targaryen', 33, 'dragones', 9) },
    ];
    data.push({ ...new Counselor('Tyrion', 'Lannister', 33, data[2]) });
    data.push({
        ...new Squire('Bronn', 'Aguas Negras', 33, 5, data[1] as Knight),
    });

    return data;
}
