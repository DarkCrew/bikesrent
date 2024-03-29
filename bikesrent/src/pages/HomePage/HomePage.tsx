import React, { ReactElement } from 'react';

import Advantages from 'components/Advantages/Advantages';
import Bikes from 'components/Bikes/Bikes';
import Business from 'components/Business/Business';
import FirstInfo from 'components/FirstInfo/FirstInfo';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import HowWorks from 'components/HowWorks/HowWorks';
import Question from 'components/Question/Question';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <FirstInfo />
          <HowWorks />
          <Bikes />
          <Advantages />
          <Question />
          <Business />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default HomePage;
