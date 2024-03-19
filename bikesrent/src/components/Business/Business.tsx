import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import background from '../../assets/images/bg2.png';

import styles from './Business.module.scss';

const Business = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  return (
    <div className={styles.business}>
      <img className={styles.background} src={background} alt="bike" />
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>{t('businessTitle', { ns: ['main', 'home'] })}</h3>
            <h3 className={styles.titleSecond}>
              {t('businessSubTitle1', { ns: ['main', 'home'] })}{' '}
              <span>{t('businessSubTitle2', { ns: ['main', 'home'] })}</span>
              <br /> {t('businessSubTitle3', { ns: ['main', 'home'] })}
            </h3>
            <p className={styles.description}>
              {t('businessDescription', { ns: ['main', 'home'] })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
