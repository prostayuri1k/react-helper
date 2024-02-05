export const codeReactMemo1 = 'import React from \'react\';\n' +
    '\n' +
    'const MyComponent = React.memo((props) => {\n' +
    '  // Компонент будет перерисовываться только при изменении пропсов\n' +
    '  return (\n' +
    '    <div>\n' +
    '      {props.text}\n' +
    '    </div>\n' +
    '  );\n' +
    '});'

export const codeReactMemo2 = 'import React from \'react\';\n' +
    '\n' +
    'const MyComponent = React.memo((props) => {\n' +
    '  // Компонент будет перерисовываться только при изменении пропсов с помощью \n' +
    '  // compareFunction\n' +
    '  return (\n' +
    '    <div>\n' +
    '      {props.text}\n' +
    '    </div>\n' +
    '  );\n' +
    '}, (prevProps, nextProps) => {\n' +
    '  // compareFunction - пользовательская функция сравнения пропсов\n' +
    '  // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться\n' +
    '});'

export const codeUseMemo1 = 'import React, { useMemo } from \'react\';\n' +
    '\n' +
    'const MyComponent = ({ data }) => {\n' +
    '  const processedData = useMemo(() => {\n' +
    '    // Вычисления, требующие много времени или ресурсов\n' +
    '    // Например, фильтрация или сортировка массива данных\n' +
    '    return processData(data);\n' +
    '  }, [data]); // Зависимость - значение пропса "data"\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      {processedData}\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeUseMemo2 = 'import React, { useMemo } from \'react\';\n' +
    '\n' +
    'const ExpensiveComponent = ({ propA, propB }) => {\n' +
    '  // Сложный компонент, требующий много ресурсов\n' +
    '  return (\n' +
    '    // ...\n' +
    '  );\n' +
    '};\n' +
    '\n' +
    'const MyComponent = ({ data }) => {\n' +
    '  const cachedComponent = useMemo(() => {\n' +
    '    // Компонент будет кэширован при каждом изменении propA или propB\n' +
    '    return <ExpensiveComponent propA={propA} propB={propB} />;\n' +
    '  }, [propA, propB]);\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      {cachedComponent}\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

