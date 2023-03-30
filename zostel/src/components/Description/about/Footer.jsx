import React from 'react'
import mainLogo from '../../../assets/images/mainLogo.svg'
import styles from './footer.module.css'

function Footer() {
    return (
        <>
        <div className={styles.main}>
            <div>
                <div className={styles.heading}>
                    <img className={styles.logo} src={mainLogo} alt="Logo" />
                    <p className={styles.siteName}>ZOSTAL</p>
                </div>
                <div className={styles.subHeadings}>
                    <p>Explore with Zostel - oldest & the biggest backpacker hostel brand of India. 
                        Travel India & Nepal on budget while having fun at our quirky, activity-led hostels.</p>
                </div>
            </div>

            <div className={styles.links}>
                <p className={styles.impLink}>IMPORTANT LINKS</p>
                <p className={styles.allLink}>Terms</p>
                <p  className={styles.allLink}>Privacy Policy</p>
                <p  className={styles.allLink}>Guest Policy</p>
                <p  className={styles.allLink}>COVID-19 FAQs</p>
            </div>
        </div>
        <div className={styles.copyRight}>
            <p>Zostel © 2020. All Rights Reserved</p>
        </div>
        </>
    )
}

export { Footer }
