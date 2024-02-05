import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    const navLinks = [
        {name: 'Virtual DOM', path: '/virtualDOM'},
        {name: 'Components', path: '/components'},
        {name: 'Props', path: '/props'},
        {name: 'State', path: '/state'},
        {name: 'LifeCycle', path: '/LifeCycle'},
        {name: 'Events', path: '/events'},
        {name: 'Refs', path: '/refs'},
        {name: 'Fragment', path: '/fragment'},
        {name: 'Key', path: '/key'},
        {name: 'Memo', path: '/memo'},
        {name: 'Context', path: '/context'},
        {name: 'Router', path: '/router'},
        {name: 'Form', path: '/form'},
        {name: 'STORAGEs', path: '/storages'},
        {name:'HOC', path: '/HOC'}];

    const setIsActive = ({isActive}) => isActive ? 'navLink active-navLink' : 'navLink';
    return (
        <div className='navList'>
            {navLinks.map(el =>
                    <NavLink className={setIsActive} to={`${el.path}`}>{el.name}</NavLink>
                )}
        </div>
    );
};

export default Navigation;