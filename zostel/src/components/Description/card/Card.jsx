import styles from "./card.module.css";
import { Slider } from "../slider/Slider";
import avatar from '../../../assets/images/avatar.svg'
import mountainview from '../../../assets/images/mountainview.svg'
import loker from '../../../assets/images/locker.svg'
import bathtub from '../../../assets/images/bathtub.svg'
import laundry from '../../../assets/images/laundry.svg'
import wifi from '../../../assets/images/wifi.svg'
import frame from '../../../assets/images/frame.svg'
import games from '../../../assets/images/games.svg'
import lamp from '../../../assets/images/lamp.svg'
import hottub from '../../../assets/images/hottub.svg'
import tea from '../../../assets/images/tea.svg'
import Towels from '../../../assets/images/Towels.svg'
import downaero from '../../../assets/images/downaero.svg'
import upaero from '../../../assets/images/upaero.svg'
import leftaero from '../../../assets/images/leftaero.svg'
import dateFormat from "dateformat";
import { SummaryContext } from '../../context/SummaryContext'
import { cardData } from "./db";
import { useContext } from "react";

export const Card = () => {

    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var date2 = new Date();
    date2.setDate(date2.getDate() + 1);

    var date3 = new Date();
    date3.setDate(date3.getDate() + 2);

    var date4 = new Date();
    date4.setDate(date4.getDate() + 3);

    var date5 = new Date();
    date5.setDate(date5.getDate() + 4);

    var date6 = new Date();
    date6.setDate(date6.getDate() + 5);

    var date7 = new Date();
    date7.setDate(date7.getDate() + 6);

    const { setSumary } = useContext(SummaryContext)
    const handleSummary = ({ name, price }) => {
        setSumary({ name, price })
    }

    const showSchedule = (e) => {
        let show = document.querySelector("#sid")
        let downaero = document.getElementById("downaero")
        let upaero = document.getElementById("upaero")
        if (show.style.display === "flex") {
            upaero.style.display = "none"
            downaero.style.display = "inline"
            show.style.display = "none"
        }
        else
         {
            upaero.style.display = "inline"
            downaero.style.display = "none"
            show.style.display = "flex"
        }
    }
    return (
        <>
            {cardData.map((e) => (
                <div key={e.id} className={styles.mainContainer}>
                    <div className={styles.main} >
                        <div className={styles.sliderDiv}>
                            <Slider />
                        </div>
                        <div className={styles.cardContainer}>
                            <div className={styles.containtHeading}>
                                <p className={styles.title}>{e.name}</p>
                                <p className={styles.price}>₹ {e.price} <span className={styles.time}>/night</span></p>
                            </div>
                            <div className={styles.avatarDiv}>
                                <img src={avatar} alt="avatar" className={styles.avatarImg} />
                                <p className={styles.avatarText}>x 1</p>
                            </div>
                            <div className={styles.description}>
                                <p>A bed in 2 Bed Mixed Dorm (with Shared Bathroom)
                                    <span className={styles.descriptionIt}>
                                        [Meals purchasable at the property @INR 500/day/adult
                                        if you're booking a long-stay of 7 nights or more]
                                    </span>
                                </p>
                            </div>
                            <div className={styles.logos}>
                                <img src={mountainview} alt="mountainview" />
                                <img src={loker} alt="loker" />
                                <img src={bathtub} alt="bathtub" />
                                <img src={laundry} alt="laundry" />
                                <img src={wifi} alt="Wifi" />
                                <img src={frame} alt="frame" />
                                <img src={games} alt="games" />
                                <img src={lamp} alt="lamp" />
                                <img src={hottub} alt="hottub" />
                                <img src={tea} alt="Tea" />
                                <img src={Towels} alt="Towel" />
                            </div>
                            <div className={styles.cardBottom} >
                                <p className={styles.avilable} onClick={showSchedule}>Availability Calender
                                    <span className={styles.downaero}>
                                        <img src={downaero} alt="downaero" id="downaero" />
                                        <img src={upaero} alt="upaero" style={{ display: "none" }} id="upaero" />
                                    </span>
                                </p>
                                <button className={styles.selectBtn} onClick={() => {
                                    handleSummary(e);
                                }}>Select Unit</button>
                            </div>
                        </div>
                    </div>
                    {/* -------------------- */}
                    <div id="sid" className={styles.scheduler}>
                        <div className={styles.schedule}>
                            <span className={styles.d}>{dateFormat("ddd")}</span>
                            <span className={styles.m}>{dateFormat("mmm")} <span className={styles.dn}>{dateFormat("d")}</span></span>
                            <span className={styles.unitprice}>₹749</span>
                            <span className={styles.unittext}>8 Unit</span>
                        </div>
                        <div className={styles.schedule}>
                            <span className={styles.d}>{weekday[date2.getDay()]}</span>
                            <span className={styles.m}>{months[date2.getMonth()]} <span className={styles.dn}>{date2.getDate()}</span></span>
                            <span className={styles.unitprice}>₹749</span>
                            <span className={styles.unittext}>2 Unit</span>
                        </div>
                        <div className={styles.schedule}>
                            <span className={styles.d}>{weekday[date3.getDay()]}</span>
                            <span className={styles.m}>{months[date3.getMonth()]} <span className={styles.dn}>{date3.getDate()}</span></span>
                            <span className={styles.unitprice}>₹749</span>
                            <span className={styles.unittext}>5 Unit</span>
                        </div>
                        <div className={styles.schedule}>
                        <span className={styles.d}>{weekday[date4.getDay()]}</span>
                            <span className={styles.m}>{months[date4.getMonth()]} <span className={styles.dn}>{date4.getDate()}</span></span>
                            <span className={styles.unitprice}>₹749</span>
                            <span className={styles.unittext}>8 Unit</span>
                        </div>
                        <div className={styles.schedule}>
                        <span className={styles.d}>{weekday[date5.getDay()]}</span>
                            <span className={styles.m}>{months[date5.getMonth()]} <span className={styles.dn}>{date5.getDate()}</span></span>
                            <span className={styles.unitprice}>₹749</span>
                            <span className={styles.unittext}>7 Unit</span>
                        </div>
                        <div className={styles.schedule}>
                        <span className={styles.d}>{weekday[date6.getDay()]}</span>
                            <span className={styles.m}>{months[date6.getMonth()]} <span className={styles.dn}>{date6.getDate()}</span></span>
                            <span className={styles.unitprice}>₹749</span>
                            <span className={styles.unittext}>3 Unit</span>
                        </div>
                        <div className={styles.schedule}>
                        <span className={styles.d}>{weekday[date7.getDay()]}</span>
                            <span className={styles.m}>{months[date7.getMonth()]} <span className={styles.dn}>{date7.getDate()}</span></span>
                            <span className={styles.unitprice}>₹799</span>
                            <span className={styles.unittext}>4 Unit</span>
                        </div>
                        <div className={styles.nextaero}>
                            <img src={leftaero} alt="leftAero" />
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
};
