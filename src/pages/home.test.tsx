import { screen } from '@testing-library/react';
import { anyCharacter, Character } from '../models/character';
import { render } from '../services/test-utils';
import { store } from '../store/store';
import HomePage from './home';

test('renders learn react link', () => {
    const preloadedState = {
        characters: [] as Array<anyCharacter>,
        speaker: { ...new Character('', '', 0, 'king') },
    };
    render(<HomePage />, { preloadedState, store });
    expect(
        screen.getByText(/Game of Thrones - Home Page/i)
    ).toBeInTheDocument();
});
