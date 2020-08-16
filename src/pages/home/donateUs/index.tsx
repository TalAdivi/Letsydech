import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
// import Card from './card';

import styles from './donateUs.module.scss';



const DonateUs = ({ primaryText, secondaryText }: { primaryText: string, secondaryText: string }) => {

    return (
        <Grid container justify="center">
            {primaryText !== '' ?
                <Grid className={styles.content} container spacing={2} justify='center'>

                    <Typography color={"textPrimary"} className={styles.item}>{primaryText}</Typography>

                </Grid>
                : null}
            {secondaryText !== '' ?
                <Grid className={styles.content} container spacing={2} justify='center'>

                    <Typography color={"textSecondary"} className={styles.item}>{secondaryText}</Typography>

                </Grid>
                : null}
            <Grid className={styles.content} container spacing={2} justify='center'>


                <Button className={styles.btn} size='large' color='primary' variant="contained"> 
                    תרומה
                </Button>

            </Grid>
        </Grid>
    );
};

export default DonateUs;
