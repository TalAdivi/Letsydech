import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
// import Card from './card';

import styles from './donateUs.module.scss';



const DonateUs = ({ primaryText, secondaryText }: { primaryText: string, secondaryText: string }) => {

    return (
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
    );
};

export default DonateUs;
