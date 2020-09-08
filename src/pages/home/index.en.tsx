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
import HeaderEu from '../../shared/components/navbar/navbar.en';
import FooterEn from '../../shared/components/footer/index.en';
import BannerEn from './banner/index copy';
import SnippetsEn from './snippets/index.en';

const HomeEn = ({ history }: any): any => {
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
            <HeaderEu history={history} path={""}/>
            <Grid className={styles.container} container spacing={2} justify='center'>
              <div className={styles.bg} style={{ backgroundImage: `url(${data?.TitleImage.url})` }} > </div>
              <BannerEn primaryText={data?.TitleEn} secondaryText={data?.TitleTextEn} history={history} />
            </Grid>
            <Grid className={styles.content} container spacing={2} justify='center'>
              <SnippetsEn />
            </Grid>
            <Grid className={styles.content} container spacing={2} justify='center'>
              <Grid item xs={10}>
                <Cards title={data?.SupportersTitleEn!} data={data?.SupportersImages!} />
              </Grid>
            </Grid>
            <Grid id="support" className={styles.donate} container spacing={2} justify='center'>
              <Donate history={history} primaryText={data?.DonationTitleEn} secondaryText={data?.DonationTextEn} btnText={'Donate'} />
            </Grid>
          </div>

        </div>
      }
      <FooterEn history={history} />
    </div>
  );
};

export default HomeEn;
