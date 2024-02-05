import React from 'react';
import {codeKey1, codeKey2} from "./code_examples";
import Code from "../Code/Code";

const Key = () => {
    return (
        <div>
            <h1>Key</h1>
            <div className='content'>
                <p>
                    <b>Ключи</b> помогают React определять, какие элементы были изменены, добавлены или удалены. Их
                    необходимо
                    указывать, чтобы React мог сопоставлять элементы массива с течением времени:
                </p>
                <Code code={codeKey1}/>
                <p>
                    Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от
                    его соседей. Чаще всего используется ID из твоих данных как ключи. Если нет ID используй
                    библиотеку <b>uuid</b>:
                </p>
                <Code code={codeKey2}/>
                <p>
                    Ключи нужно определять непосредственно внутри массивов. Если не указать ключи, в консоли увидим
                    сообщение:<br/>
                    <b>Warning: Each child in an array or iterator should have a unique “key” prop.</b><br/>
                </p>
                <p>
                    Ключи оптимизируют работу с элементами массивов, уменьшают количество ненужных удалений и созданий
                    элементов.
                </p>
                <p>
                    Без key механизм <b>reconciliation</b> сверяет компоненты попарно между текущим и новым <b>VDOM</b>.
                    Из-за этого
                    может происходить большое количество лишних перерисовок интерфейса, что замедляет работу приложения.
                </p>
                <p>
                    Добавляя <b>key</b>, мы помогаем механизму <b>reconciliation</b> тем, что с <b>key</b> он сверяет не попарно, а ищет
                    компоненты с тем же <b>key</b> (тег / имя компонента при этом учитывается) — это уменьшает количество
                    перерисовок интерфейса. Обновлены/добавлены будут только те элементы, которые были изменены/не
                    встречались в предыдущем дереве.
                </p>
            </div>
        </div>
    );
};

export default Key;