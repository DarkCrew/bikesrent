/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import bike from '../../assets/images/bikeWork.png';
import plus from '../../assets/images/plus.png';

import styles from './Question.module.scss';

const Question = (): ReactElement => {
  const [currentInfo, serCurrentInfo] = React.useState(0);

  return (
    <div className={styles.question} id="question">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>подробности</h3>
            <h3 className={styles.titleSecond}>
              вопрос —
              <br /> ответ
            </h3>
          </div>
          <div className={styles.imgBike}>
            <img src={bike} alt="bike" />
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>Как работает подписка</p>
                  <img
                    onClick={() => serCurrentInfo(1)}
                    className={styles.plus}
                    src={plus}
                    alt="plus"
                  />
                </div>
                <p className={currentInfo === 1 ? styles.description : styles.descriptionOff}>
                  Вы можете оформить подписку прямо у нас на сайте. Просто перейдите по ссылке и
                  следуйте дальнейшим инструкциям (будет ссылка). Вы можете оформить подписку прямо
                  у нас на сайте. Просто перейдите по ссылке и следуйте дальнейшим инструкциям
                  (будет ссылка).
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    Как мне оформить
                    <br /> подписку?
                  </p>
                  <img
                    onClick={() => serCurrentInfo(2)}
                    className={styles.plus}
                    src={plus}
                    alt="plus"
                  />
                </div>
                <p className={currentInfo === 2 ? styles.description : styles.descriptionOff}>
                  Вы можете оформить подписку прямо у нас на сайте. Просто перейдите по ссылке и
                  следуйте дальнейшим инструкциям (будет ссылка).
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    Кто может оформить
                    <br /> подписку?
                  </p>
                  <img
                    onClick={() => serCurrentInfo(3)}
                    className={styles.plus}
                    src={plus}
                    alt="plus"
                  />
                </div>
                <p className={currentInfo === 3 ? styles.description : styles.descriptionOff}>
                  Вы можете оформить подписку прямо у нас на сайте. Просто перейдите по ссылке и
                  следуйте дальнейшим инструкциям (будет ссылка).
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>Что входит в подписку?</p>
                  <img
                    onClick={() => serCurrentInfo(4)}
                    className={styles.plus}
                    src={plus}
                    alt="plus"
                  />
                </div>
                <p className={currentInfo === 4 ? styles.description : styles.descriptionOff}>
                  Вы можете оформить подписку прямо у нас на сайте. Просто перейдите по ссылке и
                  следуйте дальнейшим инструкциям (будет ссылка).
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    Какие документы
                    <br /> необходимы для
                    <br /> оформления?
                  </p>
                  <img
                    onClick={() => serCurrentInfo(5)}
                    className={styles.plus}
                    src={plus}
                    alt="plus"
                  />
                </div>
                <p className={currentInfo === 5 ? styles.description : styles.descriptionOff}>
                  Вы можете оформить подписку прямо у нас на сайте. Просто перейдите по ссылке и
                  следуйте дальнейшим инструкциям (будет ссылка).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
