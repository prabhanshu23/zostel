import React, { useContext } from 'react'
import styles from './CheckOut.module.css'
import { BiCart } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { SummaryContext } from '../context/SummaryContext';


export function Pay() {

    const { summary } = useContext(SummaryContext);

    return (
        <div className={styles.mainConainer}>
            <div className={styles.logoBar}>
                <div className={styles.logoRight}>
                    <img src="https://api.juspay.in/images/juspay/jp-logo-v3.1.1.png" alt="JUSPAY" className={styles.image} />
                </div>
            </div>
            <div className={styles.inpForm}>
                <h4 className={styles.paymentHeading}>Complete your payment</h4>
                <div className={styles.paymentContents}>
                    <div className={styles.orderInfo}>
                        <h5 className={styles.orderInfoHeading}>
                            <span className={styles.iconImage} ><BiCart /></span>
                            Your transaction details
                        </h5>

                        <div className={styles.paymentinfoDiv}>
                            <div className={styles.paymentInfo_a}>
                                <p>Merchant</p>
                                <p>Zostel</p>
                            </div>
                            <div className={styles.paymentInfo_b}>
                                <p>Order Id</p>
                                <p>QF0GQALYSC</p>
                            </div>
                            <div className={styles.paymentInfo_c}>
                                <p>Amount</p>
                                <p className={styles.amount}>₹ {summary.price}.00</p>
                            </div>
                        </div>
                        <h5 className={styles.paymentoptionHeading}>
                            <p className={styles.iconImage} ><MdPayment /></p>
                            <p>Payment Options</p>
                            <p className={styles.term}>Secured by JusPay <span>&trade;</span>. Learn more</p>
                        </h5>

                        <div className={styles.paymentsOption}>
                            <p className={styles.debitCard}>Credit/Debit Card</p>
                            <p>Net Banking</p>
                            <p>Wallets</p>
                        </div>

                        <div>
                            <div className={styles.cardNumber}>
                                <p>Card number</p>
                                <input className={styles.cardNoInp} type="text" placeholder='Card Number' />
                                <div><img className={styles.visaCard} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" />
                                    <img className={styles.visaCard} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" alt="" /></div>
                            </div>
                            <div className={styles.cardNumber}>
                                <p>Name on card</p>
                                <input className={styles.cardNoInp} type="text" placeholder='Name' />

                            </div>
                            <div className={styles.cardNumber}>
                                <p>Expiry (mm/yy)</p>
                                <div className={styles.expiry}>
                                    <input type="text" placeholder='MM' />
                                    <p>/</p>
                                    <input type="text" placeholder='YY' />
                                    <p className={styles.cvv}>CVV</p>
                                    <input type="password" placeholder='CVV' />
                                    <img className={styles.question} src="https://www.pngfind.com/pngs/m/32-329710_question-mark-png-riddler-logo-transparent-png.png" alt="" />
                                </div>
                            </div>

                            <div className={styles.saveinfo}>
                                <p className={styles.saveContent}> <input type="checkbox" /></p>
                                <p>(Save card details for future transactions.)</p>
                                <p> <img className={styles.question} src="https://www.pngfind.com/pngs/m/32-329710_question-mark-png-riddler-logo-transparent-png.png" alt="" /></p>
                            </div>

                            <div className={styles.btnDiv}>
                                {/* <Link to="/success"> */}

                                <button
                                    onClick={() => {
                                        setTimeout(() => {
                                            return window.location = "https://zostel-clone-kerrybli.vercel.app/success"
                                        }, 3000)
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className={styles.payBtn}>Make Payment ₹ {summary.price}.00</button>
                                {/* </Link> */}
                            </div>
                            <div className={styles.cardLogoDiv}>
                                <img src="https://allvectorlogo.com/img/2016/03/verified-by-visa-logo.png" alt="" />
                                <img src="https://logowik.com/content/uploads/images/mastercard-securecode6659.jpg" alt="" />
                                <img src="https://qualitycontactsolutions.com/wp-content/uploads/2015/10/pci-logo-1024x676.jpg" alt="" />
                                <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_376011e4845bec8a28b7711b4f95fdd2/juspay.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="modal fade"
                style={{
                    marginTop: "20%"
                }}
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header mx-auto">
                            <h5 class="modal-title " id="staticBackdropLabel">
                                <img src="https://i.gifer.com/embedded/download/33Hh.gif" alt="" />
                            </h5>
                        </div>
                        <div class="modal-body">
                            Please wait till the payment succeed, don't close or refresh the window
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
