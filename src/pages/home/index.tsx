import React from 'react';
import { Grid } from '@material-ui/core';



import './home.scss';
import Navbar from '../../shared/components/navbar';
import Banner from './banner';
import Cards from './cards';
import DonateUs from './donateUs';
import { IHomePage } from '../../shared/models/homepage.model';
import Axios from 'axios';
import Loading from '../../shared/components/loading';
import { Image } from '../../shared/models/gallery.model';
import { url } from 'inspector';


const Home = ({ history }: any): any => {
  // const cards: Array<{ icon: string, text: string }> = [{ icon: '', text: 'Test' }, { icon: '', text: 'Test' }, { icon: '', text: 'Test' }];
  // const supporters: Array<ISupporters> = [];
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<IHomePage>();


  React.useEffect((): any => {
    fetchData();

  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/home-page`);
      const res: { data: IHomePage } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/home-page`);
      setData(res.data);
      console.log('res.data --> ', res.data);
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
            <Navbar history={history} />
            <Grid className='container' container spacing={2} justify='center'>

              <div className='bg' style={{backgroundImage:`url(${data?.TitleImage.url})`}} > </div>
              <Banner primaryText={data?.Title!} secondaryText={data?.TitleText!} />
            </Grid>
            <Grid className='content' container spacing={2} justify='center'>
              <Grid item xs={10}>
                <Cards title='שותפים לדרך' data={data?.SupportersImages!} />
              </Grid>
            </Grid>
            <Grid className='donate' container spacing={2} justify='center'>
              <Grid item xs={10}>
                <DonateUs primaryText={data?.DonationTitle!} secondaryText={data?.DonationText!} />
              </Grid>
            </Grid>
          </div>

        </div>
      }
    </div>
  );
};

export default Home;
