export const codeOnClick = 'import React, {useState} from \'react\';\n' +
    '\n' +
    'const Counter = () => {\n' +
    '    const [count, setCount] = useState(0);\n' +
    '    const increment = () => {\n' +
    '        setCount(count + 1);\n' +
    '    }\n' +
    '    return (\n' +
    '        <div className=\'counter\'>\n' +
    '            <p>Счетчик: {count}</p>\n' +
    '            <button onClick={increment}>Увеличить</button>\n' +
    '        </div>\n' +
    '    );\n' +
    '};\n' +
    '\n' +
    'export default Counter;'

export const codeOnChange = 'import React, {useState} from \'react\';\n' +
    '\n' +
    'const OnChange = () => {\n' +
    '    const [value, setValue] = useState(\'\');\n' +
    '    const handleChange = (event) => {\n' +
    '        setValue(event.target.value);\n' +
    '    }\n' +
    '    return (\n' +
    '        <div>\n' +
    '            <label>\n' +
    '                Введите текст\n' +
    '                <input type={"text"} onChange={handleChange} value={value}/>\n' +
    '            </label>\n' +
    '            <p>Вы ввели: {value}</p>\n' +
    '        </div>\n' +
    '    );\n' +
    '};\n' +
    '\n' +
    'export default OnChange;'

export const codeOnSubmit = 'import React from \'react\';\n' +
    '\n' +
    'const OnSubmit = () => {\n' +
    '    const handleSubmit = (event) => {\n' +
    '        event.preventDefault();\n' +
    '        alert(\'Форма отправлена!\');\n' +
    '    }\n' +
    '    return (\n' +
    '        <div>\n' +
    '            <form onSubmit={handleSubmit}>\n' +
    '                <p>Поля формы ...</p>\n' +
    '                <button type="submit">Отправить</button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    );\n' +
    '};\n' +
    '\n' +
    'export default OnSubmit;'

export const codeOnMouseMover = 'import React, {useState} from \'react\';\n' +
    'import s from \'./OnMouseMover.module.css\';\n' +
    '\n' +
    'const OnMouseMover = () => {\n' +
    '    const [count, setCount] = useState(0)\n' +
    '    const handleMouseOver = () => {\n' +
    '        setCount(count + 1);\n' +
    '        if(count && count % 10 === 0) alert(`Вы навели курсор ${count} раз`)\n' +
    '    }\n' +
    '\n' +
    '    return (\n' +
    '        <div onMouseOver={handleMouseOver}\n' +
    '             className={s.container}>\n' +
    '            Наведите курсор на меня\n' +
    '        </div>\n' +
    '    );\n' +
    '};\n' +
    '\n' +
    'export default OnMouseMover;'

export const codeOnKeyDown = 'import React from \'react\';\n' +
    '\n' +
    'const OnKeyDown = () => {\n' +
    '    const handleKeyDown = (event) => {\n' +
    '        alert(`Нажата клавиша: ${event.key}`);\n' +
    '    }\n' +
    '\n' +
    '    return (\n' +
    '        <div>\n' +
    '            <input type="text" onKeyDown={handleKeyDown} placeholder=\'Enter text\'/>\n' +
    '        </div>\n' +
    '    );\n' +
    '};\n' +
    '\n' +
    'export default OnKeyDown;'





