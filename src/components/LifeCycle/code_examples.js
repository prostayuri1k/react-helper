export const codeMountClassComp = 'class MyComponent extends React.Component {\n' +
    '  constructor (props) {\n' +
    '    super(props)\n' +
    '    this.state = { count: 0 }\n' +
    '    this.increment = this.increment.bind(this)\n' +
    '  }\n' +
    '\n' +
    '  increment () {\n' +
    '    this.setState({ count: this.state.count + 1 })\n' +
    '  }\n' +
    '\n' +
    '  componentDidMount () {\n' +
    '    // Здесь можно выполнять запросы к серверу.\n' +
    '    console.log(\'Компонент был смонтирован!\')\n' +
    '  }\n' +
    '\n' +
    '  render () {\n' +
    '    return (\n' +
    '      <div>\n' +
    '        <p>Количество: {this.state.count}</p>\n' +
    '        <button onClick={this.increment}>+++</button>\n' +
    '      </div>\n' +
    '    )\n' +
    '  }\n' +
    '}'

export const codeUpdateClassComp = 'class MyComponent extends React.Component {\n' +
    '  shouldComponentUpdate (nextProps, nextState) {\n' +
    '    // В этом примере компонент будет обновляться только при изменении свойства name.\n' +
    '    return nextProps.name !== this.props.name\n' +
    '  }\n' +
    '\n' +
    '  componentDidUpdate (prevProps, prevState) {\n' +
    '    // Здесь можно выполнять действия после обновления компонента.\n' +
    '    console.log(\'Компонент был обновлен!\')\n' +
    '  }\n' +
    '\n' +
    '  render () {\n' +
    '    return <div>Hello, {this.props.name}!</div>\n' +
    '  }\n' +
    '}'

export const codeUnmountClassComp = 'import React from \'react\'\n' +
    '\n' +
    'class WillUnmountExample extends React.Component {\n' +
    '  constructor (props) {\n' +
    '    super(props)\n' +
    '    this.state = {\n' +
    '      time: 0\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    '  componentDidMount () {\n' +
    '    this.timerID = setInterval(() => {\n' +
    '      this.setState(prevState => ({\n' +
    '        time: prevState.time + 1\n' +
    '      }))\n' +
    '    }, 1000)\n' +
    '  }\n' +
    '\n' +
    '  componentWillUnmount () {\n' +
    '    clearInterval(this.timerID)\n' +
    '    alert(\'Компонент удален из DOM\')\n' +
    '  }\n' +
    '\n' +
    '  render () {\n' +
    '    return (\n' +
    '      <div>\n' +
    '        <p>Время: {this.state.time} секунд</p>\n' +
    '      </div>\n' +
    '    )\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'export default WillUnmountExample'

export const codeErrorClassComp = 'import React, { Component } from \'react\';\n' +
    '\n' +
    'class ErrorBoundaryExample extends Component {\n' +
    '  constructor(props) {\n' +
    '    super(props);\n' +
    '    this.state = {\n' +
    '      hasError: false,\n' +
    '      error: null,\n' +
    '      errorInfo: null\n' +
    '    };\n' +
    '  }\n' +
    '\n' +
    '  componentDidCatch(error, errorInfo) {\n' +
    '    this.setState({\n' +
    '      hasError: true,\n' +
    '      error: error,\n' +
    '      errorInfo: errorInfo\n' +
    '    });\n' +
    '  }\n' +
    '\n' +
    '  render() {\n' +
    '    if (this.state.hasError) {\n' +
    '      return (\n' +
    '        <div>\n' +
    '          <h2>Что-то пошло не так.</h2>\n' +
    '          <p>{this.state.error && this.state.error.toString()}</p>\n' +
    '          <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>\n' +
    '        </div>\n' +
    '      );\n' +
    '    }\n' +
    '\n' +
    '    return this.props.children;\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'class App extends Component {\n' +
    '  render() {\n' +
    '    return (\n' +
    '      <div>\n' +
    '        <h1>Пример использования ErrorBoundary</h1>\n' +
    '        <ErrorBoundaryExample>\n' +
    '          {/* Твой компонент с возможной ошибкой */}\n' +
    '          <ComponentWithError />\n' +
    '        </ErrorBoundaryExample>\n' +
    '      </div>\n' +
    '    );\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'const ComponentWithError = () => {\n' +
    '  const [throwError, setThrowError] = useState(false)\n' +
    '\n' +
    '  const handleClick = () => setThrowError(presState => !presState.throwError)\n' +
    '\n' +
    '  if (throwError) {\n' +
    '    // Имитация ошибки\n' +
    '    throw new Error(\'Это ошибка в компоненте ComponentWithError\')\n' +
    '  }\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h3>Компонент с возможной ошибкой</h3>\n' +
    '      <button onClick={() => handleClick()}>Генерировать ошибку</button>\n' +
    '    </div>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'export default App;'

export const codeExamplesFuncComp = '// Отработает как componentDidMount\n' +
    'useEffect(() => { console.log("componentDidMount") }, []) \n' +
    '\n' +
    '// Отработает как componentDidUpdate\n' +
    'useEffect(() => { console.log("componentDidUpdate") }, [dependency]) \n' +
    '\n' +
    '// Отработает как componentDidMount и componentDidUpdate\n' +
    'useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) \n' +
    '\n' +
    ' // Отработает как componentWillUnmount\n' +
    'useEffect(() => {\n' +
    '  return () => console.log(\'componentWillUnmount\')\n' +
    '}, [])'

export const codeExampleUseEffect1 = 'import React, { useState, useEffect } from \'react\';\n' +
    '\n' +
    'const Example = () => {\n' +
    '  const [count, setCount] = useState(0);\n' +
    '\n' +
    '  useEffect(() => {\n' +
    '    console.log(\'Компонент был монтирован\');\n' +
    '    return () => {\n' +
    '      console.log(\'Компонент будет размонтирован\');\n' +
    '    };\n' +
    '  }, []); // Пустой массив зависимостей и возвращает функцию, \n' +
    '\t// а значит выполнится только при монтировании и размонтировании\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <p>Счетчик: {count}</p>\n' +
    '      <button onClick={() => setCount(count + 1)}>Увеличить</button>\n' +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'export default Example;'

export const codeExampleUseEffect2 = 'import React, { useState, useEffect } from \'react\';\n' +
    '\n' +
    'const Example = () => {\n' +
    '  const [count, setCount] = useState(0);\n' +
    '  const [message, setMessage] = useState(\'\');\n' +
    '\n' +
    '  useEffect(() => {\n' +
    '    setMessage(`Счетчик изменен на: ${count}`);\n' +
    '  }, [count]); // Зависимость [count] - выполнится при изменении состояния count\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <p>{message}</p>\n' +
    '      <p>Счетчик: {count}</p>\n' +
    '      <button onClick={() => setCount(count + 1)}>Увеличить</button>\n' +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'export default Example;'