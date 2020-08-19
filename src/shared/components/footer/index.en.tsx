import React from 'react'
import styles from './footer.module.scss';
import Axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

const FooterEn = ({ history }: any): any => {
    const [data, setData] = React.useState<{ Title: string, Text: string, Phone: string, Email: string, Facebook: string, Instagram: string }>();

    React.useEffect((): any => {
        fetchData();
    }, []);

    const fetchData = async (): Promise<void> => {
        try {
            const res: { data: { Title: string, Text: string, Phone: string, Email: string, Facebook: string, Instagram: string } } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/footer`);
            setData(res.data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <p className={styles.title}>{data?.Title}</p>
                    <p className={styles.subTitle}>{data?.Text}</p>
                </div>
                <div className={styles.pagesNav}>
                    <div className={styles.pageCard} onClick={() => history.push('/en/aboutus')}>
                        <p className={styles.innerTitle}>About us</p>
                        <p className={styles.innerSub}>Read more about us</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/en/gallery')}>
                        <p className={styles.innerTitle}>Gallery</p>
                        <p className={styles.innerSub}>Look at our image gallery</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/en/donate')}>
                        <p className={styles.innerTitle}>Donate</p>
                        <p className={styles.innerSub}>Support us</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/en/contactus')}>
                        <p className={styles.innerTitle}>Contact us</p>
                        <p className={styles.innerSub}>Where are here for you</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/en/stories')}>
                        <p className={styles.innerTitle}>Stories</p>
                        <p className={styles.innerSub}>Personal experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.mediaContainer}>
                <div className={styles.mediaLinks}>
                    <a href={`tel:${data?.Phone}`} target="_blank" rel="noopener noreferrer"><FaPhoneSquareAlt /></a>
                    <a href={`mailto:${data?.Email}`} target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                    <a href={data?.Facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                    <a href={data?.Instagram} target="_blank" rel="noopener noreferrer"><TiSocialInstagram /></a>
                </div>
            </div>
        </div >
    )
}

export default FooterEn;
