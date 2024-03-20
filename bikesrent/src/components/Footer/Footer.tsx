/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-undef */
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import bike from '../../assets/images/bikeWork.png';
import logo from '../../assets/images/logo.png';
import telegram from '../../assets/images/telegram.png';

import styles from './Footer.module.scss';

const Footer = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

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
              <a href="/#service">{t('footerMenu1', { ns: ['main', 'home'] })}</a>
            </li>
            <li className="li">
              <a href="/#advantages">{t('footerMenu2', { ns: ['main', 'home'] })}</a>
            </li>
            <li className="li">
              <a href="/#bikes">{t('footerMenu3', { ns: ['main', 'home'] })}</a>
            </li>
            <li className="li">
              <a href="/#question">{t('footerMenu4', { ns: ['main', 'home'] })}</a>
            </li>
            <li className="li">
              <a href="/#contacts">{t('footerMenu5', { ns: ['main', 'home'] })}</a>
            </li>
          </ul>
        </div>
        <div className={styles.otherInfo}>
          <p className={styles.contacts}>
            <a href="tel:+48888768666">+48 888 768 666</a>
            <p>biuro@electricgo.pl</p>
          </p>
          <div className={styles.city}>{t('footerCity', { ns: ['main', 'home'] })}</div>
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
              src="https://www.google.com/maps/d/u/8/embed?mid=1FX8rRC4EeRN8lAGRZyamv1RpgWC2QNc&ehbc=2E312F&noprof=1"
              className={styles.mapGoogle}
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <p className={styles.dataFooter}>© 2024 ElectricGo</p>
          <p>
            <NavLink to="/politic" onClick={scrollToTop}>
              {t('footerPolitic', { ns: ['main', 'home'] })}
            </NavLink>
          </p>
          <p>
            <NavLink to="/offer" onClick={scrollToTop}>
              {t('footerOffer', { ns: ['main', 'home'] })}
            </NavLink>
          </p>
          <p>
            <NavLink to="/agreement" onClick={scrollToTop}>
              {t('footerAgreement', { ns: ['main', 'home'] })}
            </NavLink>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
