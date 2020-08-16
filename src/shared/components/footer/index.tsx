import React from 'react'
import styles from './footer.module.scss';


const Footer = (): any => {
    return (
        <div className={styles.container}>
            <div className="section yellow">
                Min: 150px / Max: 25%
            </div>
            <div className="section purple">
                This element takes the second grid position (1fr), meaning
                it takes up the rest of the remaining space.
            </div>
        </div>
    )
}

export default Footer
