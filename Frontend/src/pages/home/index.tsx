import React from 'react';
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import styles from './home.module.scss';
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import Banner from './banner';
import Cards from './cards';
import Donate from './donate';
import Snippets from './snippets';
import { HomePage } from '../../shared/models/homepage.model';
import Loading from '../../shared/components/loading';

const Home = ({ history }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<HomePage>();

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: HomePage } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/home-page`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Loading loading={loading} /> :
        <div>
          <div>
            <Navbar history={history} path={""} />
            <Grid className={styles.container} container spacing={2} justify='center'>
              <div className={styles.bg} style={{ backgroundImage: `url(${data?.TitleImage.url})` }} > </div>
              <Banner primaryText={data?.Title!} secondaryText={data?.TitleText!} history={history} buttonText={['רוצים לדבר?', 'בואו לתמוך בנו']} />
            </Grid>
            <Grid className={styles.content} container spacing={2} justify='center'>
              <Snippets />
            </Grid>
            <Grid className={styles.content} container spacing={2} justify='center'>
              <Grid item xs={10}>
                <Cards title={data?.SupportersTitle!} data={data?.SupportersImages!} />
              </Grid>
            </Grid>
            <Grid id="support" className={styles.donate} container spacing={2} justify='center'>
              <Donate history={history} primaryText={data?.DonationTitle!} secondaryText={data?.DonationText!} btnText={'תרומה'} />
            </Grid>
          </div>

        </div>
      }
      <Footer history={history} />
    </div>
  );
};

export default Home;
