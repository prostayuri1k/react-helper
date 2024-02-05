export const codeRefsExample = 'import React, { useEffect, useState, Fragment, useRef } from \'react\'\n' +
    '\n' +
    'const Test = () => {\n' +
    '    const [text, setText] = useState(\'\')\n' +
    '    const textInput = useRef(null)\n' +
    '    const valid = () => {\n' +
    '        textInput.current.focus()\n' +
    '    }\n' +
    '    return (\n' +
    '        <div>\n' +
    '            <input ref={textInput} value={text} />\n' +
    '            <button onClick={() => valid()}>\n' +
    '                Click to focus\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    )\n' +
    '}\n' +
    '\n' +
    'export default Test'

export const codeRefsClassComp = 'import React from "react";\n' +
    '\n' +
    'class RefsClassExample extends React.Component {\n' +
    '    constructor(props) {\n' +
    '        super(props);\n' +
    '        this.state = {text: \'\'};\n' +
    '        this.textInput = React.createRef();\n' +
    '    }\n' +
    '    valid = () => this.textInput.current.focus();\n' +
    '\n' +
    '    render() {\n' +
    '        return (\n' +
    '            <div>\n' +
    '                <input ref={this.textInput} value={this.state.text}/>\n' +
    '                <button\n' +
    '                    style={{marginLeft: \'20px\'}}\n' +
    '                    onClick={this.valid}>\n' +
    '                    Click to focus\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        )\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'export default RefsClassExample;'

