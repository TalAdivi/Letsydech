import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import ImagesContainer from './imagesContainer';

import Navbar from '../../shared/components/navbar';
import styles from './aboutUs.module.scss';

const AboutUs = ({history}: any): any => {
  return (
    <div className={styles.bg}>
      <Navbar history={history} />
      <Grid container spacing={2} justify='center'>
        <Grid item xs={10}>
          <Paper className={styles.item}>
            <Typography align='center' variant='body2'>
              לצידךְ – סיוע לנשים נפגעות התמכרויות (580564680) עמותה רשומה ללא כוונת רווח, נוסדה בשנת 2012, על ידי נשים החולקות את אותה אידיאולוגיה, מתוך הבנת צרכיהן הייחודיים של נשים מכורות ומתוך הכרה בהיעדר מענה בשלבים מסוימים של שיקום לאוכלוסייה זו.

              העמותה שמה לה למטרה קידום פעילות במספר תחומים המשרתים הן את הפרט והן את החברה בכלל:

              מתן מידע וסיוע מקצועי בסוגיות כמו גמילה, טיפול נפשי, עזרה במיצוי זכויות.

              להוות מקום בטוח, מכבד ותומך לנשים נפגעות התמכרות.

              

              לפעול מול הרשויות לאימוץ מדיניות פרוגרסיבית בכל הנוגע לטיפול בנשים המכורות.

              

              להעלות מודעות בקרב הציבור לקשר ההדוק בין אלימות ואלימות מינית בפרט להתפתחות התמכרויות בקרב נשים.


              אוכלוסיית היעד של העמותה הינה נשים נפגעות התמכרויות, מגיל 18 ומעלה.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify='center'>
        <ImagesContainer />
      </Grid>
    </div>
  );
};

export default AboutUs;