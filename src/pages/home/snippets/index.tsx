import React from 'react';
import styles from './snippets.module.scss';
import Axios from 'axios';

const Snippets = (): any => {
    const [data, setData] = React.useState<Array<{Title: string, Text: string, Image: string}>>();

    React.useEffect((): any => {
        fetchData();
    }, []);

    const fetchData = async (): Promise<void> => {
        try {
            const res: { data: Array<{Title: string, Text: string, Image: string}> } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/snippets`);
            setData(res.data);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {!data ? null :
                <div className={styles.container}>
                    {data?.map((snippet: any) =>
                        <div className={styles.card}>
                            <h3>{snippet.Title}</h3>
                            <p >{snippet.Text}</p>
                            {!snippet.Image ? null :
                                <div className={styles.icon}><img src={snippet.Image} /></div>
                            }
                        </div>
                    )}
                </div>
            }
        </>
    )
}

export default Snippets;
