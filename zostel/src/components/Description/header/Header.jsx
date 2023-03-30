import React from 'react'
import styles from './header.module.css'
import viewPhoto from '../../../assets/images/viewPhoto.svg'
import mountainview from '../../../assets/images/mountainview.svg'
import wifi from '../../../assets/images/wifi.svg'
import games from '../../../assets/images/games.svg'
import tea from '../../../assets/images/tea.svg'
import laundry from '../../../assets/images/laundry.svg'
import hottub from '../../../assets/images/hottub.svg'
import frame from '../../../assets/images/frame.svg'
import lamp from '../../../assets/images/lamp.svg'
import Towels from '../../../assets/images/Towels.svg'
import bathtub from '../../../assets/images/bathtub.svg'
import reception from '../../../assets/images/reception.svg'
import bed from '../../../assets/images/bed.svg'
import television from '../../../assets/images/television.svg'
import bagsuitcase from '../../../assets/images/bagsuitcase.svg'
import cafe from '../../../assets/images/cafe.svg'
import water from '../../../assets/images/water.svg'
import { Link } from 'react-router-dom'

function Header() {
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
        <div className={styles.bodyCont}>
            <div className={styles.mainContainer}>
                <div className={styles.galaryDiv}>
                    <div className={styles.mainImage}>
                        <img src="https://img.cdn.zo.xyz/zostel/gallery/images/kR55bIDpRYC-2wYqnlT6jA/manali-20201112102605.jpg?w=1280" alt="" />
                    </div>
                    <div className={styles.smImage}>
                        <div><img className={styles.firstImg} src="https://img.cdn.zo.xyz/zostel/gallery/images/2B_i6AW9RTaNmY6d-2Bcmw/manali-board-20201105110533.jpg?w=1280" alt="" /></div>
                        <div><img src="https://img.cdn.zo.xyz/zostel/gallery/images/x7JkdsaZR-Se_PPX0NBN2g/manali-exterior-full-20201105110532.jpg?w=1280" alt="" /></div>
                        <div> <img className={styles.lastImg} src="https://img.cdn.zo.xyz/zostel/gallery/images/15R001HDS2Cc_wCv97eAPQ/manali-garden-cafe-20201105110535.jpg?w=1280" alt="" /></div>
                    </div>
                </div>
                <Link to="/gallery">
                    <div className={styles.viewAllImg}>
                        <img src={viewPhoto} alt="" />
                    </div>
                </Link>

                <div className={styles.contentDiv}>
                    <div className={styles.textDiv}>
                        <p className={styles.headingTxt}>Zostel Manali</p>
                        <p>Zostel Manali is set amidst panoramic Himalayan views, apple orchards and a gorgeous garden cafe - at the unbeatable location of Old Manali.
                            Manali calls out to the adventure and mountain lovers alike.
                            <span id="dots">...</span><span id="more" style={{ display: "none" }}>With a gushing
                                Beas river to augment its beauty, Manali is situated in a valley with views of high peaks all around. Proud of offeringsomething for everybody,
                                Manali is an old favourite among backpackers and </span></p>

                        <p className={styles.showTextBtn} onClick={myFunction} id="myBtn">show more</p>
                    </div>
                    <div>
                        <p className={styles.linksHeading}>Amenities</p>
                        <div className={styles.linksDiv}>
                            <div>
                                <p><span><img src={mountainview} alt="logo" />{" "}</span>Mountain view</p>
                                <p><span><img src={wifi} alt="logo" />{" "}</span>Free Wi-Fi</p>
                                <p><span><img src={reception} alt="logo" />{" "}</span>24/7 Reception</p>
                                <p><span><img src={games} alt="logo" />{" "}</span>In-house Activites</p>
                                <p><span><img src={tea} alt="logo" />{" "}</span>Breakfast (Extra)</p>
                                <p><span><img src={bed} alt="logo" />{" "}</span>Linen Included</p>
                            </div>
                            <div>
                                <p><span><img src={hottub} alt="logo" />{" "}</span>Hot water</p>
                                <p><span><img src={television} alt="logo" />{" "}</span>Common Television</p>
                                <p><span><img src={frame} alt="logo" />{" "}</span>Common hangout area</p>
                                <p><span><img src={lamp} alt="logo" />{" "}</span>Bedside Lamps</p>
                                <p><span><img src={bagsuitcase} alt="logo" />{" "}</span>Storage Facility</p>
                            </div>
                            <div>
                                <p><span><img src={laundry} alt="logo" />{" "}</span>Laundry Services (Extra)</p>
                                <p><span><img src={water} alt="logo" />{" "}</span>Water Dispenser</p>
                                <p><span><img src={cafe} alt="logo" />{" "}</span>Cafe</p>
                                <p><span><img src={bathtub} alt="logo" />{" "}</span>Shower</p>
                                <p><span><img src={Towels} alt="logo" />{" "}</span>Towels on rent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

