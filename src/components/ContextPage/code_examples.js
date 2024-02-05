export const codePropsDrilling = 'const GrandParentComponent = ({ value }) => {\n' +
    '  return (\n' +
    '    <ParentComponent value={value} />\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'const ParentComponent = ({ value }) => {\n' +
    '  return (\n' +
    '    <ChildComponent value={value} />\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'const ChildComponent = ({ value }) => {\n' +
    '  return (\n' +
    '    <div>{value}</div>\n' +
    '  );\n' +
    '}'

export const codeCreateContext = '// MyContext.js\n' +
    'import React from \'react\';\n' +
    '\n' +
    'const MyContext = React.createContext();\n' +
    '\n' +
    'export default MyContext;'

export const codeContextProvider = '// App.js\n' +
    'import React from \'react\';\n' +
    'import MyContext from \'./MyContext\';\n' +
    'import ComponentA from \'./ComponentA\';\n' +
    '\n' +
    'const App = () => {\n' +
    '  const value = \'Hello, Context!\';\n' +
    '\n' +
    '  return (\n' +
    '    <MyContext.Provider value={value}>\n' +
    '      <ComponentA />\n' +
    '    </MyContext.Provider>\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'export default App;'

export const codeUseContext = '// ComponentA.js\n' +
    'import React, { useContext } from \'react\';\n' +
    'import MyContext from \'./MyContext\';\n' +
    'import ComponentB from \'./ComponentB\';\n' +
    '\n' +
    'function ComponentA() {\n' +
    '  const value = useContext(MyContext);\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h2>Component A</h2>\n' +
    '      <p>Received value from Context: {value}</p>\n' +
    '      <ComponentB />\n' +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'export default ComponentA;'

export const codeConsumer = '// ComponentA.js\n' +
    'import React from \'react\';\n' +
    'import MyContext from \'./MyContext\';\n' +
    'import ComponentB from \'./ComponentB\';\n' +
    '\n' +
    'function ComponentA() {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h2>Component A</h2>\n' +
    '      <MyContext.Consumer>\n' +
    '        {(value) => (\n' +
    '          <p>Received value from Context: {value}</p>\n' +
    '        )}\n' +
    '      </MyContext.Consumer>\n' +
    '      <ComponentB />\n' +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'export default ComponentA;'
