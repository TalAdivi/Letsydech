import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Grid, GridList, GridListTile, Typography, Box } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import styles from './contactUs.module.scss';
import Axios from 'axios';
import Loading from '../../shared/components/loading';
import Footer from '../../shared/components/footer';


interface IFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  freeText: string;
}

interface IInfo {
  Email: string;
  MailSubject: string;
}

const postRequestParams = {
  "sender":"letsydechWebsite@gmail.com",
  "from":{
      "name":"fadi.atamny",
      "email":"fadi.atamny@gmail.com",
      "phone":"132456"
  },
  "message":{
      "subject":"test",
      "text":"test"
  }
}

const ContactUs = ({ history, width }: any): any => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<IInfo>();

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: IInfo } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/info`);
      setData(res.data);
       postRequestParams.sender = res.data?.Email!;
      postRequestParams.message.subject = res.data?.MailSubject!;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: IFormInputs) => {
    postRequestParams.from.name = data.name;
    postRequestParams.from.email = data.email;
    postRequestParams.from.phone = data.phoneNumber;
    postRequestParams.message.text = data.freeText;
    postRequestParams.message.subject += `${data.name}` 

    console.log('postRequestParams => ', postRequestParams);

    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/sendmail`,postRequestParams)
    .then(response => {console.log('done')})
    .catch(e => {console.log(e)})
  };

  return (
    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
      <div>
        <div>
          <div className={styles.marginForm}>
            <div className={styles.container}> 

            <p className={styles.title}>אנחנו לצידך</p>
            <p  className={styles.subTitle} >השאירו פרטים וניצור קשר בהקדם</p>
            </div>

            {/* <Box> */}
            <Box borderRadius={16}  m={'auto'} border={1} className={styles.main}>
              <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name">שם</label>
                  <input className= {styles.input} name="name" placeholder="שם" ref={register} />
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
                  <label htmlFor="freeText">תוכן הפניה</label>
                  <textarea className={[styles.content,styles.input].join(' ')} name="freeText" placeholder="טקסט חופשי.." ref={register} />
                </div>
                <input className= {styles.input} type="submit" value='שילחי' />
              </form>
            </Box>

          </div>

        </div>
      </div>
}
      <Footer history={history}/>
    </div>
  );
};

export default ContactUs;


