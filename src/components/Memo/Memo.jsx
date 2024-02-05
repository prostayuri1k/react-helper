import React from 'react';
import Code from "../Code/Code";
import {codeReactMemo1, codeReactMemo2, codeUseMemo1, codeUseMemo2} from "./code_examples";

const Memo = () => {
    return (
        <div>
            <h1>Memo</h1>
            <div className='content'>
                <h3>React.memo</h3>
                <p>
                    <b>React.memo</b> — это функция высшего порядка (<b>Higher Order Component</b>) в библиотеке React,
                    которая
                    оптимизирует производительность функциональных компонентов. Она предназначена для предотвращения
                    ненужного повторного рендеринга компонента, когда его пропсы и состояние не изменились.
                </p>
                <p>
                    По умолчанию, при каждом изменении состояния или пропсов компонент перерисовывается, даже если
                    результирующий визуальный вывод не изменился. Это может быть неэффективно для компонентов, которые
                    не зависят от изменений внешних данных и всегда отображают одинаковый результат.
                </p>
                <p>
                    <b>React.memo</b> использует механизм мемоизации, чтобы запоминать предыдущий результат рендеринга
                    компонента и сравнивать его с текущими пропсами. Если пропсы не
                    изменились, <b>React.memo</b> предотвращает
                    повторный рендеринг компонента, возвращая сохраненный результат.
                </p>
                <p>Пример использования <b>React.memo</b>:</p>
                <Code code={codeReactMemo1}/>
                <p>
                    <b>React.memo</b> также принимает второй необязательный аргумент в виде функции сравнения
                    (compareFunction), которая позволяет контролировать, какие пропсы должны считаться "равными". Если
                    функция сравнения не указана, <b>React.memo</b> будет использовать поверхностное сравнение (shallow
                    comparison) для сравнения пропсов.
                </p>
                <Code code={codeReactMemo2}/>
                <p>
                    Использование <b>React.memo</b> позволяет сократить количество повторных рендеров и улучшить
                    производительность приложения, особенно для компонентов с большим количеством данных или сложными
                    вычислениями внутри.
                </p>
                <h3>useMemo</h3>
                <p>
                    React хук <b>useMemo</b> предназначен для мемоизации вычислений в функциональных компонентах. Он
                    позволяет
                    сохранять результат вычислений и повторно использовать его, если входные значения (зависимости) не
                    изменились. Это может существенно повысить производительность, особенно в случаях, когда сложные
                    вычисления выполняются при каждом рендеринге компонента.
                </p>
                <p>Примеры использования <b>useMemo</b>:</p>
                <p>Вычисление производительной функции:</p>
                <Code code={codeUseMemo1}/>
                <p>В этом примере результат вычисления <b>processData</b> будет сохраняться и пересчитываться
                    только
                    при изменении значения пропса <b>data</b>. При последующих рендерах, если <b>data</b> не
                    изменилось, будет
                    использован сохраненный результат.
                </p>
                <p>Кэширование компонента:</p>
                <Code code={codeUseMemo2}/>
                <p>В этом примере компонент <b>ExpensiveComponent</b> будет пересоздаваться только при изменении
                    пропсов <b>propA</b> или <b>propB</b>. При остальных рендерах будет использоваться кэшированный
                    компонент,
                    что помогает снизить нагрузку на рендеринг сложных компонентов.
                </p>
            </div>
        </div>
    );
};

export default Memo;