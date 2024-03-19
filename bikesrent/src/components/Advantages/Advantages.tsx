import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import background from '../../assets/images/bg1.png';

import styles from './Advantages.module.scss';

const Advantages = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  return (
    <div className={styles.advantage} id="advantages">
      <img className={styles.background} src={background} alt="bike" />
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>{t('advantagesTitle', { ns: ['main', 'home'] })}</h3>
            <h3 className={styles.titleSecond}>
              {t('advantagesTitleSecond1', { ns: ['main', 'home'] })}{' '}
              <span>{t('advantagesTitleSecond2', { ns: ['main', 'home'] })}</span>
            </h3>
            <div className={styles.step}>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('advantagesStep1', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('advantagesStep2', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('advantagesStep3', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('advantagesStep4', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('advantagesStep5', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('advantagesStep6', { ns: ['main', 'home'] })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
