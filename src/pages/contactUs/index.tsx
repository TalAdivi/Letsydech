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
      {/* {loading ? <Loading loading={loading} /> : */}
      <div>
        <div>
          <div className={styles.bg}>
            <h1>אנחנו לצידך</h1>
            <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >השאירו פרטים וניצור קשר בהקדם</Typography>
            <div className="App">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input name="firstName" placeholder="bill" ref={register} />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input name="lastName" placeholder="luo" ref={register} />
                </div>

                <div>
                  <label htmlFor="isDeveloper">Is an developer?</label>
                  <input
                    type="checkbox"
                    name="isDeveloper"
                    placeholder="luo"
                    value="yes"
                    ref={register}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    placeholder="bluebill1049@hotmail.com"
                    type="email"
                    ref={register}
                  />
                </div>
                <input type="submit" />
              </form>
            </div>

          </div>
          <Grid justify="center" className={styles.images} >
          </Grid>
        </div>
      </div>
      {/* } */}
    </div>
  );
};

export default ContactUs;


