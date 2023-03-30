import React from 'react'
import Slider from "react-slick";
import karapuzha from '../../../assets/images/karapuzha.svg'
import thirunelly from '../../../assets/images/thirunelly.svg'
import pushkar from '../../../assets/images/pushkar.svg'
import kotkhai from '../../../assets/images/kotkhal.svg'
import rashil from '../../../assets/images/rashil.svg'
import cheog from '../../../assets/images/cheog.svg'
import { Button } from '../Button/Button';



const ZostelHomes = () => {

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
                <h2 className="text-uppercase">Zostel Homes</h2>
                <Slider {...settings}>

                    <div className="card " >
                        <img src={karapuzha} className=" w-100" alt="karapuzha" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>


                    <div className="card ms-2" >
                        <img src={thirunelly} className=" w-100" alt="thirunelly" />
                        <div className="card-body">
                            <h3>THIRUNELLY, WAYANAD</h3>
                            <p className="card-text">A traditional cottage nestled in a hilly forest area, Zostel Home Wayanad is your quaint hideaway in Kerala’s wilderness. It features a common room with indoor games, a bonfire area, a restaurant, and a garden for a social holiday. Outside, activities like wildlife safaris, treks, and visits to sightseeing spots will keep you engaged. While at the Home, you can look........</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>


                    <div className="card ms-3">
                        <img src={pushkar} className=" w-100" alt="pushkar" />
                        <div className="card-body">
                            <h3>PUSHKAR, RAJASTHAN</h3>
                            <p className="card-text">A traditional cottage nestled in a hilly forest area, Zostel Home Wayanad is your quaint hideaway in Kerala’s wilderness. It features a common room with indoor games, a bonfire area, a restaurant, and a garden for a social holiday. Outside, activities like wildlife safaris, treks, and visits to sightseeing spots will keep you engaged. While at the Home, you can look........</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>



                    <div className="card ms-4">
                        <img src={kotkhai} className=" w-100" alt="kotkhai" />
                        <div className="card-body">
                            <h3>KOTKHAI, SHIMLA</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>


                    <div className="card ms-4">
                        <img src={rashil} className=" w-100" alt="rashil" />
                        <div className="card-body">
                            <h3>RASHIL, LAHAUL</h3>
                            <p className="card-text">A traditional cottage nestled in a hilly forest area, Zostel Home Wayanad is your quaint hideaway in Kerala’s wilderness. It features a common room with indoor games, a bonfire area, a restaurant, and a garden for a social holiday. Outside, activities like wildlife safaris, treks, and visits to sightseeing spots will keep you engaged. While at the Home, you can look........</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>



                    <div className="card ms-4">
                        <img src={cheog} className=" w-100" alt="cheog" />
                        <div className="card-body">
                            <h3>CHEOG, SHIMLA</h3>
                            <p className="card-text">A view of the serene Aravalli Hills, a pool to chill in, and tantalizing Rajasthani food all commingle to make Zostel Homes Pushkar the flavorful delight it is. With tents for private rooms, utterly rural milieus made up of fields and faraway hills, and a rustic vibe, the luxury retreat lies at the outskirts of Pushkar city, away from the bustle and still..........</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>




                </Slider>
            </div>
        </>
    )
}

export { ZostelHomes }
