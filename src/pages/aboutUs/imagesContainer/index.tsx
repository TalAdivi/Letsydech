import React from 'react';
import Axios from 'axios';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { IAboutUs, IAboutUsData } from '../../../shared/models/image.model';
import styles from './imagesContainer.module.scss';
import Navbar from '../../../shared/components/navbar';
import Loading from '../../../shared/components/loading';


const getCols = (screenWidth: any) => {
  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }

  if (isWidthUp('md', screenWidth)) {
    return 3;
  }
  return 2;
};

const ImagesContainer = ({ width }: any, { history }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [allData, setAllData] = React.useState<IAboutUsData>();
  React.useEffect((): any => {
    fetchImages();
  }, []);

  const cols = getCols(width);

  const fetchImages = async (): Promise<void> => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      const res: IAboutUs = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      setAllData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <div>
          {allData?.Images.length === 0 ? <h2>No Content</h2> :
            <div>
              <div>
                <h1>{allData?.Title}</h1>
              </div>
              <div className={styles.images}>
                <GridList className={styles.list} cols={cols}>
                  {allData?.Images.map((image) => (
                    <GridListTile key={image.url}>
                      <img src={image.url} alt={image.id} />
                    </GridListTile>
                  ))}
                </GridList>
  
              </div>
            </div>
          }
        </div>
      }
    </div>

  );
};

export default withWidth()(ImagesContainer);