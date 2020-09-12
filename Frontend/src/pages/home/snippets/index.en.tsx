import React from 'react';
import styles from './snippets.module.scss';
import Axios from 'axios';
import ReactMarkdown from "react-markdown";
import { Snippets as SnippetsModel } from '../../../shared/models/snippets';

const SnippetsEn = (): any => {
  const [data, setData] = React.useState<Array<SnippetsModel>>();

  React.useEffect((): any => {
    const fetchData = async (): Promise<void> => {
      try {
        const res: { data: Array<SnippetsModel> } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/snippets`);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!data ? null :
        <div className={styles.container}>
          {data?.map((snippet: SnippetsModel) =>
            <div key={snippet.id} className={styles.card}>
              <h3>{snippet.TitleEn}</h3>
              <ReactMarkdown source={snippet.TextEn} />
              {!snippet.Image ? null :
                <div className={styles.icon}><img src={snippet.Image.url} alt={snippet.Image.caption} /></div>
              }
            </div>
          )}
        </div>
      }
    </>
  );
};

export default SnippetsEn;
