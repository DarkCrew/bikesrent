import React, { ReactElement } from 'react';

import logo from '../../assets/images/logo.png';
import maps from '../../assets/images/maps.png';
import telegram from '../../assets/images/telegram.png';

import styles from './Footer.module.scss';

const Footer = (): ReactElement => {
  return (
    <div className={styles.howWorks}>
      <div className={styles.container}>
        <div className={styles.orangeLine} />
        <div className={styles.containerHeader}>
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
        </div>
        <div className={styles.otherInfo}>
          <p className={styles.contacts}>
            +48 888 768 666
            <br /> biuro@electricgo.pl
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
          <p>Политика конфиденциальности</p>
          <p>Оферта</p>
          <p>Договор</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
