import React, { ReactElement } from 'react';

import courier from '../../assets/images/courier.png';
import time from '../../assets/images/time.png';

import styles from './FirstInfo.module.scss';

const FirstInfo = (): ReactElement => {
  return (
    <div className={styles.firstInfo}>
      <div className="container">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Аренда
            <br /> электро
            <br /> велосипедов
          </h2>
          <div className={styles.descriptions}>
            <div className={styles.description}>
              <img src={time} alt="time" />
              <p>
                Сервис долгосрочной
                <br /> аренды электровелосипедов{' '}
              </p>
            </div>
            <div className={styles.description}>
              <img src={courier} alt="courier" />
              <p>
                Для курьеров, владельцев
                <br /> бизнеса и любителей
                <br /> покататься{' '}
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.buttonRegistration} type="button">
              Регистрация
            </button>
            <button className={styles.buttonCheck} type="button">
              смотреть каталог
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstInfo;
