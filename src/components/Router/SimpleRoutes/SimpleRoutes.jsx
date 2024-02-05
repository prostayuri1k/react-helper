import React from 'react';
import {codeSimpleRoutes} from "../code_examples";
import Code from "../../Code/Code";

const SimpleRoutes = () => {
    return (
        <div style={{border: '1px solid #fff', padding: '20px'}}>
            <p>
                Для определения маршрутов в нашем приложении мы используем компонент <b>Routes</b>. Он позволяет нам
                указать путь и соответствующий компонент для отображения.
            </p>
            <p>
                <Code code={codeSimpleRoutes}/>
            </p>
            <p>
                Каждый <b>Route</b> имеет свойство <b>path</b>, которое указывает путь маршрута, и
                свойство <b>element</b>, которое
                указывает компонент, который нужно отобразить при совпадении маршрута.
            </p>
            <p>
                Таким образом, при переходе на путь <b>"/"</b> будет отображаться компонент <b>HomePage</b>, при
                переходе на путь
                <b>"/about" - AboutPage</b>, а при переходе на путь <b>"/contact" - ContactPage</b>.
            </p>
        </div>
    );
};

export default SimpleRoutes;