import React from 'react'
import Slider from "react-slick";
import booking from '../../../assets/images/booking.svg'
import hotel from '../../../assets/images/hostelworld.svg'
import stars from '../../../assets/images/stars.svg'




const GuestReviews = () => {
    const settings = {
        infinite: false,
        slidesToShow: 4,
        speed: 500,
        swipeToSlide: true,
        arrows: true,
    };

    return (
        <>
            <div className="container-fluid  col-11 mx-5 text-center m-5 ">
                <h2 className="d-flex mx-5">GUEST REVIEWS</h2>
                <Slider {...settings}>
                    <div className="card container shadow  w-75 mx-2" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between ">

                                <img src={booking} alt="inr" />
                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>



                    <div className="card container w-75 mx-2 " style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={hotel} alt="inr" />
                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>



                    <div className="card container w-75 mx-5 " style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={booking} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>

                    <div className="card container w-75">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={hotel} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={booking} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={hotel} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={booking} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={hotel} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={booking} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={hotel} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={booking} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                    <div className="card container w-75" style={{ width: "2rem" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <img src={hotel} alt="inr" />

                                <div className="d-flex flex-row-reverse ">

                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                            <h5>Superb hostel! Best in India!</h5>
                            <div className="d-flex card-text justify-content-between text-center">
                                <p>Staff were so friendly! The rooftop was an amazing place to hang out where I met some really cool people to explore the city with.The pool is refreshing, the vibe is chill, the food from the cafe is great and the people were fun.</p>

                            </div>
                            <div >
                                <quote className="d-flex justify-content-end fst-italic">-Anonymous, Zostel Jaipur</quote>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>

        </>
    )
}

export { GuestReviews }
