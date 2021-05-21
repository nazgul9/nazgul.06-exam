import React from 'react';

const Navbar = () => {
    return (
        <div className="header">
        <nav className="header__menu">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="header__lyst">
                <li className="header__item">
                    <a data-aos="flip-down" data-aos-delay="500" data-aos-duration href="index.html" className="header__link">Главный</a>
                </li>
                <li className="header__item">
                    <a data-aos="flip-down" data-aos-delay="500" data-aos-duration href="index1.html" className="header__link">О нас</a>
                </li>
                <li className="header__item">
                    <a data-aos="flip-down" data-aos-delay="500" data-aos-duration href="index2.html" className="header__link">Курсы</a>
                </li>
                <li className="header__item">
                    <a data-aos="flip-down" data-aos-delay="500" data-aos-duration href="index3.html" className="header__link">Мероприятия</a>
                </li>
                <li className="header__item">
                    <a data-aos="flip-down" data-aos-delay="500" data-aos-duration href="index4.html" className="header__link">Contacts</a>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;