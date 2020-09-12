import React from 'react'
import Axios from 'axios';
import { Pagination } from '@material-ui/lab'
import styles from './stories.module.scss';
import Footer from '../../shared/components/footer';
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';
import Story from './story';
import { Stories as StoriesModel, Story as StoryModel } from '../../shared/models/stories.model';

const Stories = ({ history }: any): any => {
  const pageAmount = 4;
  const [index, setIndex] = React.useState<number>(1);
  const [pagesCount, setPagesCount] = React.useState<number>();
  const [data, setData] = React.useState<any>();
  const [blogs, setBlogs] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const res: { data: StoriesModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories`);
        const res2: { data: StoryModel[] } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs`);
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
      <Navbar history={history} path={"stories"} />
      {loading ? <Loading loading={loading} /> :
        <>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1>{data?.Title}</h1>
              <p>{data?.Text}</p>
            </div>
          </div>
          <div className={styles.pagination}>
            <Pagination count={pagesCount} page={index} onChange={(event, val) => setIndex(val)} />
          </div>
          <div className={styles.storiesContainer}>
            {blogs ? blogs[index - 1].map((blog: any) => <Story key={blog.id} data={blog} />) : null}
          </div>
        </>
      }
      <Footer history={history} />
    </div>
  );
};

export default Stories;
