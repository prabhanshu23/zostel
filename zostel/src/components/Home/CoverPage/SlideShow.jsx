import React from 'react'
import Slider from "react-slick";

import landingPic1 from '../../../assets/images/Landing_Page_Photo1.svg'
import landingPic2 from '../../../assets/images/landingpage2.svg'
import landingPic3 from '../../../assets/images/landingpage3.svg'
import landingPic4 from '../../../assets/images/landingpage4.svg'
import landingPic5 from '../../../assets/images/landingpage5.svg'




const SlideShow = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <div >
            <div className="container-fluid img-fluid w-100">
                <Slider {...settings}>
                    <div>
                        <img className=" w-100" src={landingPic1} alt="landingPic1" />
                    </div>
                    <div>
                        <img className=" w-100" src={landingPic2} alt="landingPic2" />
                    </div>
                    <div>
                        <img className=" w-100" src={landingPic3} alt="landingPic3" />
                    </div>
                    <div>
                        <img className=" w-100" src={landingPic4} alt="landingPic4" />
                    </div>
                    <div>
                        <img className=" w-100" src={landingPic5} alt="landingPic5" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export { SlideShow }
