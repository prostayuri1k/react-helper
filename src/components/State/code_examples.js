export const codeImportState = 'import React, { useState } from \'react\';\n' +
    '\n' +
    'const [state, setState] = useState(initialState);';

export const codeCreateStateFuncComp = 'import React, { useState } from \'react\';\n' +
    '\n' +
    'const Counter = () => {\n' +
    '  const [count, setCount] = useState(0);\n' +
    '\n' +
    '  // Остальной код компонента\n' +
    '};'

export const codeCreateStateClassComp = 'import React, { Component } from \'react\';\n' +
    '\n' +
    'class Counter extends Component {\n' +
    '  constructor(props) {\n' +
    '    super(props);\n' +
    '    this.state = {\n' +
    '      count: 0,\n' +
    '    };\n' +
    '  }\n' +
    '\n' +
    '  // Остальной код компонента\n' +
    '}'

export const codeUpdateStateFuncComp = 'const Counter = () => {\n' +
    '  const [count, setCount] = useState(0);\n' +
    '\n' +
    '  const increment = () => {\n' +
    '    setCount(count + 1);\n' +
    '  };\n' +
    '\n' +
    '  // Остальной код компонента\n' +
    '};'

export const codeUpdateStateClassComp = 'class Counter extends Component {\n' +
    '  constructor(props) {\n' +
    '    super(props);\n' +
    '    this.state = {\n' +
    '      count: 0,\n' +
    '    };\n' +
    '  }\n' +
    '\n' +
    '  increment = () => {\n' +
    '    this.setState({ count: this.state.count + 1 });\n' +
    '    // или\n' +
    '\t\tthis.setState(state=>({ count: state.count + 1 }));\n' +
    '  };\n' +
    '\n' +
    '  // Остальной код компонента\n' +
    '}'

export const codeUseState = 'const Counter = () => {\n' +
    '  const [count, setCount] = useState(0);\n' +
    '\n' +
    '  const increment = () => {\n' +
    '    setCount(count + 1);\n' +
    '  };\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <p>Счетчик: {count}</p>\n' +
    '      <button onClick={increment}>Увеличить</button>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'