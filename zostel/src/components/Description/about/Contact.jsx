import React from 'react'
import styles from './contact.module.css'
import whatsapp from '../../../assets/images/whatsapp.svg'
import locate from '../../../assets/images/locate.svg'
import daero from '../../../assets/images/daero.svg'
import { MyComponent } from './Map'
import { Footer } from './Footer'

function Contact() {
    return (
        <>
        <div className={styles.bodyDiv}>
            <div className={styles.main}>
                <div>
                    <p className={styles.heading}>Locate Us</p>
                    <p className={styles.address}>Address</p>
                    <p className={styles.location}> Manu Temple Road, Old Manali, Manali, Himachal Pradesh -</p>
                    <p className={styles.location}>175131</p>
                    <p className={styles.contact}> Contact: <span className={styles.cNo}>02248962265</span></p>

                    <p className={styles.whDiv}>
                        <img className={styles.whIcon} src={whatsapp} alt="Whatsapp" />
                        <span className={styles.whatsapp}>Whatsapp</span>
                    </p>
                    <p className={styles.direction}>Direction
                        <span className={styles.daero}>
                            <img src={daero} alt="" />
                        </span>
                    </p>
                    <p className={styles.locateDiv}>
                        <img className={styles.locateIcon} src={locate} alt="Locate" />
                        <span className={styles.locate}>Location</span>
                    </p>
                </div>
                <div>
                    <MyComponent />
                </div>
            </div>
            <div className={styles.covidDiv}>
                <p className={styles.covidPolicy}>COVID Policy</p>
                <div className={styles.cPolicy}>
                    <p className={styles.cPolicyP}>- At the time of check-in, all guests are required to present either a negative RT-PCR report not older than 72 hours, or a double-vaccination certificate. </p>
                    <p className={styles.cPolicyP}>- Well-equipped first-aid and Covid-19 observation kits are available at this hostel in case of a medical emergency.</p>
                    <p className={styles.cPolicyP}>- This hostel follows universal hygiene guidelines and a strict sanitisation protocol. Moreover, travellers and staff regularly undergo temperature checks to curtail
                        any health lapses.</p>
                    <p className={styles.cPolicyP}>- While most staff members stay at the hostel itself, outsider staff undergo a strict thermal check and periodic testing regime.</p>
                    <p className={styles.cPolicyP}>- This hostel is equipped with a sanitisation counter where travellers can disinfect any outside materials such as parcels, bags, etc.</p>
                    <p className={styles.cPolicyP}>- For long - stay residents, a meal package is available at INR 500, covering three meals per day.</p>
                </div>
            </div>

            <div className={styles.property}>
                <p className={styles.propertypolicy}>Property Policy</p>
                <div className={styles.pPolicy}>
                    <p>- Guests are required to pay a 100% advance at the time of booking itself.</p>
                    <p>-We strictly DO NOT allow a group of more than 4 people. In case of a group of 3 or more, you might be purposefully allotted different dorm rooms. Further, if the group behaviour is deemed unfit at the property, the Zostel Property Manager, upon subjective evaluation, retains the full right to take required action which may also result in an on-spot cancellation without refunds.</p>
                    <p>- Children below 18 years of age are not permitted entry/stay at any of our hostels, with or without guardians. We do not recommend families.</p>
                    <p>- Our standard check-in time is 12 PM and the standard check-out time is 10 AM</p>
                    <p>- We only accept a government ID as valid identification proof. No local IDs shall be accepted at the time of check-in.</p>
                    <p>- Guests are not permitted to bring outsiders inside the hostel campus.</p>
                    <p>- We believe in self-help and do not provide luggage assistance or room services.</p>
                    <p>- Drugs and any substance abuse is strictly banned inside and around the property.</p>
                    <p>- Alcohol consumption is strictly prohibited in and around the property premises.</p>
                    <p>- Right to admission reserved.</p>
                </div>
            </div>

            <div className={styles.cancel}>
                <p className={styles.cancelPolicy}>Cancellation Policy</p>
                <div className={styles.pCancel}>
                    <p>- All booking requests will be confirmed at a 100% advance payment at the time of booking.</p>
                    <p>- We will be providing full credits on any cancellations received more than 7 days prior to the arrival date. You will be able to avail the credited amount for any future booking at any of our properties.</p>
                    <p>- If informed within 7 days of the standard check-in time (12 pm), the amount shall be adjusted against the cancellation fee.</p>
                    <p>- In case the property is not able to host you due to any local or subjective circumstances, we will provide you with a credit of the same amount. You will be able to avail the credited amount for any future booking at any of our properties.</p>
                </div>
            </div>

            <div className={styles.reach}>
                <p>For any other queries, please reach out to us at reservations@zostel.com.</p>
            </div>
            <Footer/>
            </div>
        </>
    )
}

export { Contact }

















