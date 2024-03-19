/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import bike from '../../assets/images/bikeWork.png';

import './Question.css';
import styles from './Question.module.scss';

const Question = (): ReactElement => {
  const { t } = useTranslation(['home', 'main']);

  const [currentInfo, setCurrentInfo] = React.useState(0);

  const changeDescriptionStatus = (info: number): void => {
    if (info === currentInfo) {
      setCurrentInfo(0);
    } else {
      setCurrentInfo(info);
    }
  };

  return (
    <div className={styles.question} id="question">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.orangeLine} />
          <div className={styles.title}>
            <h3 className={styles.titleFirst}>{t('questionTitle1', { ns: ['main', 'home'] })}</h3>
            <h3 className={styles.titleSecond}>{t('questionTitle1', { ns: ['main', 'home'] })}</h3>
          </div>
          <div className={styles.imgBike}>
            <img src={bike} alt="bike" />
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    {t('questionStep1', { ns: ['main', 'home'] })}
                  </p>
                  <div
                    className={currentInfo === 1 ? 'plusBtnContainer active' : 'plusBtnContainer'}
                    onClick={() => changeDescriptionStatus(1)}
                  >
                    <label className="plusBtn">
                      <span className={currentInfo === 1 ? 'plusIcon active' : 'plusIcon'} />
                    </label>
                  </div>
                </div>
                <p className={currentInfo === 1 ? styles.description : styles.descriptionOff}>
                  {t('questionStepDescription1', { ns: ['main', 'home'] })}
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    {t('questionStep2', { ns: ['main', 'home'] })}
                  </p>
                  <div
                    className={currentInfo === 2 ? 'plusBtnContainer active' : 'plusBtnContainer'}
                    onClick={() => changeDescriptionStatus(2)}
                  >
                    <label className="plusBtn">
                      <span className={currentInfo === 2 ? 'plusIcon active' : 'plusIcon'} />
                    </label>
                  </div>
                </div>
                <p className={currentInfo === 2 ? styles.description : styles.descriptionOff}>
                  {t('questionStepDescription2', { ns: ['main', 'home'] })}
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    {t('questionStep3', { ns: ['main', 'home'] })}
                  </p>
                  <div
                    className={currentInfo === 3 ? 'plusBtnContainer active' : 'plusBtnContainer'}
                    onClick={() => changeDescriptionStatus(3)}
                  >
                    <label className="plusBtn">
                      <span className={currentInfo === 3 ? 'plusIcon active' : 'plusIcon'} />
                    </label>
                  </div>
                </div>
                <p className={currentInfo === 3 ? styles.description : styles.descriptionOff}>
                  {t('questionStepDescription3', { ns: ['main', 'home'] })}
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    {t('questionStep4', { ns: ['main', 'home'] })}
                  </p>
                  <div
                    className={currentInfo === 4 ? 'plusBtnContainer active' : 'plusBtnContainer'}
                    onClick={() => changeDescriptionStatus(4)}
                  >
                    <label className="plusBtn">
                      <span className={currentInfo === 4 ? 'plusIcon active' : 'plusIcon'} />
                    </label>
                  </div>
                </div>
                <p className={currentInfo === 4 ? styles.description : styles.descriptionOff}>
                  {t('questionStepDescription4', { ns: ['main', 'home'] })}
                </p>
              </div>

              <div className={styles.stepTitle}>
                <div className={styles.mainQuestion}>
                  <p className={styles.stepQuestion}>
                    {t('questionStep5', { ns: ['main', 'home'] })}
                  </p>
                  <div
                    className={currentInfo === 5 ? 'plusBtnContainer active' : 'plusBtnContainer'}
                    onClick={() => changeDescriptionStatus(5)}
                  >
                    <label className="plusBtn">
                      <span className={currentInfo === 5 ? 'plusIcon active' : 'plusIcon'} />
                    </label>
                  </div>
                </div>
                <p className={currentInfo === 5 ? styles.description : styles.descriptionOff}>
                  {t('questionStepDescription5', { ns: ['main', 'home'] })}
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
