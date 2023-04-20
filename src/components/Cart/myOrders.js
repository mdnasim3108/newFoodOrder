import Modal from "../UI/Modal"
import './myOrders.css'
import axios from "axios"
import { useState, useEffect } from "react"
import ReactLoading from "react-loading";
import OrderDetails from "./orderDetails";
const MyOrders = (props) => {
    const [orders, setOrders] = useState(
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ReactLoading type="spin" color="#0000FF"
                height={100} width={50} />
        </div>
    )
    useEffect(() => {
        axios.post("https://ordersend.onrender.com/myorder", { Name: localStorage.getItem("name") })
            .then((res) => {
                setOrders(
                    <OrderDetails
                        items={res.data.orderItems}
                        address={res.data.shippingAddress}
                        amount={res.data.orderAmount}
                        transId={res.data.transactionId}
                        orderId={res.data.OrderId}
                    />
                )
            })
    }, [localStorage.getItem("isOrdered")])
    return (
        <Modal backClickHandler={() => { props.onClick() }}>
            {!localStorage.getItem("isOrdered") ?
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>You Have Not Ordered Anything Yet</h1>
                </div>
                : orders
            }
        </Modal>




    )
}
export default MyOrders
