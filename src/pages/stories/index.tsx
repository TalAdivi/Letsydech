import React from 'react'
import Axios from 'axios';
import styles from './stories.module.scss';
import Footer from '../../shared/components/footer';
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';
import Story from './story';
import { Stories as StoriesModel, Story as StoryModel } from '../../shared/models/stories.model';

const Stories = ({ history }: any): any => {
  const [data, setData] = React.useState<any>();
  const [blogs, setBlogs] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    fetchImages();
  }, []);

  const dup = (arr: Array<any>): void => {
    arr.forEach(element => {
      arr.push(element);
      arr.push(element);
      arr.push(element);
      arr.push(element);
      arr.push(element);
    });
  };

  const fetchImages = async (): Promise<void> => {
    try {
      setLoading(true);
      const res: { data: StoriesModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories`);
      const res2: { data: StoryModel[] } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs`);
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
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1>{data?.Title}</h1>
              <p>{data?.Text}</p>
            </div>
          </div>
          <div className={styles.storiesContainer}>
            {blogs?.map((blog: any) => <Story data={blog} />)}
          </div>
        </>
      }
      <Footer history={history}/>
    </div>
  )
}

export default Stories
