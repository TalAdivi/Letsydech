import React from 'react';
import { Button } from '@material-ui/core';
import styles from './donate.module.scss';

const Donate = ({ primaryText, secondaryText, history }: any) => {
    return (
        <div className={styles.container}>
            {primaryText !== '' ?
                <p className={styles.item}>{primaryText}</p>
                : null}
            {secondaryText !== '' ?
                <p className={styles.secondaryItem}>{secondaryText}</p>
                : null}
            <Button className={styles.btn} size='large' color='primary' variant="contained" onClick={() => {history.push('/donate')}}>
                תרומה
            </Button>
        </div>
    );
};

export default Donate;
