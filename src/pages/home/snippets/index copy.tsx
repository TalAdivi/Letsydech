import React from 'react';
import styles from './snippets.module.scss';
import Axios from 'axios';
import ReactMarkdown from "react-markdown";

const SnippetsEn = (): any => {
    const [data, setData] = React.useState<Array<{ Title: string, Text: string, Image: string }>>();

    React.useEffect((): any => {
        fetchData();
    }, []);

    const fetchData = async (): Promise<void> => {
        try {
            const res: { data: Array<{ Title: string, Text: string, Image: string }> } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/snippets`);
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
                    {/* {data?.map((snippet: any) =>
                        <div className={styles.card}>
                            <h3>{snippet.Title}</h3>
                            <ReactMarkdown source={snippet.Text} />
                            {!snippet.Image ? null :
                                <div className={styles.icon}><img src={snippet.Image.url} /></div>
                            }
                        </div>
                    )} */}


                    <div className={styles.card}>
                        <h3>Our center</h3>
                        <ReactMarkdown source={`The recovery space of an association next to you is a pleasant and inviting space, close to nature, the only one of its kind that is intended for women only and provides you with everything you need on the way to your recovery.`} />
                        <div className={styles.icon}><img src={'https://res.cloudinary.com/dmezfnuzk/image/upload/v1597417649/ezgif_6_bd0485b671f3_1651d97e53.jpg'} /></div>
                    </div>
                    <div className={styles.card}>
                        <h3>Residence</h3>
                        <ReactMarkdown source={`A pleasant and inviting living environment, we wanted you to know that we also have everything you need in your personal journey of recovery.`} />
                        <div className={styles.icon}><img src={'https://res.cloudinary.com/dmezfnuzk/image/upload/v1597417644/ezgif_6_0682246ee4fb_81468bb7fd.jpg'} /></div>
                    </div>
                    <div className={styles.card}>
                        <h3>We are here for you</h3>
                        <ReactMarkdown source={`Providing information and professional assistance in issues such as detoxification, mental health care, assistance in exercising rights.`} />
                        <div className={styles.icon}><img src={'https://res.cloudinary.com/dmezfnuzk/image/upload/v1597749301/16707456_1317971971616236_3908881880626820247_o_22f8a570d2.jpg'} /></div>
                    </div>

                </div>
            }
        </>
    )
}

export default SnippetsEn;
