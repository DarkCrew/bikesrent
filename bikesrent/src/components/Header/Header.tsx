/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import i18n from 'i18n';

import languageImage from '../../assets/images/language.png';
import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';
import telegram from '../../assets/images/telegram.png';

import './Header.css';
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  const [burgerStatus, setBurgerStatus] = React.useState('menuIcon');
  const [menuStatus, setMenuStatus] = React.useState('menu');
  const [blackBack, setBlackBack] = React.useState('blackBack');
  const [orangeBack, setOrangeBack] = React.useState('mobileMenu');
  const [logoMobile, setLogoMobile] = React.useState('logoMobile');
  const [languageBtn, setLanguageBtn] = React.useState('box');

  const scrollTop = (): void => {
    window.scrollTo(0, 0);
  };

  const [scroll, setScroll] = React.useState(0);
  const handleScroll = (): void => {
    setScroll(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeBurgerStatus = (): void => {
    burgerStatus === 'menuIcon' ? setBurgerStatus('menuIcon active') : setBurgerStatus('menuIcon');
    menuStatus === 'menu' ? setMenuStatus('menu active') : setMenuStatus('menu');
    blackBack === 'blackBack' ? setBlackBack('blackBack active') : setBlackBack('blackBack');
    orangeBack === 'mobileMenu' ? setOrangeBack('mobileMenu active') : setOrangeBack('mobileMenu');
    logoMobile === 'logoMobile' ? setLogoMobile('logoMobile active') : setLogoMobile('logoMobile');
    languageBtn === 'box' ? setLanguageBtn('box active') : setLanguageBtn('box');
  };

  const clickMobileLogo = (): void => {
    scrollTop();
    changeBurgerStatus();
  };

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); // change the language
  };

  return (
    <div className={+scroll > 100 ? 'header active' : 'header'}>
      <div className="container">
        <div className={styles.container}>
          <NavLink to="/" className={styles.logo} onClick={scrollTop}>
            <img src={logo} alt="alectric-go" />
          </NavLink>
          <div className={orangeBack}>
            <div className={logoMobile} onClick={clickMobileLogo}>
              <img className="logoMobileImg" src={logo} alt="alectric-go" />
            </div>
            <ul className={menuStatus}>
              <li className={styles.li} onClick={changeBurgerStatus}>
                <span className={styles.point}>•</span>
                <a className={styles.linksMenu} href="/#service">
                  {t('headerService', { ns: ['main', 'home'] })}
                </a>
              </li>
              <li className={styles.li} onClick={changeBurgerStatus}>
                <span className={styles.point}>•</span>
                <a className={styles.linksMenu} href="/#advantages">
                  {t('headerRent', { ns: ['main', 'home'] })}
                </a>
              </li>
              <li className={styles.li} onClick={changeBurgerStatus}>
                <span className={styles.point}>•</span>
                <a className={styles.linksMenu} href="/#bikes">
                  {t('headerBikes', { ns: ['main', 'home'] })}
                </a>
              </li>
              <li className={styles.li} onClick={changeBurgerStatus}>
                <span className={styles.point}>•</span>
                <a className={styles.linksMenu} href="/#question">
                  {t('headerQuestion', { ns: ['main', 'home'] })}
                </a>
              </li>
              <li className={styles.li} onClick={changeBurgerStatus}>
                <span className={styles.point}>•</span>
                <a className={styles.linksMenu} href="/#contacts">
                  {t('headerContact', { ns: ['main', 'home'] })}
                </a>
              </li>
            </ul>
            <div className={styles.otherInfoHeader}>
              <p className={styles.contactsHeader}>
                <a href="tel:+48888768666">+48 888 768 666</a>
                <p>biuro@electricgo.pl</p>
              </p>
              <div className={styles.cityHeader}>{t('headerCity', { ns: ['main', 'home'] })}</div>
              <div className={styles.messangersHeader}>
                <img src={telegram} alt="telegram" />
              </div>
            </div>
          </div>
          <div className={blackBack} />
          <div className={styles.contacts}>
            <button type="button" className={styles.contactsBtn}>
              {t('headerPortal', { ns: ['main', 'home'] })}
            </button>
            <a href="tel:+48888768666">
              <img className={styles.contactsPhone} src={phone} alt="phone" />
            </a>
          </div>
          <div className={languageBtn}>
            <img className="boxImg" src={languageImage} alt="language" />
            <select onChange={onClickLanguageChange}>
              <option value="en">En</option>
              <option value="ru">Ru</option>
              <option value="pl">Pl</option>
            </select>
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
