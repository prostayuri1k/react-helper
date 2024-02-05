import React from 'react';
import './Code.css';

const Code = ({code}) => {
    return (
        <div className='code_div'>
            <pre>
                <code>
                    {
                        code
                    }
                </code>
            </pre>
        </div>
    );
};

export default Code;