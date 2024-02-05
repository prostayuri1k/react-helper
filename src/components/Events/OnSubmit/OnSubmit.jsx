import React from 'react';
import s from './OnSubmit.module.css';

const OnSubmit = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Форма отправлена!');
    }
    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
                <p>Поля формы ...</p>
                <button className={s.button} type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default OnSubmit;