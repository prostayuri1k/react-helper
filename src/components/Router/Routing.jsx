import React from 'react';
import ShowHidden from "../ShowHidden";
import {
    codeBrowserRouter,
    codeLink,
    codeNAvLink, codeOutlet,
    codeRoute,
    codeRoutes, codeUseLocation,
    codeUseNavigate,
    codeUseParams
} from "./code_examples";
import {NavLink, Outlet} from "react-router-dom";

const Routing = () => {
    return (
        <div>
            <h1>Роутинг в React с помощью React Router V6</h1>
            <div className='content'>
                <h3>Значение роутинга в веб-приложениях</h3>
                <p>
                    Роутинг играет важную роль в разработке веб-приложений, обеспечивая навигацию и переходы между
                    различными страницами и разделами приложения.
                </p>
                <p>
                    Основная цель <b>роутинга</b> в веб-приложениях заключается в том, чтобы позволить пользователям
                    перемещаться по различным частям приложения <b>БЕЗ ПЕРЕЗАГРУЗКИ</b> страницы. Вместо того, чтобы
                    каждый раз
                    отправлять запрос на сервер и загружать новую страницу, роутинг позволяет динамически обновлять
                    только необходимые компоненты или данные в соответствии с выбранным маршрутом.
                </p>
                <p>
                    Это создает более плавный пользовательский опыт, уменьшает время загрузки и позволяет разработчикам
                    создавать богатые и интерактивные приложения.
                </p>
                <p>
                    Кроме того, роутинг обеспечивает возможность передачи параметров через URL, что позволяет приложению
                    динамически адаптироваться к разным условиям и сценариям использования. Например, приложение может
                    отображать разные данные или компоненты на основе параметров маршрута, таких как идентификатор
                    пользователя или идентификатор записи.
                </p>
                <h3>
                    Установка и настройка React Router Dom v6:
                </h3>
                <p>
                    1. Открой командную строку или терминал в корневой папке проекта.
                </p>
                <p>
                    2. Для установки React Router Dom v6 с помощью npm выполни следующую команду:<br/>
                    <b>npm install react-router-dom</b>
                </p>
                <h3>ОСНОВНЫЕ КОМПОНЕНТЫ, которые присутствуют в react-router-dom v6:</h3>
                <ol>
                    <li>
                        <b>BrowserRouter</b>: Это компонент, который оборачивает ваше приложение и предоставляет
                        контекст для
                        маршрутизации. Он используется для настройки основного маршрутизатора в приложении.
                        <p>
                            <ShowHidden code={codeBrowserRouter}/>
                        </p>
                    </li>
                    <li>
                        <b>Routes</b>: Это компонент, который содержит определения маршрутов и соответствующих им
                        компонентов.
                        Вы определяете маршруты внутри компонента Routes, используя элемент <b>Route</b>.
                        <p>
                            <ShowHidden code={codeRoutes}/>
                        </p>
                    </li>
                    <li>
                        <b>Route</b>: Компонент Route используется для определения отдельных маршрутов и связанных с
                        ними
                        компонентов. Вы можете определить маршруты с помощью элемента <b>Route</b>, указывая путь URL и
                        связанный с ним компонент, который будет отображаться при совпадении маршрута.
                        <p>
                            <b>Route</b> - это компонент, который определяет отдельный маршрут внутри <b>Routes</b>.
                            Каждый <b>Route</b> имеет свой путь <b>(path)</b> и элемент <b>(element)</b>, который будет
                            отображаться, когда маршрут
                            совпадает.
                        </p>
                        <p>
                            <ShowHidden code={codeRoute}/>
                        </p>
                    </li>
                    <li>
                        <b>Link</b> и <b>NavLink</b>: Компоненты <b>Link</b> и <b>NavLink</b> используются для создания
                        ссылок для навигации между
                        маршрутами. Они работают аналогично версии 5, позволяя пользователю переходить к соответствующим
                        маршрутам без перезагрузки страницы. <b>NavLink</b> также предоставляет возможности для
                        стилизации
                        активных ссылок и текущего маршрута.
                        <p>
                            <b>Link</b> используется для создания ссылок для навигации между маршрутами в приложении.
                            <p>
                                <ShowHidden code={codeLink}/>
                            </p>
                        </p>
                        <p>
                            <b>NavLink</b> позволяет создавать активные ссылки, добавляя класс "<b>active</b>" к
                            текущему
                            активному маршруту.
                            <p>
                                <ShowHidden code={codeNAvLink}/>
                            </p>
                        </p>
                    </li>
                    <li>
                        <b>Outlet</b>: Компонент <b>Outlet</b> является контейнером, в котором будут отображаться
                        компоненты,
                        связанные с соответствующими маршрутами. Он заменяет <b>Switch</b> из версии 5 и автоматически
                        выбирает
                        и рендерит компонент, соответствующий текущему маршруту.
                        <p>
                            <b>Outlet</b> - играет ключевую роль в отображении компонентов, соответствующих текущему
                            маршруту.
                            <p>Когда ты используешь <b>Outlet</b>, он служит контейнером для отображения компонентов,
                                которые
                                соответствуют маршрутам в твоем приложении.
                            </p>
                            <p>
                                <ShowHidden code={codeOutlet}/>
                            </p>
                        </p>
                    </li>
                    <li>
                        <b>useNavigate</b>: Хук <b>useNavigate</b> используется для программной навигации между
                        маршрутами. Он
                        позволяет вам переходить к другим маршрутам из компонентов или обработчиков событий.
                        <p>
                            <b>useNavigate</b> - это хук, который позволяет перенаправлять пользователя на другие
                            маршруты в
                            React Router Dom v6.
                            <p>
                                <ShowHidden code={codeUseNavigate}/>
                            </p>
                        </p>
                    </li>
                    <li>
                        <b>useParams</b>: Хук <b>useParams</b> используется для получения параметров маршрута,
                        переданных через URL.
                        Он позволяет вам извлекать и использовать динамические данные из пути маршрута.
                        <p>
                            <b>useParams</b> - это хук, который позволяет получать параметры из маршрута в React Router
                            Dom v6.
                            <p>
                                <ShowHidden code={codeUseParams}/>
                            </p>
                        </p>
                    </li>
                    <li>
                        <b>useLocation</b>: Хук <b>useLocation</b> используется для получения информации о текущем URL.
                        Он
                        предоставляет доступ к объекту <b>location</b>, который содержит информацию о текущем пути,
                        параметрах
                        и других деталях URL.
                        <p>
                            <b>useLocation</b> - это хук, который позволяет получать информацию о текущем URL и его
                            параметрах в React Router Dom v6.
                        </p>
                        <p>
                            Когда ты используешь <b>useLocation</b>, ты можешь получить объект <b>location</b>, который
                            содержит информацию о текущем URL.
                            <p>
                                <ShowHidden code={codeUseLocation}/>
                            </p>
                        </p>
                    </li>
                </ol>
                <ul>
                    <li>
                        <NavLink to={`/router/simple_routes`}>
                            <h3>Простые маршруты и компоненты</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/router/define_route_param`}>
                            <h3>Параметры маршрутов: передача динамических данных через URL</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/router/nested_routes`}>
                            <h3>Вложенные маршруты: создание иерархии маршрутов</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/router/private_routes`}>
                            <h3>PrivateRoute: Защита маршрутов</h3>
                        </NavLink>
                    </li>
                </ul>

                <Outlet/>
            </div>
        </div>
    );
};

export default Routing;