import React from 'react'
import { Navbar } from '../Home/Navbar/Navbar'
import styles from './cardDetails.module.css'
function CardDetail() {
    const myFunction = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "show more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "show less";
            moreText.style.display = "inline";
        }
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainImg}>
             <div className={styles.nav}> <Navbar/></div>
             <p className={styles.headTxt}>Banglore</p>
            </div>

            <div className={styles.content}>
                <p className={styles.welcome}>Welcome to</p>
                <p className={styles.cityName}>Banglore</p>
                <p className={styles.about}>About</p>
                <p className={styles.showtxt}>Zostel Manali is set amidst panoramic Himalayan views, apple orchards and a gorgeous garden cafe - at the unbeatable location of Old Manali.
                            Manali calls out to the adventure and mountain lovers alike.
                            <span id="dots">...</span><span id="more" style={{ display: "none" }}>With a gushing
                                Beas river to augment its beauty, Manali is situated in a valley with views of high peaks all around. Proud of offeringsomething for everybody,
                                Manali is an old favourite among backpackers and </span></p>

                        <p className={styles.showTextBtn} onClick={myFunction} id="myBtn">show more</p>
            </div>
        </div>
    )
}

export default CardDetail

