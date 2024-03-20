import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import courier from '../../assets/images/courier.png';
import time from '../../assets/images/time.png';

import styles from './FirstInfo.module.scss';

const FirstInfo = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  return (
    <div className={styles.firstInfo} id="firstInfo">
      <div className="container">
        <div className={styles.container}>
          <h2 className={styles.title}>{t('firstInfoTitle', { ns: ['main', 'home'] })}</h2>
          <div className={styles.descriptions}>
            <div className={styles.description}>
              <img src={time} alt="time" />
              <p>{t('firstInfoDescription1', { ns: ['main', 'home'] })}</p>
            </div>
            <div className={styles.description}>
              <img src={courier} alt="courier" />
              <p>{t('firstInfoDescription2', { ns: ['main', 'home'] })}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <a href="/#bikes" className={styles.buttonRegistration} type="button">
              {t('firstInfoBtnRegistration', { ns: ['main', 'home'] })}
            </a>
            <a href="/#bikes" className={styles.buttonCheck} type="button">
              {t('firstInfoBtnCatalog', { ns: ['main', 'home'] })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstInfo;
