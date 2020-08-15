import React from 'react';
import { Grid, Paper, Typography, CardMedia } from '@material-ui/core';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <Grid container spacing={2} justify='center'>
      <Grid className={[styles.item, styles.bgImg].join(' ')} item xs={12}>
        {/* <Paper  className={[styles.item, styles.bgImg].join(' ')}> */}
          <Typography color={"textPrimary"} align={"center"} className={styles.typo}>
            עזרה במיצוי זכויות. להוות מקום בטוח, מכבד ותומך לנשים נפגעות התמכרות. לפעול מול הרשויות לאימוץ מדיניות פרוגרסיבית
        
            
              <Typography className={styles.typoSecondary} color={"textSecondary"} align={"center"} >
               מתן מידע וסיוע מקצועי בסוגיות כמו גמילה, טיפול נפשי, עזרה במיצוי זכויות. להוות מקום בטוח, מכבד ותומך לנשים נפגעות התמכרות. לפעול מול הרשויות לאימוץ מדיניות פרוגרסיבית
             </Typography>
             
          </Typography>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};

export default Banner;