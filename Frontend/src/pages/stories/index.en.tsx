import React from 'react'
import Axios from 'axios';
import styles from './stories.module.scss';
import Loading from '../../shared/components/loading';
import { Pagination } from '@material-ui/lab'
import { Stories as StoriesModel, Story as StoryModel } from '../../shared/models/stories.model';
import HeaderEn from '../../shared/components/navbar/navbar.en';
import FooterEn from '../../shared/components/footer/index.en';
import StoryEn from './story/index.en';

const StoriesEn = ({ history }: any): any => {
  const pageAmount = 4;
  const [index, setIndex] = React.useState<number>(1);
  const [pagesCount, setPagesCount] = React.useState<number>();
  const [data, setData] = React.useState<StoriesModel>();
  const [blogs, setBlogs] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const res: { data: StoriesModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories`);
        const res2: { data: StoryModel[] } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs`);
        res2.data.sort((a, b) => { return Date.parse(b.createdAt) - Date.parse(a.createdAt) });
        res2.data.sort((a, b) => { return Date.parse(b.createdAt) - Date.parse(a.createdAt) });
        setData(res.data);
        setBlogs(spliceBlogs(res2.data));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const spliceBlogs = (blogs: any): any => {
    if (!blogs) return null;
    let arrayOfBlogs = [];

    while (blogs.length > 0) {
      arrayOfBlogs.push(blogs.splice(0, pageAmount));
    }

    setPagesCount(arrayOfBlogs.length);
    return arrayOfBlogs;
  };

  return (
    <div>
      <HeaderEn history={history} path={"stories"} />
      {loading ? <Loading loading={loading} /> :
        <>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1>{data?.TitleEn}</h1>
              <p>{data?.TextEn}</p>
            </div>
          </div>
          <div className={styles.pagination}>
            <Pagination count={pagesCount} page={index} onChange={(event, val) => setIndex(val)} />
          </div>
          <div className={styles.storiesContainer}>
            {blogs ? blogs[index - 1].map((blog: any) => <StoryEn key={blog.id} data={blog} />) : null}
          </div>
        </>
      }
      <FooterEn history={history} />
    </div>
  );
};

export default StoriesEn;
