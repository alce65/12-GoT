/* eslint-disable no-unused-vars */

import { useSelector } from 'react-redux';
import { iState } from '../../store/store.js';
import './communications.css';

export function Communications() {
    const speaker = useSelector((state: iState) => state.speaker);
    console.log({ speaker });
    return (
        <div className={`communications ${speaker.name && 'on'}`}>
            {speaker.name && (
                <>
                    <p className="communications__text display-1">
                        {speaker.message}
                    </p>
                    <img
                        className="communications__picture"
                        src={`img/${speaker.name.toLowerCase()}.jpg`}
                        alt={`${speaker.name} y ${speaker.family} del que habla`}
                    />
                </>
            )}
        </div>
    );
}
