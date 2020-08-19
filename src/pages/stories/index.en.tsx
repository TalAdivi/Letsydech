import React from 'react'
import Axios from 'axios';
import styles from './stories.module.scss';
import Footer from '../../shared/components/footer';
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';
import Story from './story';
import { Stories as StoriesModel, Story as StoryModel } from '../../shared/models/stories.model';
import HeaderEu from '../../shared/components/navbar/navbar.en';
import FooterEn from '../../shared/components/footer/index.en';
import StoryEn from './story/index.en';

const StoriesEn = ({ history }: any): any => {
  const [data, setData] = React.useState<any>();
  const [blogs, setBlogs] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const res: { data: StoriesModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories`);
      const res2: { data: StoryModel[] } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs`);
      res2.data.sort((a, b) => { return Date.parse(b.createdAt) - Date.parse(a.createdAt) });
      setData(res.data);
      setBlogs(res2.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <HeaderEu history={history} path={"stories"} />
      {loading ? <Loading loading={loading} /> :
        <>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1>Stories</h1>
              <p>Some stories from our place</p>
            </div>
          </div>
          <div className={styles.storiesContainer}>
            <StoryEn key={1} data={{
              Title: 'Thank you letter',
              Text: '',
              image: {
                url: 'https://res.cloudinary.com/dmezfnuzk/image/upload/v1597749324/66468656_2365683203511769_4943318207336284160_o_e62762c11c.jpg'
              }
            }} />
                        <StoryEn key={2} data={{
              Title: 'Thank you letter',
              Text: '',
              image: {
                url: 'https://res.cloudinary.com/dmezfnuzk/image/upload/v1597749322/59588523_2252148464865244_6596184788644659200_n_0adbf49338.jpg'
              }
            }} />
                        <StoryEn key={3} data={{
              Title: 'Thank you letter',
              Text: '',
              image: {
                url: 'https://res.cloudinary.com/dmezfnuzk/image/upload/v1597749324/69620471_2442229912523764_1094816502671998976_n_bd096eb775.jpg'
              }
            }} />

          </div>
        </>
      }
      <FooterEn history={history} />
    </div>
  )
}

export default StoriesEn
