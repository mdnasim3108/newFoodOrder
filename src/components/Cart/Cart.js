import Modal from "../UI/Modal"
import './Cart.css'
import { useContext } from "react"
import cartContext from "../../contextStore/CartContext"
import Checkout from "./checkOut"
import orderContext from "../../contextStore/orderContext"
import CartContent from "./CartContent"
import ReactLoading from "react-loading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
const Cart = (props) => {
    const order = useContext(orderContext)
    const cart = useContext(cartContext)
    const backdropClick = () => {
        props.onClickBack()
    }
    const totalAmount = !cart.items.length ? "0.00" : cart.totalAmount.toFixed(2)
    return (
        <Modal backClickHandler={backdropClick} overlay={true}>
            {!order.orderState.loading ? <CartContent />
                : !order.orderState.success ? <div style={{ margin: "0 45%" }}>
                    <ReactLoading type="spin" color="#0000FF"
                        height={100} width={50} />
                </div>
                    : <h1 className="confirm">
                        your order has been placed
                        <FontAwesomeIcon icon={faCheck} className="tick"/>
                    </h1>}
            <div className="bottomCart">
                <div className="bill">
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className="actions">
                    <button className="close" onClick={props.onClickClose}>close</button>
                    {cart.items.length > 0 && !order.orderState.loading &&
                        <Checkout amount={cart.totalAmount} />
                    }
                </div>
            </div>
        </Modal>
    )
}
export default Cart;
