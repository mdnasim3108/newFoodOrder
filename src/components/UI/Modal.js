import './Modal.css';
import { Fragment } from 'react';
import Card from './Card.js';
import MyOrders from '../Cart/myOrders';
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.backClickHandler}></div>
    )
}
const OverLay = (props) => {
    return (
        <div className="mymodal">
            {props.children}
        </div>
    )
}
const Modal = (props) => {


    const myAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateY(-3rem);
      }
      to{
        opacity: 1;
        transform: translateY(0);
      }
    `
    const Mycard = styled.div`
    position: fixed;
    top: 5vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation-name:${myAnimation};
    animation-duration:300ms;
    @media (min-width:500px){
    top:15vh;
    }
    `;
    return (
        <>
            <Backdrop backClickHandler={props.backClickHandler} />
            {props.overlay ? <OverLay className={props.className}>{props.children}</OverLay>
                : <Mycard>
                    <div style={{ textAlign: "right" }}>
                        <i className='closeModal' onClick={props.backClickHandler}><FontAwesomeIcon icon={faXmark} /></i>
                    </div>
                    {props.children}
                </Mycard>}
        </>
    )
}
export default Modal
