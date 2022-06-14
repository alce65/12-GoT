// import { iState } from "../store/store";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/got/card';
import { Communications } from '../components/got/communications';
import { createCharacters } from '../data/characters';
import { iState } from '../store/store';
import home from './home.module.css';
import * as ac from '../reducers/characters/action.creators';
export function HomePage() {
    const characters = useSelector((state: iState) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        createCharacters().then((characters) => {
            dispatch(ac.loadCharactersAction(characters));
            console.log(characters);
        });
    }, [dispatch]);

    return (
        <main className={home.main}>
            <div className="app container">
                <h2>Game of Thrones - Home Page</h2>
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => (
                        <Card key={item.id} character={item}></Card>
                    ))}
                </ul>
                <Communications></Communications>
            </div>
        </main>
    );
}

export default HomePage;
