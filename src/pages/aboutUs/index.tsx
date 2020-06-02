import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SingleLinePicList from '../../shared/components/singleLinePicList';

import Navbar from '../../shared/components/navbar';
import styles from './aboutUs.module.scss';

const AboutUs = (props: any): any => {
  return (
    <div className={styles.bg}>
      <Navbar history={props.history} />
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
      <Grid className={styles.imgGrid} container spacing={2} justify='center'>
        <SingleLinePicList />


      </Grid>

    </div>
  );
};

export default AboutUs;

// height: 50vh !important;
// margin-bottom: 15px !important;
// margin-top: 10vh;
// height: 30vh;
// style={{ backgroundColor:'blue', height: '50vh', marginBottom: '15px' }}