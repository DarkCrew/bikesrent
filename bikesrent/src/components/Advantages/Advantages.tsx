import React, { ReactElement } from 'react';

import background from '../../assets/images/bg1.png';

import styles from './Advantages.module.scss';

const Advantages = (): ReactElement => {
  return (
    <div className={styles.advantage}>
      <img className={styles.background} src={background} alt="bike" />
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>преимущества</h3>
            <h3 className={styles.titleSecond}>для курьера</h3>
            <div className={styles.step}>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>ЭКОНОМИЯ ВРЕМЕНИ И ДЕНЕГ</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>БОЛЬШАЯ БАТАРЕЯ</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>МЕНЬШЕ СТРЕССА</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>БЕЗ ЗАЛОГА</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>БОНУСЫ И АКЦИИ</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p>ОПТИМАЛЬНАЯ ЦЕНА</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
