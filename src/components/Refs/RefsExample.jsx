import React, { useState, useRef } from 'react'

const RefsExample = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button
                style={{marginLeft: '20px'}}
                onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default RefsExample