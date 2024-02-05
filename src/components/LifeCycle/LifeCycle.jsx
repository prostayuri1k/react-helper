import React from 'react';
import s from './LifeCycle.module.css';
import ShowHidden from "../ShowHidden";
import {
    codeErrorClassComp,
    codeExamplesFuncComp, codeExampleUseEffect1, codeExampleUseEffect2,
    codeMountClassComp,
    codeUnmountClassComp,
    codeUpdateClassComp
} from "./code_examples";
import Code from "../Code/Code";

const LifeCycle = () => {
    return (
        <div>
            <h1>Life Cycle</h1>
            <div className='content'>
                <h1>LifeCycle (useEffect)</h1>
                <h3>Методы жизненного цикла в React можно разделить на следующие группы:</h3>
                <ol>
                    <li className={s.list_item}>
                        Методы монтирования
                        <ul>
                            <li><b>constructor()</b></li>
                            <li><b>render()</b></li>
                            <li><b>componentDidMount()</b></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Методы обновления (Updating Methods):
                        <ul>
                            <li><b>shouldComponentUpdate()</b></li>
                            <li><b>render()</b></li>
                            <li><b>componentDidUpdate()</b></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Методы размонтирования (Unmounting Methods):
                        <ul>
                            <li><b>componentWillUnmount()</b></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Методы обработки ошибок (Error Handling Methods):
                        <ul>
                            <li><b>componentDidCatch()</b></li>
                        </ul>
                    </li>
                </ol>
                <h3>Жизненный цикл классовых компонентов:</h3>
                <ol>
                    <li className={s.list_item}>
                        Mounting (Монтирование):
                        <ul>
                            <li className={s.ul_list_item}><b>constructor()</b>: Вызывается при создании экземпляра
                                компонента. Используется для
                                инициализации состояния и привязки методов.
                            </li>
                            <li className={s.ul_list_item}><b>render()</b>: Отрисовывает компонент и возвращает React
                                элементы.
                            </li>
                            <li className={s.ul_list_item}><b>componentDidMount()</b>: Вызывается после рендеринга
                                компонента и его добавления в DOM.
                                Используется для выполнения запросов к серверу, подписки на события и других побочных
                                эффектов.
                            </li>
                            <li className={s.ul_list_item}>
                                <ShowHidden code={codeMountClassComp}/>
                            </li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Updating (Обновление):
                        <ul>
                            <li className={s.ul_list_item}>
                                <b>shouldComponentUpdate(nextProps, nextState)</b>: Вызывается перед обновлением
                                компонента.
                                Используется для оптимизации перерисовки компонента путем возврата <b>false</b>, если
                                обновление не требуется.
                            </li>
                            <li className={s.ul_list_item}>
                                <b>render()</b>: Отрисовывает компонент и возвращает React элементы.
                            </li>
                            <li className={s.ul_list_item}>
                                <b>componentDidUpdate(prevProps, prevState)</b>: Вызывается после обновления компонента
                                и его
                                рендеринга. Используется для выполнения дополнительных действий после обновления
                                компонента, например, для выполнения запросов к серверу на основе новых пропсов.
                            </li>
                            <li className={s.ul_list_item}>
                                <ShowHidden code={codeUpdateClassComp}/>
                            </li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Unmounting (Размонтирование):
                        <ul>
                            <li className={s.ul_list_item}>
                                <b>componentWillUnmount()</b>: Вызывается перед удалением компонента из DOM.
                                Используется для
                                выполнения необходимых очисток, отписки от событий и освобождения ресурсов.
                            </li>
                            <li className={s.ul_list_item}>
                                <ShowHidden code={codeUnmountClassComp}/>
                            </li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Error Handling (Обработка ошибок):
                        <ul>
                            <li className={s.ul_list_item}>
                                <b>componentDidCatch(error, info)</b>: Вызывается при возникновении ошибки в дочерних
                                компонентах. Используется для отлавливания и обработки ошибок.
                            </li>
                            <li className={s.ul_list_item}>
                                <ShowHidden code={codeErrorClassComp}/>
                            </li>
                        </ul>
                    </li>
                </ol>
                <h3>Жизненный цикл функциональных компонентов:</h3>
                <p>
                    <b>useEffect</b> - это хук в React, предназначенный для работы с методами жизненного цикла в
                    функциональных
                    компонентах.
                    По сути вот ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла.
                    <p>
                        <b>Первый параметр</b>: Функция, которая должна выполниться при монтировании компонента и при
                        каждом
                        обновлении.
                    </p>
                    <p>
                        <b>Второй параметр</b>: Массив зависимостей определяет, на что конкретно должен
                        реагировать <b>useEffect</b>.
                        Если массив пуст, <b>useEffect</b> выполняется только при монтировании и размонтировании. Если в
                        массиве указаны определенные значения, то <b>useEffect</b> будет выполняться только тогда, когда
                        эти
                        значения изменяются.
                    </p>
                </p>
                <Code code={codeExamplesFuncComp}/>
                <ol>
                    <li className={s.list_item}>
                        Mounting (Монтирование):
                        <ul>
                            <li className={s.ul_list_item}>
                                <b>useEffect(() => {}, [])</b>: Заменяет <b>componentDidMount()</b>. Выполняет побочные
                                эффекты только
                                один раз после монтирования.
                                Передавая пустой массив зависимостей <b>[]</b>, можно сделать хук <b>useEffect</b>
                                аналогом <b>componentDidMount</b>.
                            </li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Updating (Обновление):
                        <ul>
                            <li className={s.ul_list_item}>
                                <b>useEffect(() => {}, [dependency])</b>: Заменяет <b>componentDidUpdate()</b>.
                                Позволяет указать
                                зависимость для выполнения функции только при изменении определенных props или state.
                                Что передашь, за тем и будет следить и при изменении вызовет функцию.
                            </li>
                            <li className={s.ul_list_item}>
                                <b>useEffect(() => {})</b>: Выполняет функцию после каждого рендеринга компонента.
                                Отрабатывает
                                как <b>componentDidMount()</b> и <b>componentDidUpdate()</b>.
                            </li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        Unmounting (Размонтирование):
                        <ul>
                            <li className={s.ul_list_item}>
                                <b>useEffect(() => () => {})</b>: Заменяет <b>componentWillUnmount()</b>. Выполняет
                                очистку и отписку
                                от побочных эффектов при размонтировании (удалении из DOM) компонента.
                            </li>
                        </ul>
                    </li>
                </ol>
                <h3>Примеры:</h3>
                <Code code={codeExampleUseEffect1}/>
                <p>
                    В этом примере <b>useEffect</b> выполняется при монтировании компонента и возвращает функцию,
                    которая будет
                    выполнена при размонтировании. Так как второй параметр <b>useEffect</b> - это пустой массив
                    зависимостей
                    <b>[]</b>, он не будет срабатывать при обновлении состояний.
                </p>
                <Code code={codeExampleUseEffect2}/>
                <p>
                    В этом примере <b>useEffect</b> выполняется при изменении значения <b>count</b>, так как <b>count</b> является
                    зависимостью, переданной в массиве <b>[count]</b>. Когда <b>count</b> изменяется, <b>useEffect</b> обновляет состояние
                    <b>message</b>, отображая новое сообщение о счетчике.
                </p>
            </div>
        </div>
    );
};

export default LifeCycle;