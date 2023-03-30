import React from 'react'
import './footer.css'
import fb from '../../../assets/images/fb.svg'
import ig from '../../../assets/images/ig.svg'
import twitter from '../../../assets/images/twitter.svg'
import yt from '../../../assets/images/yt.svg'



const Footer = () => {
    return (
        <>
            <div className="mainContainer">

                <div className="content">

                    <div className="firstCol">
                        <p className="footHeading">UseFul Links</p>
                        <div className='firstColumn'>

                            <div >
                                <p>Zostel Homes</p>
                                <p>#ITravel Green</p>
                                <p>Guest Policies</p>
                                <p>Privacy Policy</p>
                                <p>Careers</p>
                            </div>

                            <div>
                                <p>Destinations</p>
                                <p>Franchise</p>
                                <p>COntact Us</p>
                                <p>Cookie Policy</p>
                                <p>Passport</p>
                            </div>
                            <div >
                                <p>Community Manager</p>
                                <p>About Us</p>
                                <p>Support</p>
                                <p>T & C</p>
                                <p>COVID-19 FAQs</p>
                            </div>

                        </div>
                    </div>

                    <div className="secCol">
                        <p className="footHeading">Subscribe</p>
                        <div className='secColumn'>
                            <div className='nameInp'>
                                <input
                                    className="form-control w-50 "
                                    type="email"
                                    placeholder="First Name" />
                                <input 
                                 className="form-control w-50 "
                                   type="email"
                                    placeholder="Last Name" />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Please leave your Email" />
                            </div>
                            <div>
                                <button
                                    className="btn btn-secondary w-100"
                                >SUBMIT</button>
                            </div>
                        </div>
                    </div>

                    <div className="thirdCol">
                        <p className="footHeading">Social</p>
                        <div className="socialIcon">
                            <img src={fb} alt="Facebook" />
                            <img src={ig} alt="Instagram" />
                            <img src={twitter} alt="Twitter" />
                            <img src={yt} alt="YouTube" />
                        </div>
                        <div className='copyRight'>Zostel © 2020. All Rights Reserved</div>
                    </div>
                </div>


            </div>
        </>
    )
}

export { Footer }
