import React from 'react'
import Slider from "react-slick";
import { Button } from '../Button/Button';
import annapurna from '../../../assets/images/annapurna.svg'
import desert from '../../../assets/images/desert-safari.svg'
import everest from '../../../assets/images/everest-base-camp.svg'
import inr from '../../../assets/images/inr-logo.svg'
import star from '../../../assets/images/star.svg'
import clock from '../../../assets/images/clock.svg'
import comments from '../../../assets/images/msg.svg'





const ZostelEscape = () => {

    const settings = {
        infinite: false,
        slidesToShow: 3,
        className: "center",
        speed: 500,
        swipeToSlide: true,
        arrows: true,
    };



    return (
        <>

            <div className="container-fluid col-11 my-5">
                <h2 className="text-uppercase">Zostel Escape</h2>
                <Slider {...settings}>

                    <div className="card "  >
                        <img src={annapurna} className=" w-100" alt="annapurna" />

                        <div className="card-body" >
                            <p>ADVENTURE | KATHMANDU</p>
                            <h3>ANNAPURNA BASE CAMP TREK</h3>
                            <div className="d-flex card-text justify-content-between">
                                <div>
                                    <div className="d-flex">

                                        <img src={inr} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>14799 Onwards</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src={clock} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>10 Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <img src={star} style={{ marginBottom: "15px", marginRight: "5px" }} alt="ratings" />
                                        <p>5 Ratings</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={comments} style={{ marginBottom: "15px", marginRight: "5px" }} alt="reviews" />
                                        <p>10 Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>


                    <div className="card ms-1" >
                        <img src={desert} className=" w-100" alt="desert" />
                        <div className="card-body">
                            <p>ADVENTURE | JAISALMER</p>
                            <h3>DESERT SAFARI</h3>
                            <div className="d-flex card-text justify-content-between">
                                <div>
                                    <div className="d-flex">

                                        <img src={inr} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>2500 Onwards</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src={clock} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>1 Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <img src={star} style={{ marginBottom: "15px", marginRight: "5px" }} alt="ratings" />
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={comments} style={{ marginBottom: "15px", marginRight: "5px" }} alt="reviews" />
                                        <p>12 Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="Explore" size="col-12" />
                        </div>


                    </div>


                    <div className="card ms-2" >
                        <img src={everest} className=" w-100" alt="everest" />
                        <div className="card-body">
                            <p>ADVENTURE | KATHMANDU</p>
                            <h3>EVEREST BASE CAMP</h3>
                            <div className="d-flex card-text justify-content-between">
                                <div>
                                    <div className="d-flex">

                                        <img src={inr} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>38499 Onwards</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src={clock} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>12 Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <img src={star} style={{ marginBottom: "15px", marginRight: "5px" }} alt="ratings" />
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={comments} style={{ marginBottom: "15px", marginRight: "5px" }} alt="reviews" />
                                        <p>10 Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>


                </Slider>
            </div >



        </>
    )
}

export { ZostelEscape }
