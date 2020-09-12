import React from 'react';
import styles from './story.module.scss';
import { Story as StoryModel } from '../../../shared/models/stories.model';
import ReactMarkdown from "react-markdown";

const StoryEn = ({ data }: { data: StoryModel }) => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                {new Date(data.createdAt).toUTCString()}
            </div>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3>{data.TitleEn}</h3>
                    <ReactMarkdown source={data.TextEn} />
                </div>
                {!data.Image ? null : <img className={styles.icon} src={data.Image.url} />}
            </div>
        </div>
    )
}

export default StoryEn;
