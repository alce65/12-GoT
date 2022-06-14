import { Character } from './character';

describe('Given the class Character', () => {
    describe('When I instantiate an object  ', () => {
        //  Arrange - Act
        const p = new Character('', '', 0, 'king');
        test(`Then an object should be created with instance properties: 
            name · family · age · lifeState - message
            and static property series = "GoT"`, () => {
            // Assert
            expect(p).toBeInstanceOf(Character);
            expect(p).toHaveProperty('name');
            expect(p).toHaveProperty('family');
            expect(p).toHaveProperty('age');
            expect(p).toHaveProperty('lifeState');
            expect(p).toHaveProperty('message');
            expect(Character.series).toBe('GoT');
        });

        describe('And read the property communicate', () => {
            test('then it should return a messaje', () => {
                const expectedMessage = '';
                const result = p.message;
                expect(result).toBe(expectedMessage);
            });
        });
    });
});

// Given - When (And) - Them -> Gerkin
// Arrange - Act - Assert
