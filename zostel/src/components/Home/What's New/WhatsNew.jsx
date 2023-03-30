import React from 'react'
import wn1 from '../../../assets/images/wn1.svg'
import wni from '../../../assets/images/wni.svg'
import wn2I from '../../../assets/images/wn2I.svg'
import wn2 from '../../../assets/images/wn2.svg'
import wn3I from '../../../assets/images/wn3I.svg'
import wn3 from '../../../assets/images/wn3.svg'





const WhatsNew = () => {
    return (
        <>
            <div className="container-fluid  col-11 my-5 ">
                <h2 className="text-uppercase">What's New</h2>

                <div className="container-fluid d-flex w-100" >

                    <div className="d-flex" style={{ width: "33%" }}>
                        <img className="w-50" src={wni} alt="featured1" />
                        <img className="w-50" src={wn1} alt="featured1" />
                    </div>

                    <div className="d-flex" style={{ width: "33%", marginLeft: "2%" }}>
                        <img className="w-50" src={wn2I} alt="featured1" />
                        <img className="w-50" src={wn2} alt="featured1" />
                    </div>

                    <div className="d-flex" style={{ width: "33%", marginLeft: "2%" }}>
                        <img className="w-50" src={wn3I} alt="featured1" />
                        <img className="w-50" src={wn3} alt="featured1" />
                    </div>

                </div>
            </div>
        </>
    )
}

export { WhatsNew }
