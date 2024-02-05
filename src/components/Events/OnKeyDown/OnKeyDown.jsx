import React from 'react';

const OnKeyDown = () => {
    const handleKeyDown = (event) => {
        alert(`Нажата клавиша: ${event.key}`);
    }

    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} placeholder='Enter text'/>
        </div>
    );
};

export default OnKeyDown;