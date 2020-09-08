import React from 'react';
import styles from './loading.module.scss';
import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({ loading }: any): any => {
    return (
        <div className={styles.container}>
            <SyncLoader
                css={"margin: 0 auto;"}
                size={20}
                color={"#00cdcd"}
                loading={loading}
            />
        </div>
    )
}

export default Loading;