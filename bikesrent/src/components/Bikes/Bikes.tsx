import React, { ReactElement } from 'react';

import bike from '../../assets/images/bike.png';

import styles from './Bikes.module.scss';

const Bikes = (): ReactElement => {
  return (
    <div className={styles.bikes}>
      <div className="container">
        <p className={styles.title}>Велосипеды</p>
        <div className={styles.bikeCards}>
          <div className={styles.bikeCard}>
            <div className={styles.orangePart}>
              <img src={bike} alt="bike" />
            </div>
            <div className={styles.blackPart}>
              <p className={styles.cardTitle}>Электровелосипед</p>
              <p className={styles.cardSubTitle}>от 155zł в неделю</p>
              <div className={styles.cardInfo}>
                <p>Скорость до 25км/ч</p>
                <p>Запас хода на одной батарее ~50км</p>
                <p>Аренда без залога</p>
                <p>Бесплатное обслуживание/ремонт</p>
                <p>В комплекте: зарядное устройство, держатель для телефона и замок</p>
              </div>
              <div className={styles.btnContainer}>
                <button className={styles.btnReservation} type="button">
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
