import React, { ReactElement } from 'react';

import FirstInfo from 'components/FirstInfo/FirstInfo';
import HowWorks from 'components/HowWorks/HowWorks';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <FirstInfo />
        <HowWorks />
      </div>
    </section>
  );
};

export default HomePage;
