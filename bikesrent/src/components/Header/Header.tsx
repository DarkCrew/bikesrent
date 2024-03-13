import React, { ReactElement } from 'react';

import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';

import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="alectric-go" />
          </div>
          <ul className={styles.menu}>
            <li className="li">О сервисе</li>
            <li className="li">Каталог</li>
            <li className="li">Аренда</li>
            <li className="li">Наши байки</li>
            <li className="li">Вопрос-ответ</li>
            <li className="li">Контакты</li>
          </ul>
          <div className={styles.contacts}>
            <button type="button" className={styles.contactsBtn}>
              портал клиента
            </button>
            <img className={styles.contactsPhone} src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
