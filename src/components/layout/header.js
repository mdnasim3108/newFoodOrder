import './header.css';
import Cart from '../Cart/Cart';
import mealImg from '../../assets/meals.jpg';
import HeaderButton from './headerButton';
import { useState, Fragment, useContext } from 'react';
import AuthContext from '../../contextStore/AuthContext';
import MyOrders from '../Cart/myOrders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import cartContext from '../../contextStore/CartContext';
import orderContext from '../../contextStore/orderContext';
const Header = () => {
    const [Modal, setModal] = useState(false);
    const [orderModal, setOrderModal] = useState(false)
    const auth = useContext(AuthContext)
    const cart = useContext(cartContext)
    const order=useContext(orderContext)
    const activateModal = () => {
        setModal(true);
    }
    const deActivateModal = () => {
        if(order.orderState.loading){
            order.reset()
        }
        setModal(false);        
    }
    const myOrderHandler = () => {
        setOrderModal(true)
    }
    const myOrderDeActivate = () => {
        setOrderModal(false)
    }
    const logOutAndResetCart = () => {
        cart.reset()
        auth.logout()
    }

    return (
        <Fragment>
            {Modal && <Cart onClickClose={deActivateModal} onClickBack={deActivateModal} />}
            {orderModal && <MyOrders onClick={myOrderDeActivate} />}
            <div className='container'>
                <div className="header">
                    <div className='userProfile'>
                        <button id="button-9">
                            <i><FontAwesomeIcon icon={faUser} /></i>
                            <p style={{ marginLeft: "10px" }}>profile</p>
                        </button>
                        <div className='dropMenu'>
                            <h6 ><a onClick={myOrderHandler} >My orders</a></h6>
                            <h6><a onClick={logOutAndResetCart}>Log out</a></h6>
                        </div>
                    </div>
                    <HeaderButton onClickAddCart={activateModal}>Your cart</HeaderButton>
                </div>
            </div>
            <div className='imge' >
                    <img src={mealImg} alt='meals' />
            </div>
        </Fragment>
    )
}
export default Header;