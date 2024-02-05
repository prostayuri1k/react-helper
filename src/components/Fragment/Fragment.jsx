import React from 'react';
import Code from "../Code/Code";
import {codeFragment, codeShortFragment} from "./code_examples";

const Fragment = () => {
    return (
        <div>
            <h1>Fragment</h1>
            <div className='content'>
                <p>
                    С помощью <b>фрагментов</b> можно сгруппировать список дочерних элементов без добавления
                    дополнительных узлов в DOM.
                </p>
                <p>
                    Используем <b>React.Fragment</b> или выполняем импорт, чтобы использовать <b>Fragment</b>:
                </p>
                <Code code={codeFragment}/>
                <p>
                    Существует сокращенная запись (импортировать не нужно) - недостаток сокращенной записи: нельзя
                    использовать атрибуты, например <b>className</b> или <b>key</b>:
                </p>
                <Code code={codeShortFragment}/>
            </div>
        </div>
    );
};

export default Fragment;