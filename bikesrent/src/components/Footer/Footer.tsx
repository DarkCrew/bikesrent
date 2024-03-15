/* eslint-disable react/jsx-no-undef */
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import maps from '../../assets/images/maps.png';
import telegram from '../../assets/images/telegram.png';

import styles from './Footer.module.scss';

const Footer = (): ReactElement => {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.howWorks} id="contacts">
      <div className={styles.container}>
        <div className={styles.orangeLine} />
        <div className={styles.containerHeader}>
          <div className={styles.logo}>
            <img src={logo} alt="alectric-go" />
          </div>
          <ul className={styles.menu}>
            <li className="li">
              <a href="/#service">О сервисе</a>
            </li>
            <li className="li">
              <a>Каталог</a>
            </li>
            <li className="li">
              <a>Аренда</a>
            </li>
            <li className="li">
              <a href="/#bikes">Наши байки</a>
            </li>
            <li className="li">
              <a href="/#question">Вопрос-ответ</a>
            </li>
            <li className="li">
              <a href="/#contacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className={styles.otherInfo}>
          <p className={styles.contacts}>
            <a href="tel:+48888768666">+48 888 768 666</a>
            <p>biuro@electricgo.pl</p>
          </p>
          <div className={styles.city}>Warszawa</div>
          <div className={styles.messangers}>
            <img src={telegram} alt="telegram" />
          </div>
        </div>
        <div className={styles.maps}>
          <img src={maps} alt="maps" />
        </div>
        <footer className={styles.footer}>
          <p>© 2024 ElectricGo</p>
          <p>
            <NavLink to="/politic" onClick={scrollToTop}>
              Политика конфиденциальности
            </NavLink>
          </p>
          <p>
            <NavLink to="/offer" onClick={scrollToTop}>
              Оферта
            </NavLink>
          </p>
          <p>
            <NavLink to="/agreement" onClick={scrollToTop}>
              Договор
            </NavLink>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
