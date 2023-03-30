import React from 'react'
import logo from '../../../assets/images/zostel-logo.svg'
import './navbar.css'
import { Link } from 'react-router-dom'


const styles = {
    show: {
        display: 'flex',
        gap: "10px",

    },
    hidden: {
        display: 'none'
    }
}



const Navbar = () => {
    const [hostels, setHostels] = React.useState(styles.hidden)
    const [zostelHomes, setZostelHomes] = React.useState(styles.hidden)
    const [joinUs, setJoinUs] = React.useState(styles.hidden)

    return (
        <>
            <div>
                <Link to="/">
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </Link>
                <div className="header">
                    <ul className="d-flex justify-content-end  mx-5 gap-5 my-3 list text-uppercase">
                        <div className="d-flex">
                            <li
                                className="menu-options"
                                onClick={() => {
                                    setHostels(hostels === styles.hidden ? styles.show : styles.hidden)
                                }}>Hostels</li>
                            <div

                                style={{ ...hostels }}
                                className="col bg-black text-white  px-4 ms-1 dropDown ">
                                <div className="">
                                    <li>Alleppey</li>
                                    <li>Aurangabad</li>
                                    <li>Bangalore</li>
                                    <li>Barot (Rajgundha)</li>
                                    <li>BIR 2.0</li>
                                    <li>Chennai</li>
                                    <li>Chitkul</li>
                                    <li>Coorg</li>
                                    <li>Dalhousie</li>
                                    <li>Delhi</li>
                                    <li>Gangtok</li>
                                    <li>Gokarna</li>
                                    <li>Jaipur</li>
                                </div>
                                <div className="">
                                    <li>Jaisalmer</li>
                                    <li>Jodhpur</li>
                                    <li>Kathmandu</li>
                                    <li>Kochi</li>
                                    <li>Kodaikanal</li>
                                    <li>Kolad</li>
                                    <li>Leh</li>
                                    <li>Manali</li>
                                    <li>Mcleodganj</li>
                                    <li>Mukteshwar</li>
                                    <li>Mumbai</li>
                                    <li>Munnar</li>
                                    <li>Mussorie</li>
                                </div>

                                <div className="">
                                    <li>Mysore</li>
                                    <li>Ooty</li>
                                    <li>Panchgani</li>
                                    <li>Pokhra</li>
                                    <li>Pushkar</li>
                                    <li>Rishikesh 2.0</li>
                                    <li>Shangarh</li>
                                    <li>Sissu</li>
                                    <li>Spiti</li>
                                    <li>Udaipur</li>
                                    <li>Vagamon</li>
                                    <li>Varkala</li>
                                    <li>Wayanad</li>
                                </div>

                            </div>
                        </div>
                        <li
                            className="menu-options"
                            onClick={() => {
                                setZostelHomes(zostelHomes === styles.hidden ? styles.show : styles.hidden);
                            }}
                        >Zostal Homes</li>
                        <div

                            style={{ ...zostelHomes }}
                            className="col bg-black text-white zostal-homes  px-4 mx-5 dropDown ">
                            <div className="">
                                <li>What are Zostel Homes</li>
                                <li>Karupuzha, Wayanad</li>
                                <li>Thirunelly, Wayanad</li>
                                <li>Pushkar, Rajasthan</li>
                                <li>Kotkhai, Shimla</li>
                                <li>Rashil, Lahaul</li>
                                <li>Madikeri, Coorg</li>
                                <li>Burwa, Manali</li>
                                <li>Theog, Shimla</li>
                                <li>Cheog, Shimla</li>
                                <li>Rakchham, Kinnaur</li>
                                <li>Mashobra, Shimla</li>
                                <li>Rumsu, Manali</li>
                                <li>Tabo, Spiti</li>
                                <li>Kotgarh, Shimla</li>
                                <li>Laida, Jibhi</li>
                                <li>Dobhi, Kullu</li>
                                <li>Shuru, Manali</li>
                                <li>Kibber, Spiti</li>
                            </div>

                        </div>

                        <li
                            className="menu-options"
                        >Travel for Tomorrow</li>
                        <li
                            className="menu-options"
                        >Longstays</li>
                        <li
                            className="menu-options"
                        >Book Now</li>

                        <li
                            className="menu-options"
                            onClick={() => {
                                setJoinUs(joinUs === styles.hidden ? styles.show : styles.hidden)
                            }}>Join us</li>
                        <div

                            style={{ ...joinUs }}
                            className="col bg-black text-white  px-4 mx-5 dropDown join-us">
                            <div>
                                <li>Zostel Volunteer</li>
                                <li>Careers</li>
                                <li>Host an event</li>
                                <li>List your experience</li>

                            </div>
                        </div>

                        <li
                            className="menu-options option"
                        >Franchise</li>
                        <li
                            className="menu-options"
                        >Blog</li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export { Navbar }




