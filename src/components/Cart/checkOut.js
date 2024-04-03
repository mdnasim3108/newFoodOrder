import StripeCheckout from "react-stripe-checkout"
import { useContext} from "react"
import cartContext from "../../contextStore/CartContext"
import axios from "axios"
import orderContext from "../../contextStore/orderContext"
const Checkout = (props) => {
    const status=useContext(orderContext)
    const cart = useContext(cartContext)
    const subTotal = cart.totalAmount.toFixed(2)
    const items = cart.items
    const OrderActions = async (token) => {
        try {
            await axios.post("https://ordersend.onrender.com/generateToken", { token, subTotal, items })
                .then(async(res) => {
                    const data=await JSON.parse(res.config.data);
                    let OrderId=data.token.id;
                    let orderItems=data.items;
                    let {address_city,address_country,address_line1,address_zip}=data.token.card;
                    let orderAmount=data.subTotal;
                    let transactionId=data.token.card.id;
                    let shippingAddress={address_city,address_country,address_line1,address_zip}
                    let name=localStorage.getItem("name")
                    axios.post("https://ordersend.onrender.com/placeOrder",{OrderId,orderItems,orderAmount,transactionId,shippingAddress,name})
                    .then(()=>{
                            localStorage.setItem("isOrdered",true)
                            status.confirm()
                    })
                })

        }
        catch (err) {
            console.log(err)
        }
    }


    const tokenHandler = (token) => {
        status.orderRequest()
        OrderActions(token)
    }
    return (
        <StripeCheckout
            stripeKey="pk_test_51Lw56vSFAyIqkgIK6c0GtBTG5Pa1QNWvVsoLLNdAkY15HHcKtmcoTdiqr9XxrrymLnoE4lqgG6znjO3oMTiYoHKe001yOrYCkS"
            amount={props.amount * 100}
            token={tokenHandler}
            shippingAddress
            currency="INR"
        >
            <button className="order">order</button>
        </StripeCheckout>
    )
}
export default Checkout
