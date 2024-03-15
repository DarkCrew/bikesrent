import React, { ReactElement } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './OferPage.module.scss';

const OfferPage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <div className="container">
            <p>Публичная оферта о заключении договора проката ...</p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default OfferPage;
