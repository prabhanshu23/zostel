import React from "react";
import Slider from "react-slick";
import './slidebar.css'

//Images
import alleppey from '../../../assets/images/Alleppey.svg'
import aurangabad from '../../../assets/images/aurangabad.svg'
import bangalore from '../../../assets/images/Bangalore.svg'
import barot from '../../../assets/images/barot.svg'
import manali from '../../../assets/images/Manali.svg'
import mashobra from '../../../assets/images/Mashobra.svg'
import mcleod from '../../../assets/images/mcledo.svg'
import mumbai from '../../../assets/images/mumbai.svg'
import bir from '../../../assets/images/bir.svg'
import kinnaur from '../../../assets/images/kinnaur.svg'
import assam from '../../../assets/images/Assam.svg'
import coorg from '../../../assets/images/coorg.svg'
import mysore from '../../../assets/images/mysore.svg'
import salmer from '../../../assets/images/jaisalmer.svg'
import munroe from '../../../assets/images/munroe.svg'
import chennai from '../../../assets/images/chennai.svg'




const settings = {
    infinite: false,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
};

const Slidebar = () => {



    return (
        <div>

            <div className="text-uppercase">
                <Slider {...settings}>
                    <div>
                        <img
                            className="img-fluid w-75 shadow "
                            src={alleppey}
                            alt="alleppey"
                        />
                        <p className="text-center col-9"> Alleppey</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75    shadow"
                            src={aurangabad}
                            alt="aurangabad"
                        />
                        <p className="text-center col-9">Aurangabad</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75  shadow"
                            src={bangalore}
                            alt="bangalore"
                        />
                        <p className="text-center col-9"> Bangalore</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={barot}
                            alt="barot"
                        />
                        <p className="text-center col-9"> Barot</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 mx-4 shadow"
                            src={manali}
                            alt="manali"
                        />
                        <p className="text-center col-9"> Manali</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={mashobra}
                            alt="mashobra"
                        />
                        <p className="text-center col-9"> Mashobra</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={mcleod}
                            alt="mcleod"
                        />
                        <p className="text-center col-9"> Mcleod</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={mumbai}
                            alt="mumbai"
                        />
                        <p className="text-center col-9"> Mumbai</p>
                    </div>



                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={bir}
                            alt="mumbai"
                        />
                        <p className="text-center col-9"> Bir</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={kinnaur}
                            alt="kinnaur"
                        />
                        <p className="text-center col-9"> kinnaur</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={assam}
                            alt="assam"
                        />
                        <p className="text-center col-9"> assam</p>
                    </div>


                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={coorg}
                            alt="coorg"
                        />
                        <p className="text-center col-9"> coorg</p>
                    </div>
                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={mysore}
                            alt="mysore"
                        />
                        <p className="text-center col-9"> mysore</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={salmer}
                            alt="salmer"
                        />
                        <p className="text-center col-9"> salmer</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={munroe}
                            alt="munroe"
                        />
                        <p className="text-center col-9"> munroe</p>
                    </div>

                    <div>
                        <img
                            className="img-fluid w-75 shadow"
                            src={chennai}
                            alt="chennai"
                        />
                        <p className="text-center col-9"> chennai</p>
                    </div>



                </Slider>
            </div>
        </div>
    );
}

export { Slidebar };
