import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import bike from '../../assets/images/bike.png';

import styles from './Bikes.module.scss';

const Bikes = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  return (
    <div className={styles.bikes} id="bikes">
      <div className="container">
        <p className={styles.title}>{t('bikesTitle', { ns: ['main', 'home'] })}</p>
        <div className={styles.bikeCards}>
          <div className={styles.bikeCard}>
            <div className={styles.orangePart}>
              <img src={bike} alt="bike" />
            </div>
            <div className={styles.blackPart}>
              <p className={styles.cardTitle}>{t('bikesCardTitle', { ns: ['main', 'home'] })}</p>
              <p className={styles.cardSubTitle}>
                {t('bikesCardSubtitle', { ns: ['main', 'home'] })}
              </p>
              <div className={styles.cardInfo}>
                <p>{t('bikesCardInfo1', { ns: ['main', 'home'] })}</p>
                <p>{t('bikesCardInfo2', { ns: ['main', 'home'] })}</p>
                <p>{t('bikesCardInfo3', { ns: ['main', 'home'] })}</p>
                <p>{t('bikesCardInfo4', { ns: ['main', 'home'] })}</p>
                <p>{t('bikesCardInfo5', { ns: ['main', 'home'] })}</p>
              </div>
              <div className={styles.btnContainer}>
                <a
                  href="https://electricgo.chargebee.com/pages/v3/4FPCbYNPw8ceIw48J1G3tu5gwqB26Ejo/check_user"
                  target="_blank"
                  className={styles.btnReservation}
                  type="button"
                  rel="noreferrer"
                >
                  {t('bikesBtnReservation', { ns: ['main', 'home'] })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
