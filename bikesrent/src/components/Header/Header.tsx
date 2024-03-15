import React, { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';

import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="alectric-go" />
          </NavLink>
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
          <div className={styles.contacts}>
            <button type="button" className={styles.contactsBtn}>
              портал клиента
            </button>
            <a href="tel:+48888768666">
              <img className={styles.contactsPhone} src={phone} alt="phone" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
