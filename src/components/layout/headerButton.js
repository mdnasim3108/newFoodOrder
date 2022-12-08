import './headerButton.css'
import { useContext,useEffect } from "react"
import cartContext from "../../contextStore/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const HeaderButton = (props) => {
    const cart=useContext(cartContext)
    const totalItems=cart.items.reduce((prev,curr)=>{
        return prev+curr.quantity
    },0)
    const hbtn=document.getElementById("button")
    useEffect(()=>{
            if(!cart.items.length){
                return
            }
            hbtn.classList.add("bump")
            setTimeout(()=>{
                hbtn.classList.remove("bump")
            },300)
    },[cart.items])
    return (
        <button id="button" className="hbtn" onClick={props.onClickAddCart}>
            <span className="icon">
                   <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            <span>
                Your Cart Items
            </span>
            <span className="badge">
                {totalItems}
            </span>
        </button>
    )
}
export default HeaderButton