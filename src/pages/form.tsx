import { SyntheticEvent, useState } from 'react';

export function FormPage() {
    const initialState = { charName: '' };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    return (
        <>
            <h2>Nuevos Personajes</h2>
            <form>
                <select></select>

                <input
                    type="text"
                    name="charName"
                    value={formData.charName}
                    onChange={handleChange}
                />
            </form>
        </>
    );
}
