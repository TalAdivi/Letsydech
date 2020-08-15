import React from 'react';
import { Grid } from '@material-ui/core';

import './home.scss';
import Navbar from '../../shared/components/navbar';
import Banner from './banner';
import Cards from './cards';

const Home = ({history}: any): any => {
  const cards: Array<{ icon: string, text: string }> = [{ icon: '', text: 'Test' }, { icon: '', text: 'Test' }, { icon: '', text: 'Test' }];
  const supporters: Array<{ icon: string, text: string }> = [{ icon: '', text: 'Test' }, { icon: '', text: 'Test' }];
  return (
    <div>
      <Navbar history={history} />
      <Grid className='bg' container spacing={2} justify='center'>
        <Grid item xs={10}>
          <Banner />
        </Grid>
      </Grid>
      {/* <Grid className='content' container spacing={2} justify='center'>
        <Grid item xs={10}>
          <Cards title='' data={cards} />
        </Grid>
      </Grid> */}
      <Grid className='content' container spacing={2} justify='center'>
        <Grid item xs={10}>
          <Cards title='Supporters' data={supporters} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
