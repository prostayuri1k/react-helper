export const codeFragment = 'import React, { Fragment } from \'react\';\n' +
    '\n' +
    '//Заменяем теги div на Fragment:\n' +
    'const ChildComponent = () => <Fragment>\n' +
    '    <h1>Hello Child Component</h1>\n' +
    '    <h1>Hello Child Component</h1>\n' +
    '</Fragment>'

export const codeShortFragment = 'import React, { Fragment } from \'react\';\n' +
    '\n' +
    '//так хорошо\n' +
    'const ChildComponent = () => <>\n' +
    '    <h1>Hello Child Component</h1>\n' +
    '    <h1>Hello Child Component</h1>\n' +
    '</>\n' +
    '\n' +
    '//будет ошибка\n' +
    'const ChildComponent = () => < className="child" >\n' +
    '    <h1>Hello Child Component</h1>\n' +
    '    <h1>Hello Child Component</h1>\n' +
    '</>'

