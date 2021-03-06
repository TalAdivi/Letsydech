import React from 'react';
import { useForm } from "react-hook-form";
import { Box, Button } from '@material-ui/core';
import styles from './contactUs-en.module.scss';
import Axios from 'axios';
import Loading from '../../shared/components/loading';
import FooterEn from '../../shared/components/footer/index.en';
import { Info as InfoModel, Form as FormModel } from '../../shared/models/contactus.model';
import HeaderEn from '../../shared/components/navbar/navbar.en';

const ContactUsEn = ({ history }: any): any => {
  const { register, handleSubmit } = useForm<FormModel>();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<InfoModel>();

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: InfoModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/info`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const validate = (data: FormModel): boolean => {
    if (data.name !== '' && data.email !== '' && data.phoneNumber !== '' && data.freeText !== '') return true;
    return false;
  };

  const onSubmit = async (formData: FormModel) => {
    const obj = document.getElementById('errorTxt');
    if (obj)
      obj.innerHTML = '';

    const message = {
      "sender": data ? data.Email : 'letsydechwebiste@gmail.com',
      "from": {
        "name": formData.name,
        "email": formData.email,
        "phone": formData.phoneNumber
      },
      "message": {
        "subject": `${data?.MailSubject} From: ${formData.name} ${new Date().toISOString()}`,
        "text": formData.freeText
      }
    };

    if (!validate(formData)) {
      if (obj)
        obj.innerHTML = 'Missing Form Variables';
      return;
    }

    document.getElementById('submitBtn')?.setAttribute('disabled', 'true');
    try {
      await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/sendmail`, message);
      history.push('/success', { response: 'Mail send successfully!' });
    } catch (e) {
      document.getElementById('submitBtn')?.setAttribute('disabled', 'false');
      if (obj)
        obj.innerHTML = 'Error Occured. Please Try Again.';
    }
  };

  return (
    <div>
      <HeaderEn history={history} path={"contactus"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.root}>
          <div className={styles.container}>
            <p className={styles.title}>We are here for you</p>
            <Button className={styles.btn} variant="contained" onClick={() => window.open('tel:0097236125115', '_blank')} >Call now</Button>
            <p className={styles.subTitle} > Or </p>
            <p className={styles.subTitle} >Fill the form and we will contact you </p>
          </div>
          <div className={styles.marginForm}>
            <Box borderRadius={16} m={'auto'} border={1} className={styles.main}>
              <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name">name</label>
                  <input className={styles.input} name="name" placeholder="name" ref={register} />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.input}
                    name="email"
                    placeholder="mailAddress@gmail.com"
                    type="email"
                    ref={register}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">phone number</label>
                  <input className={styles.input} name="phoneNumber" pattern="05[0-9][0-9]{7}" placeholder="0501234567" ref={register} />
                </div>
                <div>
                  <label htmlFor="freeText">content</label>
                  <textarea className={[styles.content, styles.input].join(' ')} name="freeText" placeholder="Free text.." ref={register} />
                </div>
                <input id="submitBtn" className={styles.input} type="submit" value='send' />
                <p id="errorTxt" className={styles.error}></p>
              </form>
            </Box>
          </div>
        </div>
      }

      <FooterEn history={history} />
    </div>
  );
};

export default ContactUsEn;


