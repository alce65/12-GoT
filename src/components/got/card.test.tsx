import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { useSelector } from 'react-redux';
import { render } from '../../services/test-utils';
import { anyCharacter, Character } from '../../models/character';
import { store } from '../../store/store';
import { Card } from './card';
import { King } from '../../models/king';
import 'react-redux';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

test('renders learn react link', () => {
    const king = { ...new King('IFree', '', 33, 0) };

    const preloadedState = {
        characters: [] as Array<anyCharacter>,
        speaker: { ...new Character('', '', 0, 'king') },
    };
    render(<Card character={king} />, { preloadedState, store });
    expect(screen.getByText(/IFree/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/habla/i));
    expect(useDispatch).toHaveBeenCalled();
    userEvent.click(screen.getByText(/muere/i));
    expect(useDispatch).toHaveBeenCalled();
});
