import React from 'react'
import styles from './footer.module.scss';
import Axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

const Footer = ({ history }: any): any => {
    const [data, setData] = React.useState<{ Title: string, Text: string, Phone: string, Email: string, Facebook: string, Instagram: string }>();

    React.useEffect((): any => {
        fetchData();
    }, []);

    const fetchData = async (): Promise<void> => {
        try {
            const res: { data: { Title: string, Text: string, Phone: string, Email: string, Facebook: string, Instagram: string } } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/footer`);
            setData(res.data);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.pagesNav}>
                    <div className={styles.pageCard} onClick={() => history.push('/aboutus')}>
                        <p className={styles.innerTitle}>About us</p>
                        <p className={styles.innerSub}>בוא לקראו עוד עלינו</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/gallery')}>
                        <p className={styles.innerTitle}>Gallery</p>
                        <p className={styles.innerSub}>בוא לראות את התומות שלנו</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/donate')}>
                        <p className={styles.innerTitle}>Donate</p>
                        <p className={styles.innerSub}>בוא לתמוך בנו</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/contactus')}>
                        <p className={styles.innerTitle}>Contact Us</p>
                        <p className={styles.innerSub}>תיצרו איתנו קשר</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/stories')}>
                        <p className={styles.innerTitle}>Stories</p>
                        <p className={styles.innerSub}>תהיה מעודכן בכל הפעיליות והסיפורים שלנו</p>
                    </div>
                </div>
                <div>
                    <p className={styles.title}>{data?.Title}</p>
                    <p className={styles.subTitle}>{data?.Text}</p>
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

export default Footer;
