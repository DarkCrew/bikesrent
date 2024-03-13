import React, { ReactElement } from 'react';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>11</div>
      </div>
    </section>
  );
};

export default HomePage;
