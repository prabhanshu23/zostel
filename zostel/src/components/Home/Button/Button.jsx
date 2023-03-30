import React from 'react'

const Button = ({ size, text }) => {
    return (
        <div className="button-style">
            <button
                style={{ background: "#F1563F" }}
                className={`btn text-uppercase text-white  ${size}`}
            >{text}</button>
        </div>
    )
}

export { Button }
