export const codeCreateHoc = 'const withLogger = (WrappedComponent) => {\n' +
    '  return (props) => {\n' +
    '    console.log(\'Component rendered:\', WrappedComponent.name);\n' +
    '    return <WrappedComponent {...props} />;\n' +
    '  };\n' +
    '};'

export const codeThrowProps = 'const withExtraProps = (WrappedComponent) => {\n' +
    '  return (props) => {\n' +
    '    const extraProps = { additionalProp: "I\'m extra!" };\n' +
    '    return <WrappedComponent {...props} {...extraProps} />;\n' +
    '  };\n' +
    '};';

export const codeLog = 'import React, { useEffect } from \'react\';\n' +
    '\n' +
    'const withLogger = (WrappedComponent) => {\n' +
    '  return (props) => {\n' +
    '    useEffect(() => {\n' +
    '      console.log(`Component ${WrappedComponent.name} mounted.`);\n' +
    '    }, []);\n' +
    '\n' +
    '    return <WrappedComponent {...props} />;\n' +
    '  };\n' +
    '};';

export const codeAuth = 'const withAuth = (WrappedComponent) => {\n' +
    '  return (props) => {\n' +
    '    const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.\n' +
    '    if (isAuthenticated) {\n' +
    '      return <WrappedComponent {...props} />;\n' +
    '    } else {\n' +
    '      return <p>Please log in to access this content.</p>;\n' +
    '    }\n' +
    '  };\n' +
    '};\n' +
    '\n' +
    'const AuthenticatedComponent = withAuth(ProfileComponent);';

export const codeLocal = 'const withLocalization = (WrappedComponent) => {\n' +
    '  return (props) => {\n' +
    '    const locale = getCurrentLocale(); // Получение текущей локали.\n' +
    '    const localizedContent = getLocalizedContent(locale);\n' +
    '    return <WrappedComponent {...props} localizedContent={localizedContent} />;\n' +
    '  };\n' +
    '};\n' +
    '\n' +
    'const LocalizedProfile = withLocalization(ProfileComponent);';

export const codeState = 'import React, { useState } from \'react\';\n' +
    '\n' +
    '// HOC\n' +
    'const withCounter = (WrappedComponent) => {\n' +
    '  return (props) => {\n' +
    '    const [count, setCount] = useState(0);\n' +
    '\n' +
    '    const incrementCount = () => {\n' +
    '      setCount(count + 1);\n' +
    '    };\n' +
    '\n' +
    '    return (\n' +
    '      <WrappedComponent\n' +
    '        count={count}\n' +
    '        incrementCount={incrementCount}\n' +
    '        {...props}\n' +
    '      />\n' +
    '    );\n' +
    '  };\n' +
    '};\n' +
    '\n' +
    '// Компонент, который будет обернут HOC\n' +
    'const Counter = ({ count, incrementCount }) => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <p>Count: {count}</p>\n' +
    '      <button onClick={incrementCount}>Increment</button>\n' +
    '    </div>\n' +
    '  );\n' +
    '};\n' +
    '\n' +
    '// Применение HOC к компоненту\n' +
    'const CounterWithHOC = withCounter(Counter);\n' +
    '\n' +
    '// Компонент, использующий обернутый компонент с HOC\n' +
    'const App = () => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Counter App</h1>\n' +
    '      <CounterWithHOC />\n' +
    '    </div>\n' +
    '  );\n' +
    '};';