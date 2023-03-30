import styled from "styled-components"
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'



const LogoCont = styled.div`
    position: absolute;
    /* width: 200px; */
    /* height: 182px; */
    left: calc(52% - 200px/2);
    top: 300px;
    text-align:center;

.App-logo {
  height: 10vmin;
  pointer-events: none;
}

    .logo{
        background: #FFFFFF;
        padding: 10px;
        border-radius: 50%;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    }
    h4{
        font-weight: 700;
        line-height: 36px;
    }
    
    
`;

export const PaymentProcess = () => {
    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        setTimeout(() => {
            return history.push("/success")
        }, 3000)

    }, [history]);

    return (
        <div>
            <LogoCont>
                <img className="App-logo" src="Logo.svg" />
                <h4>Follow your <img src="Heart.svg" alt="" /> </h4>
            </LogoCont>
        </div>
    )
}
