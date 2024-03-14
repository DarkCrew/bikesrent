import React, { ReactElement } from 'react';

import background from '../../assets/images/bg2.png';

import styles from './Business.module.scss';

const Business = (): ReactElement => {
  return (
    <div className={styles.business}>
      <img className={styles.background} src={background} alt="bike" />
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>БИЗНЕСУ</h3>
            <h3 className={styles.titleSecond}>
              Хотите арендовать
              <br /> для своего бизнеса?
            </h3>
            <p className={styles.description}>
              Узнайте о возможностях быстро организовать
              <br /> свой парк велосипедов и электросамокатов с <br /> сервисом ElectricGO. Для
              курьерских служб,
              <br /> кафе, интернет-магазинов и любого бизнеса.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
