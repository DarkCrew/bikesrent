import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import bike from '../../assets/images/bikeWork.png';

import styles from './HowWorks.module.scss';

const HowWorks = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  return (
    <div className={styles.howWorks} id="service">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>{t('worksTitleFirst', { ns: ['main', 'home'] })}</h3>
            <h3 className={styles.titleSecond}>
              {t('worksTitleSecond', { ns: ['main', 'home'] })}
            </h3>
          </div>
          <div className={styles.imgBike}>
            <img src={bike} alt="bike" />
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <p className={styles.number}>01</p>
              <p className={styles.stepTitle}>{t('worksStepTitle1', { ns: ['main', 'home'] })}</p>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('worksStepOne1', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('worksStepOne2', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('worksStepOne3', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('worksStepOne4', { ns: ['main', 'home'] })}</p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.number}>02</p>
              <p className={styles.stepTitle}>{t('worksStepTitle2', { ns: ['main', 'home'] })}</p>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('worksStepTwo1', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>{t('worksStepTwo2', { ns: ['main', 'home'] })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
