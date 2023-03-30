import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Pay } from '../../checkout/CheckOut'
import { PaymentSuccess } from '../../checkout/PaymentSuccess'
import { Booking } from '../../Description/Booking/Booking'
import { ImagesGallery } from '../../Gallery/ImageGallery'
import { InformationPage } from '../../Information/InformationPage'
import { Layout } from '../../Layout/Layout'
import { LoadingPage } from '../../Loading/LoadingPage'
import { PaymentProcess } from '../../Loading/PaymentProcessing'
import { Login } from '../../Login/Login'
import { Navbar } from '../Navbar/Navbar'
import { Error } from './Error'



const Routers = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="/booking" component={Booking} />
                <Route path="/booking-info" component={InformationPage} />
                <Route path="/gallery" component={ImagesGallery} />
                <Route path="/loading" component={LoadingPage} />
                <Route path="/payment" component={Pay} />
                <Route path="/payment-process" component={PaymentProcess} />
                <Route path="/success" component={PaymentSuccess} />
                <Route path="/login" component={Login} />
                <Route path="*"><Error /></Route>
            </Switch>
        </div>
    )
}

export { Routers }
