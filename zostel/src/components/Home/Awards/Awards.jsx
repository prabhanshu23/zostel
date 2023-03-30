import React from 'react'
import a1 from '../../../assets/images/a1.svg'
import a2 from '../../../assets/images/a2.svg'
import a3 from '../../../assets/images/a3.svg'
import a4 from '../../../assets/images/a4.svg'
import a5 from '../../../assets/images/a5.svg'
import a6 from '../../../assets/images/a6.svg'
import Slider from "react-slick";



const Awards = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
    };

    return (
        <>
            <div className="container-fluid  col-11 my-5 ">
                <h2 className="text-uppercase">Awards & Media</h2>

                <div className="container-fluid ">
                    <Slider {...settings}>
                        <div className="">
                            <img style={{ width: "96%", marginLeft: "3%" }} className="img-fluid" src={a1} alt="featured1" />

                        </div >
                        <div className=" ">
                            <img style={{ width: "96%", marginLeft: "3%" }} className="" src={a2} alt="featured1" />

                        </div>
                        <div className="">
                            <img style={{ width: "96%", marginLeft: "3%" }} className="" src={a3} alt="featured1" />

                        </div>
                        <div>
                            <img style={{ width: "96%", marginLeft: "3%" }} className="" src={a4} alt="featured1" />

                        </div>

                        <div>
                            <img style={{ width: "96%", marginLeft: "3%" }} className="" src={a5} alt="featured1" />

                        </div>
                        <div>
                            <img style={{ width: "96%", marginLeft: "3%" }} className="" src={a6} alt="featured1" />

                        </div>

                    </Slider>
                </div>
            </div>

        </>
    )
}

export { Awards }
