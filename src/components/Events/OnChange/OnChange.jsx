import React, {useState} from 'react';
import s from './OnChange.module.css';

const OnChange = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className={s.container}>
            <label>
                <p>Введите текст</p>
                <input type={"text"} onChange={handleChange} value={value}/>
            </label>
            <p>Вы ввели: {value}</p>
        </div>
    );
};

export default OnChange;