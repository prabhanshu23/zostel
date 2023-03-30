import React from 'react'
import { Button } from '../Button/Button'
import errorMsg from './404.svg'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="container text-center">
            <img
                className=" img-fluid w-50 my-5 "
                src={errorMsg} alt="Error" />
            <Link to="/">

                <Button text="Back To Home" size="col-3 " />
            </Link>
        </div>
    )
}

export { Error }
