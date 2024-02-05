import React, {useState} from 'react';
import Code from "./Code/Code";

const ShowHidden = ({code}) => {
    const [showText, setShowText] = useState(false);
    const handleClick = () => setShowText(!showText);
    return (
        <div>
            <button style={{marginBottom: "10px"}} onClick={handleClick}>{showText ? `Скрыть пример` : `Показать пример`}</button>
            {showText && <Code code={code}/>}
        </div>
    );
};

export default ShowHidden;