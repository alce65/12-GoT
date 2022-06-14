import { screen } from '@testing-library/react';
import { anyCharacter, Character } from '../../models/character';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';
import { App } from './App';

test('renders learn react link', () => {
    const preloadedState = {
        characters: [] as Array<anyCharacter>,
        speaker: { ...new Character('', '', 0, 'king') },
    };
    render(<App />, { preloadedState, store });
    expect(screen.getByText(/Learning React - Redux/i)).toBeInTheDocument();
});
