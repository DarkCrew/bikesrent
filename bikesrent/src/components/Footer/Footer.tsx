/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-undef */
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import bike from '../../assets/images/bikeWork.png';
import logo from '../../assets/images/logo.png';
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
          <div className={styles.logo} onClick={scrollToTop}>
            <img src={logo} alt="alectric-go" />
          </div>
          <ul className={styles.menu}>
            <li className="li">
              <a href="/#service">О сервисе</a>
            </li>
            <li className="li">
              <a href="/#advantages">Аренда</a>
            </li>
            <li className="li">
              <a href="/#bikes">Наши велосипеды</a>
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
          <div className={styles.mapsContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81217.38946120003!2d20.969164421076982!3d52.25853357999061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932e098a0fc3d%3A0x9242c27d8dbb719f!2sJad%C5%BAwing%C3%B3w%2016%2C%2002-692%20Warszawa!5e0!3m2!1sru!2spl!4v1710627171112!5m2!1sru!2spl"
              className={styles.mapGoogle}
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className={styles.imgBike}>
          <img src={bike} alt="bike" />
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
