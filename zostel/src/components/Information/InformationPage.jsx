import React, { useState, useContext } from 'react'
import "./Information.css"
import { Footer } from "../Description/about/Footer";
import { SummaryContext } from '../context/SummaryContext';
import dateFormat from "dateformat";
import { Link, useHistory } from 'react-router-dom'

export const InformationPage = () => {
    const history = useHistory();
    const { summary, setSummary } = useContext(SummaryContext);

    const [formdata, setFormData] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        gender: "",
        email: "",
        number: "",
        address: "",
        agree: true,

    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formdata.address.length <= 10 && formdata.agree === true && formdata.email.length <= 5 && formdata.firstname.length <= 5 && formdata.lastname.length <= 5) {
            return
        } else {
            history.push("/loading")
        }
    }
    var elems = document.querySelectorAll('.check-box');
    var btn = document.querySelector('#reserve-button');
    [].forEach.call(elems, function (el) {
        el.addEventListener('change', function () {
            var checked = document.querySelectorAll('.check-box:checked');
            if (checked.length) {
                btn.style.backgroundColor = '#F1563F';
            } else {
                btn.style.backgroundColor = '#616161';
            }
        });
    });

    return (
        <>
            <div className='info-main-wrapper'>
                <div className="heading">
                    <Link to="/booking"><img style={{ marginTop: "17px" }} src="BackArrow.svg" alt="Back" /></Link>
                    <h2>Confirm your booking</h2>
                </div>

                <section className='info-top-cont'>
                    <div className="left">
                        <div className='login'>
                            <div className='login-note'>
                                <h4>Create or Login your Zostel Account</h4>
                                <p>And enjoy all the benefits of begin a part of this community.</p>
                            </div>
                            <div className='login-btn'>
                                <button>
                                    <img src="Logo.svg" alt="" />
                                    <h5>Login with Zostel</h5>
                                </button>
                            </div>
                        </div>

                        <div className="guest-info">
                            <div className='title'>
                                <h4>Guest Information</h4>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className='form-input name'>
                                    <label>Name</label>
                                    <input required id="inp" type="text" name="firstname" onChange={handleChange} placeholder='Enter the first name' />
                                    <input required id="inp" type="text" name="middlename" onChange={handleChange} placeholder='Enter the middle name' />
                                    <input required id="inp" type="text" name="lastname" onChange={handleChange} placeholder='Enter the last name' />
                                </div>
                                <div className='form-input'>
                                    <label className='form-input'>Gender</label>
                                    <select id="inp" name="gender" onChange={handleChange} required>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className='form-input'>
                                    <label>Email</label>
                                    <input id="inp" name="email" type="email" onChange={handleChange} placeholder='Select the email' required />
                                </div>
                                <div className='form-input'>
                                    <label>Number</label>
                                    <input id="inp" name="phone" type="number" onChange={handleChange} placeholder='Enter phone number' required />
                                </div>
                                <div className='form-input'>
                                    <label>Address</label>
                                    <textarea name="address" id="inp" onChange={handleChange} placeholder='Select the address' cols="30" rows="10"></textarea>
                                </div>
                                <hr />
                                <p>Not going solo? <span>Add other people details</span></p>

                            </form>

                        </div>
                    </div>
                    <div className="right">
                        <div className='title'>
                            <h4>Summary</h4>
                            <p>1 night <span>staring from </span>{dateFormat("ddd")} {dateFormat("d")} {dateFormat("mmm")}, {dateFormat("yyyy")}</p>
                        </div>
                        <div className='detail'>
                            <div className='detail-1'>
                                <img src="https://img.cdn.zo.xyz/zostel/gallery/images/jRUmE1kcQPisNDnSCPkDqg/manali-private-room-2-20201105110545.jpg?w=1280" alt="" />
                            </div>
                            <div className='detail-2'>
                                <p className='detail-name'>{summary.name}</p>
                                <div className='detail-3'>
                                    <p>₹ {summary.price} <span> x  1 night</span></p>
                                    <p>₹ {summary.price}</p>

                                </div>

                            </div>
                        </div>
                        <div className='tax'><h5>Tax</h5> <p>₹ 0</p></div>
                        <div className='total'><h5>Total (tax incl.)</h5><p>₹ {summary.price}</p></div>
                        <div className='pay'><h5>Payable Now</h5><p>₹ {summary.price}</p></div>
                        <div className='agree'>
                            <input id='agree' className='check-box' name="agree" type="checkbox" onChange={handleChange} />
                            { }
                            <p>I acknowledge and accept the terms and condition mentioned in the Property Policy & Cancellation Policy.</p>
                        </div>
                        <div className='reserve-btn'>
                            <button id='reserve-button' className='' onClick={handleSubmit}>RESERVE</button>
                        </div>
                    </div>
                </section>

                <section className='policy'>
                    <div className='left'>
                        <div className='title'>
                            <h4>COVID Policy</h4>
                        </div>
                        <div className='rules'>
                            <p>- At the time of check-in, all guests are required to present either a negative RT-PCR report not older than 72 hours, or a double-vaccination certificate.</p>
                            <p>- Well-equipped first-aid and Covid-19 observation kits are available at this hostel in case of a medical emergency.</p>
                            <p>- This hostel follows universal hygiene guidelines and a strict sanitisation protocol. Moreover, travellers and staff regularly undergo temperature checks to curtail any health lapses.</p>
                            <p>- While most staff members stay at the hostel itself, outsider staff undergo a strict thermal check and periodic testing regime.</p>
                            <p>- This hostel is equipped with a sanitisation counter where travellers can disinfect any outside materials such as parcels, bags, etc.</p>
                            <p>- For long-stay residents, a meal package is available at INR 500, covering three meals per day.</p>
                        </div>
                    </div>

                </section>

                <section className='policy'>
                    <div className='left'>
                        <div className='title'>
                            <h4>Property Policy</h4>
                        </div>
                        <div className='rules'>
                            <p>- Guests are required to pay a 100% advance at the time of booking itself.</p>
                            <p> -We strictly DO NOT allow a group of more than 4 people. In case of a group of 3 or more, you might be purposefully allotted different dorm rooms. Further, if the group behaviour is deemed unfit at the property, the Zostel Property Manager, upon subjective evaluation, retains the full right to take required action which may also result in an on-spot cancellation without refunds.</p>
                            <p> - Children below 18 years of age are not permitted entry/stay at any of our hostels, with or without guardians. We do not recommend families.</p>
                            <p> - Our standard check-in time is 12 PM and the standard check-out time is 10 AM.</p>
                            <p> - We only accept a government ID as valid identification proof. No local IDs shall be accepted at the time of check-in.</p>
                            <p> - Guests are not permitted to bring outsiders inside the hostel campus.</p>
                            <p> - We believe in self-help and do not provide luggage assistance or room services.</p>
                            <p> - Drugs and any substance abuse is strictly banned inside and around the property.</p>
                            <p> - Alcohol consumption is strictly prohibited in and around the property premises.</p>
                            <p> - Right to admission reserved.</p>


                        </div>
                    </div>

                </section>

                <section className='policy' id='last-policy'>
                    <div className='left'>
                        <div className='title'>
                            <h4>Cancellation Policy</h4>
                        </div>
                        <div className='rules'>
                            <p>- At the time of check-in, all guests are required to present either a negative RT-PCR report not older than 72 hours, or a double-vaccination certificate.</p>
                            <p> - Well-equipped first-aid and Covid-19 observation kits are available at this hostel in case of a medical emergency.</p>
                            <p> - This hostel follows universal hygiene guidelines and a strict sanitisation protocol. Moreover, travellers and staff regularly undergo temperature checks to curtail
                                any health lapses.</p>
                            <p> - While most staff members stay at the hostel itself, outsider staff undergo a strict thermal check and periodic testing regime.</p>
                            <p> - This hostel is equipped with a sanitisation counter where travellers can disinfect any outside materials such as parcels, bags, etc.</p>
                            <p> - For long-stay residents, a meal package is available at INR 500, covering three meals per day.</p>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
}
