import React from 'react'
import Axios from 'axios';
import styles from './stories.module.scss';
import Loading from '../../shared/components/loading';
import { Stories as StoriesModel, Story as StoryModel } from '../../shared/models/stories.model';
import HeaderEu from '../../shared/components/navbar/navbar.en';
import FooterEn from '../../shared/components/footer/index.en';
import StoryEn from './story/index.en';

const StoriesEn = ({ history }: any): any => {
  const [data, setData] = React.useState<StoriesModel>();
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
              <h1>{data?.TitleEn}</h1>
              <p>{data?.TextEn}</p>
            </div>
          </div>
          <div className={styles.storiesContainer}>
          {blogs?.map((blog: StoryModel) => <StoryEn key={blog.id} data={blog} />)}
          </div>
        </>
      }
      <FooterEn history={history} />
    </div>
  )
}

export default StoriesEn
