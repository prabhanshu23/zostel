import React from 'react'
import featured1 from '../../../assets/images/Featured1.svg'
import featured2 from '../../../assets/images/Featured2.svg'
import featured3 from '../../../assets/images/Featured3.png'



const FeaturedHostels = () => {



    return (
        <>
            <div className="container-fluid  col-11 my-5  ">
                <h2>FEATURED HOSTELS</h2>

                <div className="container-fluid d-flex">
                    <img className="" style={{ width: "32%" }} src={featured1} alt="featured1" />
                    <img className="" style={{ width: "32%", marginLeft: "2%" }} src={featured2} alt="featured1" />
                    <img className="" style={{ width: "32%", marginLeft: "2%" }} src={featured3} alt="featured1" />
                </div>
            </div>
        </>
    )
}

export { FeaturedHostels }
