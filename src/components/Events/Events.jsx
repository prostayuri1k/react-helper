import React from 'react';
import Code from "../Code/Code";
import {codeOnChange, codeOnClick, codeOnKeyDown, codeOnMouseMover, codeOnSubmit} from "./code_examples";
import Counter from "../State/Counter/Counter";
import OnChange from "./OnChange/OnChange";
import OnSubmit from "./OnSubmit/OnSubmit";
import OnMouseMover from "./OnMouseMover/OnMouseMover";
import OnKeyDown from "./OnKeyDown/OnKeyDown";

const Events = () => {
    return (
        <div>
            <h1>Events</h1>
            <div className='content'>
                <p>
                    В React события (<b>events</b>) являются важной частью взаимодействия с пользователем. Они позволяют
                    обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие.
                </p>
                <p>Наиболее часто используемые события в React и примеры их применения:</p>
                <ol>
                    <li>
                        <b>onClick (клик)</b>
                        <p>Событие <b>onClick</b> возникает при клике на элементе. Это одно из наиболее распространенных
                            событий в React.</p>
                        <Code code={codeOnClick}/>
                        <p>Результат выполнения кода:</p>
                        <Counter/>
                    </li>
                    <li>
                        <b>onChange (изменение)</b>
                        <p>
                            Событие <b>onChange</b> возникает при изменении значения элемента формы, такого как
                            текстовое поле
                            (input), флажок (checkbox) или выбор элемента списка (radio).
                        </p>
                        <Code code={codeOnChange}/>
                        <p>Результат выполнения кода:</p>
                        <OnChange/>
                        <p>
                            В React, параметр <b>event</b> в callback-функции представляет объект события, который
                            генерируется
                            при изменении значения элемента формы или компонента. <b>event.target.value</b> содержит
                            текущее
                            значение <b>input</b> элемента.
                        </p>
                    </li>
                    <li>
                        <b>onSubmit (Отправка формы)</b>
                        <p>
                            Событие <b>onSubmit</b> возникает при отправке формы. Оно позволяет выполнить действия,
                            связанные с
                            отправкой данных формы на сервер.
                        </p>
                        <Code code={codeOnSubmit}/>
                        <p>Результат выполнения кода:</p>
                        <OnSubmit/>
                    </li>
                    <li style={{marginTop: '20px'}}>
                        <b>onMouseOver (Наведение курсора):</b>
                        <p>
                            Событие <b>onMouseOver</b> возникает, когда курсор наводится на элемент. Оно может
                            использоваться
                            для отображения дополнительной информации или изменения состояния компонента при наведении.
                        </p>
                        <Code code={codeOnMouseMover}/>
                        <p>Результат выполнения кода:</p>
                        <OnMouseMover/>
                    </li>
                    <li style={{marginTop: '20px'}}>
                        <b>onKeyDown (Нажатие клавиши)</b>
                        <p>
                            Событие <b>onKeyDown</b> возникает при нажатии клавиши на клавиатуре. Оно позволяет
                            реагировать на
                            определенные комбинации клавиш или выполнять действия на основе нажатых клавиш.
                        </p>
                        <Code code={codeOnKeyDown}/>
                        <p>Результат выполнения кода:</p>
                        <OnKeyDown/>
                    </li>
                </ol>
                <p>
                    Существует множество других событий, таких как <b>onFocus</b>, <b>onBlur</b>, <b>onScroll</b> и т. д., которые могут быть
                    использованы в зависимости от конкретных потребностей приложения.
                </p>
            </div>
        </div>
    );
};

export default Events;