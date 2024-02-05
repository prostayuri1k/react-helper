import React from 'react';
import RefsExample from "./RefsExample";
import {codeRefsClassComp, codeRefsExample} from "./code_examples";
import Code from "../Code/Code";

const Refs = () => {
    return (
        <div>
            <h1>Refs</h1>
            <div className='content'>
                <p>
                    <b>Refs</b> (ссылки) предоставляет способ доступа к DOM-узлам или React-элементам, созданным в
                    методе <b>render()</b>.
                </p>
                <p>
                    Примеры использования <b>ссылок</b>:
                </p>
                <ol>
                    <li>
                        Управление фокусом, выделение текста.
                    </li>
                    <li>
                        Выполнение анимаций.
                    </li>
                    <li>
                        Интеграция со сторонними библиотеками, взаимодействующие с DOM.
                    </li>
                </ol>
                <Code code={codeRefsExample}/>
                <p>Результат выполнения кода:</p>
                <RefsExample/>
                <p>
                    Тот же пример с классовой компонентой:
                </p>
                <Code code={codeRefsClassComp}/>
            </div>
        </div>
    );
};

export default Refs;