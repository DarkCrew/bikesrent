import React, { ReactElement } from 'react';

import bike from '../../assets/images/bikeWork.png';

import styles from './HowWorks.module.scss';

const HowWorks = (): ReactElement => {
  return (
    <div className={styles.howWorks} id="service">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>всего два шага</h3>
            <h3 className={styles.titleSecond}>
              как это
              <br /> работает
            </h3>
          </div>
          <div className={styles.imgBike}>
            <img src={bike} alt="bike" />
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <p className={styles.stepTitle}>Оформите подписку</p>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p> Загеристируйтесь</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p> Выберите велосипед</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p> Выберите дополнения</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p> Положите в корзину</p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.stepTitle}>Получите байк</p>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p> Заберите байк бесплатно в точке самовывоза</p>
              </div>
              <div className={styles.stepSubTitle}>
                <p className={styles.point}>•</p>
                <p> Отменить подписку можно будет после возврата транспорта в точку</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
