export const codePassValues = '// Родительский компонент\n' +
    'const ParentComponent = () => {\n' +
    '  const message = "Привет, Redev!";\n' +
    '  return <ChildComponent message={message} />;\n' +
    '}\n' +
    '\n' +
    '// Дочерний компонент\n' +
    'const ChildComponent = (props) => {\n' +
    '  return <div>{props.message}</div>;\n' +
    '}'

export const codeFuncProps = '// Родительский компонент\n' +
    'const ParentComponent = () => {\n' +
    '  const message = "Привет, Redev!";\n' +
    '  return <ChildComponent message={message} />;\n' +
    '}\n' +
    '\n' +
    '// Дочерний компонент\n' +
    'const ChildComponent = (props) => {\n' +
    '  return <div>{props.message}</div>;\n' +
    '}\n' +
    '\n' +
    '// либо сразу сделать деструктуризацию, ведь props это обычный объект\n' +
    'const ChildComponent = ({message}) => {\n' +
    '  return <div>{message}</div>;\n' +
    '}'

export const codeClassProps = '//ParentComponent.js\n' +
    'import ChildComponent from \'./ChildComponent\';\n' +
    '\n' +
    'const ParentComponent2 = () => <div>parentComponent2</div>\n' +
    'const obj = {name:\'Pasha\'}\n' +
    '\n' +
    'const ParentComponent = () => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '        <ChildComponent \n' +
    '\t\tname={\'abc\'} \n' +
    '\t\tage={25} \n' +
    '\t\tparentComponent2={ParentComponent2} \n' +
    '\t\tobject={obj}\n' +
    '\t/>\n' +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    '\n' +
    'export default ParentComponent;'

export const codeClassProps2 = '//ChildComponent.js\n' +
    'import React from \'react\'\n' +
    '\n' +
    'class ChildComponent extends React.Component{\n' +
    '  render(){\n' +
    '    return (\n' +
    '      <div>\n' +
    '        {this.props.name}\n' +
    '        {this.props.age}\n' +
    '        {this.props.parentComponent2()}\n' +
    '        {this.props.object.name}\n' +
    '      </div>\n' +
    '    );\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'export default ChildComponent'