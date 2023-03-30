import React from 'react'
import { Awards } from '../Home/Awards/Awards'
import { CoverPage } from '../Home/CoverPage/CoverPage'
import { Destination } from '../Home/Destination/Destination'
import { FeaturedHostels } from '../Home/FeaturedHostels/FeaturedHostels'
import { Footer } from '../Home/Footer/Footer'
import { GuestReviews } from '../Home/GuestReviews/GuestReviews'
import { Navbar } from '../Home/Navbar/Navbar'
import { Search } from '../Home/Search/Search'
import { WhatsNew } from '../Home/What\'s New/WhatsNew'
import { ZostelHomes } from '../Home/Zostel-Homes/ZostelHomes'
import { ZostelEscape } from '../Home/ZostelEscape/ZostelEscape'

const Layout = () => {
    return (
        <>
            <div style={{ background: "#e5e5e5" }}>

                {/* <Navbar /> */}
                <br></br>
                <CoverPage />
                < Search />
                <Destination />
                <WhatsNew />
                <ZostelHomes />
                <ZostelEscape />
                <FeaturedHostels />
                <GuestReviews />
                <WhatsNew />
                <Awards />
                <Footer />
            </div>


        </>
    )
}

export { Layout }
