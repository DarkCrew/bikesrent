import React, { ReactElement } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './PoliticPage.module.scss';

const PoliticPage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <div className="container">
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее – Политика
              конфиденциальности) действует ...
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default PoliticPage;
