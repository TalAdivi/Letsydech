import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import styles from './contactUs.module.scss';

interface IFormInputs {
  firstName: string;
  lastName: string;
  isDeveloper: boolean;
  email: string;
}

const ContactUs = ({ history, width }: any): any => {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <Navbar history={history} />
      <div>
        <div>
          <div className={styles.bg}>
            <h1 className={styles.title}>אנחנו לצידך</h1>
            <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >השאירו פרטים וניצור קשר בהקדם</Typography>
            <div className={styles.main}>
              <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="firstName">שם</label>
                  <input className= {styles.input} name="firstName" placeholder="שם" ref={register} />
                </div>

                <div>
                  <label htmlFor="email">אימייל</label>
                  <input
                  className= {styles.input}
                    name="email"
                    placeholder="mailAddress@gmail.com"
                    type="email"
                    ref={register}
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber">מספר טלפון</label>
                  <input className= {styles.input} name="phoneNumber" placeholder="052-0000000" ref={register} />
                </div>

                <div>
                  <label htmlFor="content">תוכן הפניה</label>
                  <textarea className={[styles.content,styles.input].join(' ')} name="content" placeholder="טקסט חופשי.." ref={register} />

                  
                  {/* <input  /> */}
                </div>

  

                <input className= {styles.input} type="submit" />
              </form>
            </div>

          </div>

        </div>
      </div>
      {/* } */}
    </div>
  );
};

export default ContactUs;


