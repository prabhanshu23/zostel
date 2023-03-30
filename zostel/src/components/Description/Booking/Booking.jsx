import React, { useContext, useEffect } from 'react'
import { Card } from '../card/Card';
import styles from './booking.module.css'
import rightaeroblack from '../../../assets/images/rightaeroblack.svg'
import man from '../../../assets/images/man.svg'
import { Contact } from '../about/Contact';
import { SummaryContext } from '../../context/SummaryContext'
import deleteLogo from '../../../assets/images/deleteLogo.svg'
import Header from '../header/Header';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom'

function Booking() {
    const { summary, setSumary } = useContext(SummaryContext)

    const handleDelete = () => {
        setSumary({})
    }
    useEffect(() => {
        let units = document.querySelector(".unitsAvilable")
        let nounits = document.querySelector(".noUnits")
        if (summary.name === undefined) {
            nounits.style.display = "block"
            units.style.display = "none"
        }
        else {
            nounits.style.display = "none"
            units.style.display = "block"
        }
    }, [summary, setSumary])

    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    return (
        <div style={{ backgroundColor: "#e2e8f0", textAlign: "center" }}>

            <Header />
            <div className={styles.headingDiv}>
                <div>
                    <p className={styles.heading}>Book Your Stay</p>
                    <p className={styles.subHeading}>Select from a range of beautiful rooms</p>
                </div>
                <div className={styles.bookingRange}>
                    <p >{dateFormat("ddd")} {dateFormat("d")} {dateFormat("mmm")}, {dateFormat("yyyy")}</p>
                    <div className={styles.rightaeroDiv}>
                        <img className={styles.rightaero} src={rightaeroblack} alt="right" />
                    </div>
                    <p>{weekday[date2.getDay()]} {date2.getDate()} {months[date2.getMonth()]}, {date2.getFullYear()}</p>
                </div>
                <div>
                    <p className={styles.heading}>Summary</p>
                    <p className={styles.subHeading}>1 night starting from {dateFormat("ddd")} {dateFormat("d")} {dateFormat("mmm")}, {dateFormat("yyyy")}</p>
                </div>
            </div>
            <div className={styles.mainDiv}>
                <div>
                    <Card />
                </div>
                <div className={styles.summry} >
                    <div className='noUnits'>
                        <img className={styles.manLogo} src={man} alt="User" />
                        <p className={styles.manLogotxt}>No room selected</p>
                    </div>


                    <div className='unitsAvilable' style={{ marginLeft: "-70px", marginTop: "20px" }}>
                        <div className={styles.summaryhead}>
                            <p className={styles.summarytitle}>{summary.name} <span style={{ fontWeight: "400", fontSize: "14px" }}> x 1</span></p>
                            <img onClick={handleDelete} className={styles.deleteLogo} src={deleteLogo} alt="Delete" />
                        </div>
                        <div className={styles.priceDiv}>
                            <p> ₹ {summary.price} x 1 night</p>
                            <p className={styles.summaryprice}>₹ {summary.price}</p>
                        </div>
                        <div className={styles.tax}>
                            <p>Tax</p>
                            <p>₹ 0</p>
                        </div>
                        <div className={styles.tax}>
                            <p>Total (tax incl.)</p>
                            <p>₹ {summary.price}</p>
                        </div>
                        <div className={styles.tax}>
                            <p>Payable Now</p>
                            <p>₹ {summary.price}</p>
                        </div>

                        <Link to="/booking-info" style={{ textDecoration: "none" }} >
                            <div className={styles.bookNowbtn}>
                                <p className={styles.bookNowtxt}>BOOK NOW</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export { Booking }
