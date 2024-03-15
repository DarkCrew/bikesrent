import React, { ReactElement } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './AgreementPage.module.scss';

const AgreementPage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <div className="container">
            <p>ДОГОВОР № аренды транспортных средств ...</p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AgreementPage;
