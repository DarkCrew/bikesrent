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
          <a
            target="_blank"
            href="https://maps.app.goo.gl/TnzAMvx3qTjLAxw87"
            className={styles.place}
            rel="noreferrer"
          >
            Samochodowa 9, 02-652
          </a>
          <a
            target="_blank"
            href="https://maps.app.goo.gl/XphKKAMFYywjPAk3A"
            className={styles.place}
            rel="noreferrer"
          >
            Jadźwingów 15, 02-692
          </a>
          <div className={styles.messangers}>
            <img src={telegram} alt="telegram" />
          </div>
        </div>
        <div className={styles.maps}>
          <div className={styles.mapsContainer}>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1qZiXQLXGKlagDQ6lxJjguPMp1donE4o&ehbc=2E312F&noprof=1"
              className={styles.mapGoogle}
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
