import React from 'react';
import styles from './story.module.scss';
import { Story as StoryModel } from '../../../shared/models/stories.model';
import ReactMarkdown from "react-markdown";

const StoryEn = ({ data }: {
    data: {
        Title: string,
        Text: string,
        image: {
            url: string
        }
    }
}) => {
    console.log()
    return (
        <div className={styles.container}>
            {/* <div className={styles.date}>
                {new Date(data.createdAt).toUTCString()}
            </div> */}
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3>{data.Title}</h3>
                    <ReactMarkdown source={data.Text} />
                </div>
                {!data.image ? null : <img className={styles.icon} src={data.image.url} />}
            </div>
        </div>
    )
}

export default StoryEn;

// data ={
//     Title: '',
//     Text: '',
//     Image: {
//         url: ''
//     }
// }