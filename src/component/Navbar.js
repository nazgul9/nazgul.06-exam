import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header">
        <nav className="header__menu">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="header__lyst">
                <li className="header__item">
                    <NavLink data-aos="flip-down" data-aos-delay="500" data-aos-duration to="/" className="header__link">Главный</NavLink>
                </li>
                <li className="header__item">
                    <NavLink data-aos="flip-down" data-aos-delay="500" data-aos-duration to="about" className="header__link">О нас</NavLink>
                </li>
                <li className="header__item">
                    <NavLink data-aos="flip-down" data-aos-delay="500" data-aos-duration to="kurs" className="header__link">Курсы</NavLink>
                </li>
                <li className="header__item">
                    <NavLink data-aos="flip-down" data-aos-delay="500" data-aos-duration to="happyday" className="header__link">Мероприятия</NavLink>
                </li>
                <li className="header__item">
                    <NavLink data-aos="flip-down" data-aos-delay="500" data-aos-duration to="Contacts" className="header__link">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;