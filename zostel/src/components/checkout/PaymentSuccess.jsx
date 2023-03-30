import React from 'react'
import successMsg from './success.svg'
import { useHistory } from 'react-router-dom'

const PaymentSuccess = () => {
    const history = useHistory()

    React.useEffect(() => {
        setTimeout(() => {
            return history.push("/")
        }, 8000)
    }, [history]);

    return (
        <div className="container text-center">
            <img
                className=" img-fluid"
                style={{ width: "40%" }}
                src={successMsg} alt="success" />
            <h2 className="my-3 h1 text-success">Payment Successful!</h2>



        </div>
    )
}

export { PaymentSuccess }
