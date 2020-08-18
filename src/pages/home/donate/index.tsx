import React from 'react';
import { Button } from '@material-ui/core';
import styles from './donate.module.scss';

const Donate = ({ primaryText, secondaryText, history }: any) => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {primaryText !== '' ?
                    <p className={styles.item}>{primaryText}</p>
                    : null}
                {secondaryText !== '' ?
                    <p className={styles.secondaryItem}>{secondaryText}</p>
                    : null}
                <Button className={styles.btn} size='large' color='primary' variant="contained">
                    תרומה
            </Button>
            </div>
        </div>
    );
};

export default Donate;
