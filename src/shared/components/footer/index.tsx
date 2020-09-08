import React from 'react'
import styles from './footer.module.scss';
import Axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { IFooter } from '../../models/footer';

const Footer = ({ history }: any): any => {
    const [data, setData] = React.useState<IFooter>();

    React.useEffect((): any => {
        fetchData();
    }, []);

    const fetchData = async (): Promise<void> => {
        try {
            const res: { data: IFooter } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/footer`);
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
                    <div className={styles.pageCard} onClick={() => history.push('/aboutus')}>
                        <p className={styles.innerTitle}>אודותינו</p>
                        <p className={styles.innerSub}>קיראו עוד עלינו</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/admission')}>
                        <p className={styles.innerTitle}>אישפוזית לנשים</p>
                        <p className={styles.innerSub}>כל המדיע על תהליך האשפוז</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/stories')}>
                        <p className={styles.innerTitle}>סיפורים</p>
                        <p className={styles.innerSub}>חוויות אישיות </p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/gallery')}>
                        <p className={styles.innerTitle}>גלריית תמונות</p>
                        <p className={styles.innerSub}>צפו בגלריית התמונות שלנו</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/donate')}>
                        <p className={styles.innerTitle}>תרומה</p>
                        <p className={styles.innerSub}>בואו לתמוך בנו</p>
                    </div>
                    <div className={styles.pageCard} onClick={() => history.push('/contactus')}>
                        <p className={styles.innerTitle}>צרו קשר</p>
                        <p className={styles.innerSub}>תיצרו איתנו קשר</p>
                    </div>
                </div>
            </div>
            <div className={styles.mediaContainer}>
                <div className={styles.mediaLinks}>
                    <a href={`tel:${data?.Phone}`} target="_blank" rel="noopener noreferrer"><FaPhoneSquareAlt /></a>
                    <a href={`mailto:${data?.Email}`} target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                    <a href={data?.Instagram} target="_blank" rel="noopener noreferrer"><TiSocialInstagram /></a>
                    <a href={data?.Facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                </div>
            </div>
        </div >
    )
}

export default Footer;
