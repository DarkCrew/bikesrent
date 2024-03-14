import React, { ReactElement } from 'react';

import Bikes from 'components/Bikes/Bikes';
import FirstInfo from 'components/FirstInfo/FirstInfo';
import HowWorks from 'components/HowWorks/HowWorks';
import Question from 'components/Question/Question';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <FirstInfo />
        <HowWorks />
        <Bikes />
        <Question />
      </div>
    </section>
  );
};

export default HomePage;
