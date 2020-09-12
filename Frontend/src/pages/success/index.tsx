import React from 'react';
import styles from './success.module.scss';
import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';

const Sucess = ({ history, location }: any) => {
  React.useEffect(() => {
    setTimeout(() => history.push('/'), 5000);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  console.log()
  return (
    <div>
      <Navbar history={history} path={"sucess"} />
      <div className={styles.container}>
        <h1>{location.state ? location.state.response : 'Success!!!'}</h1>
      </div>
      <Footer history={history} />
    </div>
  );
};

export default Sucess;
