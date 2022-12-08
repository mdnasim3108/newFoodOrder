import './Cart.css'
import AddedItems from "./addedItems"
import { useContext } from "react"
import cartContext from "../../contextStore/CartContext"
const CartContent = () => {
    const cart = useContext(cartContext)
    return (
        <>
            {cart.items.length === 0 ?
                <h1 className="emptyCartDesc">No Items Yet? May be Add One</h1>
                : <ul className="cart-items">
                    {cart.items.map(arr => {
                        return (
                            <li>
                                <AddedItems
                                    id={arr.id}
                                    name={arr.name}
                                    price={arr.price}
                                    quantity={arr.quantity}
                                />
                            </li>)
                    })}
                </ul>}
        </>
    )
}
export default CartContent;