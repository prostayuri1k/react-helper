import React, {useState} from 'react';
import s from './OnMouseMover.module.css';

const OnMouseMover = () => {
    const [count, setCount] = useState(0)
    const handleMouseOver = () => {
        setCount(count + 1);
        if(count && count % 10 === 0) alert(`Вы навели курсор ${count} раз`)
    }

    return (
        <div onMouseOver={handleMouseOver}
             className={s.container}>
            Наведите курсор на меня
        </div>
    );
};

export default OnMouseMover;