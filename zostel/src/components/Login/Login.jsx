import loginImage from '../../assets/images/LoginImage/login-img_Frame-223.svg';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import flag from "../../assets/images/LoginImage/flag.svg";
const Login = () =>
{
    const [ user, setUser ] = useState({
        user: ""
    })
    // validNumber = (e) =>
    // {
    //     var num = document.getElementById("num").value;
    //     if (num.length == 9)
    //     {
    //         document.getElementById("proceed").style.backgroundImage = "#f15824";
    //     } else
    //     {
    //         document.getElementById("proceed").style.backgroundImage = "#D9E0E0";
    //     }
    // };
    const handleChange = (e) =>
    {
        e.preventDefault();
        const number = e.target.number;
        setUser({ ...user, [ user ]: number });
        var num = document.getElementById("num").value;
        if (num.length == 9)
        {
            document.getElementById("proceed").style.backgroundImage = "#f15824";
        } else
        {
            document.getElementById("proceed").style.backgroundImage = "#D9E0E0";
        }
    }

    const [ error, setError ] = useState([]);
    const [ eState, setEstate ] = useState(false);

    function proceed (e)
    {
        e.preventDefault();
        let pwdDiv = document.getElementById('pwd');
        pwdDiv.style.display = 'flex';
        document.getElementById('proceed').style.display = 'none';
        document.getElementById('verify').style.display = 'block';
        document.getElementById('pswdLabel').style.display = 'block';
        document.getElementById('pswdResend').style.display = 'block';
        document.getElementById('inpHead').innerHTML = 'Verify Yourself'
        try
        {
            axios.post("http://localhost:3001/login", user)
                .then((res) =>
                {
                    if (res.data.status === 400)
                    {
                        setError([ res.data.message ]);
                        setEstate(true);
                    } if (res.data.status === 422)
                    {
                        setError(res.data.error);
                        setEstate(true);
                    } else
                    {
                        setError([ res.data.message ]);
                        setEstate(true);
                        setTimeout(() =>
                        {
                            // changeState("signin")
                        }, 1000)
                    }
                })
                .catch((err) =>
                {
                    console.log(err)
                })
        } catch (err)
        {
            console.log(err);
        }
        setUser({
            user: ""
        })
    }

    function verify (e)
    {
        e.preventDefault();
        document.getElementById('verify').style.display = 'none';
        document.getElementById('checkin').style.display = 'block';
        document.getElementById('inpHead').innerHTML = 'Welcome'
        document.getElementById('phone').style.display = 'none';
        document.getElementById('pwd').style.display = 'none';
        document.getElementById('pswdLabel').style.display = 'none';
        document.getElementById('pswdResend').style.display = 'none';
        document.getElementById('fstName').style.display = 'block';
        document.getElementById('mdlName').style.display = 'block';
        document.getElementById('lstdName').style.display = 'block';
        document.getElementById('crtPswd').style.display = 'block';
        document.getElementById('entrPswd').style.display = 'block';
    }
    function chckin (e)
    {
        e.preventDefault();
        document.getElementById('inpHead').innerHTML = 'Zostel is requesting access to the following account.';
        document.getElementById('checkin').style.display = 'none';
        document.getElementById('allow').style.display = 'block';
        document.getElementById('fstName').style.display = 'none';
        document.getElementById('mdlName').style.display = 'none';
        document.getElementById('lstdName').style.display = 'none';
        document.getElementById('crtPswd').style.display = 'none';
        document.getElementById('entrPswd').style.display = 'none';
        var arr = [];
        arr.push(document.getElementById('fstName').value);
        console.log(arr);
        document.getElementById('user').innerHTML = arr[ arr.length - 1 ];
        document.getElementById('user').style.display = 'block';
        document.getElementById('loginCheck').style.display = 'flex';
    }
    function allow (e)
    {
        e.preventDefault();
    }


    return (
        <div className={styles.body}>
            <div className={styles.rightElement}>
                <div className={styles.loginHeading}>
                    <h3 className={styles.loginText}>
                        Log in to
                    </h3>
                    <h1 className={styles.zostelText}>
                        Zostel
                    </h1>
                </div>
                <div className={styles.logInSecndDiv}>
                    <div className={styles.loginForm}>
                        <form action="" className={styles.inputForm}>
                            <div id="inpHead" className={styles.enterNumberText}>
                                Enter your mobile number
                            </div>
                            <div id="phone" className={styles.numberInput}>
                                <img src={flag} alt="flag" />
                                <input id="num" className={styles.loginInput} type="number" autoFocus={true} placeholder="+91" name="mobile" value={user.mobile} /*onKeyPress={this.validNumber}*/ />
                            </div>
                            <p id="pswdLabel" className={styles.pswdLabel}>Enter the OTP that we just sent you on Whatsapp</p>
                            <div className={styles.loginInputPsd} id="pwd">
                                <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
                            </div>
                            {/* <input className={styles.loginInputPsd} id="pwd" placeholder="Password" type="password" autoFocus={true} onChange={handleChange} /> */}
                            <p id="pswdResend" className={styles.pswdResend}>Didn't receive the OTP? <span>Click here to resend</span> </p>
                            <input className={styles.loginInputPsd} id="fstName" placeholder="First Name" type="text" autoFocus={true} onChange={handleChange} />
                            <input className={styles.loginInputPsd} id="mdlName" placeholder="Middle Name" type="text" onChange={handleChange} />
                            <input className={styles.loginInputPsd} id="lstdName" placeholder="Last Name" type="text" onChange={handleChange} />
                            <br />
                            <input className={styles.loginInputPsd} id="crtPswd" placeholder="Create Password" type="password" onChange={handleChange} />
                            <input className={styles.loginInputPsd} id="entrPswd" placeholder="Re-Enter Password" type="password" onChange={handleChange} />
                            <h4 id="user" className={styles.userName}></h4>
                            <div className={styles.loginCheck} id="loginCheck">
                                <input type="checkbox" name="" id="" />
                                <p>Auto Login next time</p>
                            </div>
                            <div style={{ display: "contents" }}>
                                <button className={styles.proceedBtn} id="proceed" onClick={proceed}>Proceed</button>
                                <button className={styles.verifyBtn} id="verify" onClick={verify}>Verify</button>
                                <button className={styles.checkinBtn} id="checkin" onClick={chckin}>Check In</button>
                                <button className={styles.allowBtn} id="allow" onClick={allow}>Allow</button>
                                <div className={styles.diffAcc} id="dissAcc">Use different account</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Login };