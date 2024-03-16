/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';

import './Header.css';
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  const [burgerStatus, setBurgerStatus] = React.useState('menuIcon');
  const [menuStatus, setMenuStatus] = React.useState('menu');

  const changeBurgerStatus = (): void => {
    burgerStatus === 'menuIcon' ? setBurgerStatus('menuIcon active') : setBurgerStatus('menuIcon');
    menuStatus === 'menu' ? setMenuStatus('menu active') : setMenuStatus('menu');
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="alectric-go" />
          </NavLink>
          <ul className={menuStatus}>
            <li className="li" onClick={changeBurgerStatus}>
              <a href="/#service">О сервисе</a>
            </li>
            <li className="li" onClick={changeBurgerStatus}>
              <a href="/#advantages">Аренда</a>
            </li>
            <li className="li" onClick={changeBurgerStatus}>
              <a href="/#bikes">Наши велосипеды</a>
            </li>
            <li className="li" onClick={changeBurgerStatus}>
              <a href="/#question">Вопрос-ответ</a>
            </li>
            <li className="li" onClick={changeBurgerStatus}>
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
          <div className="burgerMenu" onClick={changeBurgerStatus}>
            <label className="menuBtn">
              <span className={burgerStatus} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
