import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import bike from '../../assets/images/bike.png';
import bike2 from '../../assets/images/bike2.png';

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
              <img src={bike2} alt="bike" />
            </div>
            <div className={styles.blackPart}>
              <p className={styles.cardTitle}>{t('bikesCardTitle1', { ns: ['main', 'home'] })}</p>
              <p className={styles.cardSubTitle1}>
                {t('bikesCardSubtitle3', { ns: ['main', 'home'] })}
              </p>
              <div className={styles.cardInfo}>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo1_2', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo2_1', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo3', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo4', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo5-1_2', { ns: ['main', 'home'] })}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a
                  href="https://electricgo.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=rower2-PLN-Weekly&utm_source=cb-app-copy"
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

          <div className={styles.bikeCard}>
            <div className={styles.orangePart}>
              <img src={bike2} alt="bike" />
            </div>
            <div className={styles.blackPart}>
              <p className={styles.cardTitle}>{t('bikesCardTitle1', { ns: ['main', 'home'] })}</p>
              <p className={styles.cardSubTitle2}>
                {t('bikesCardSubtitle4', { ns: ['main', 'home'] })}
              </p>
              <div className={styles.cardInfo}>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo1_2', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo2_1', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo3', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo4', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo5-1_2', { ns: ['main', 'home'] })}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a
                  href="https://electricgo.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=Rower_Month2-PLN-Monthly&utm_source=cb-app-copy"
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

          <div className={styles.bikeCard}>
            <div className={styles.orangePart}>
              <img src={bike} alt="bike" />
            </div>
            <div className={styles.blackPart}>
              <p className={styles.cardTitle}>{t('bikesCardTitle', { ns: ['main', 'home'] })}</p>
              <p className={styles.cardSubTitle1}>
                {t('bikesCardSubtitle1', { ns: ['main', 'home'] })}
              </p>
              <div className={styles.cardInfo}>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo1', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo2', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo3', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo4', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo5-1', { ns: ['main', 'home'] })}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a
                  href="https://electricgo.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=rower1-PLN-Weekly&subscription_items[quantity][0]=1&layout=in_app"
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

          <div className={styles.bikeCard}>
            <div className={styles.orangePart}>
              <img src={bike} alt="bike" />
            </div>
            <div className={styles.blackPart}>
              <p className={styles.cardTitle}>{t('bikesCardTitle', { ns: ['main', 'home'] })}</p>
              <p className={styles.cardSubTitle2}>
                {t('bikesCardSubtitle2', { ns: ['main', 'home'] })}
              </p>
              <div className={styles.cardInfo}>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo1', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo2', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo3', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo4', { ns: ['main', 'home'] })}
                </p>
                <p className={styles.cardInfoItem}>
                  {t('bikesCardInfo5-2', { ns: ['main', 'home'] })}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a
                  href="https://electricgo.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=Rower-Month-PLN-Monthly&utm_source=cb-app-copy"
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
