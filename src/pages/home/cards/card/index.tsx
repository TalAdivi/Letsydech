import React from 'react';
import styles from './card.module.scss';

const SingleCard = ({ icon, text }: { icon: string, text: string }) => {
  return (
    <div className={styles.container}>
      <div className="card">
        <div className="visual">
          <img className={styles.icon} src={icon} alt={text} />
        </div>
        <p className={styles.p}>{text}</p>
      </div>
    </div>
  );
};

export default SingleCard;
