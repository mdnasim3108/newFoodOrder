import CartContext from "./CartContext";
import { useReducer } from "react";

const CartProvider = (props) => {
    const initState = { items: [], totalAmount: 0 }
    const cartReducer = (state, action) => {
        if (action.type === "add") {
            let updatedItems
            const existItemIndex = state.items.findIndex((item) => item.id === action.item.id);
            const existItem = state.items[existItemIndex];
            let updatedAmount = state.totalAmount + (action.item.price * action.item.quantity);
            if (existItem) {
                const newItem = { ...existItem, quantity: existItem.quantity + action.item.quantity }
                updatedItems = state.items.filter((item) => state.items.indexOf(item) !== existItemIndex)
                updatedItems = updatedItems.concat(newItem)
                updatedAmount = state.totalAmount + action.item.price * action.item.quantity;
            }
            else {
                updatedItems = state.items.concat(action.item)
            }
            return { items: updatedItems, totalAmount: updatedAmount }
        }
        if (action.type === "remove") {
            let updatedItems
            const currItems = state.items
            const itemIndex = state.items.findIndex((item) => item.id === action.id)
            const item = state.items[itemIndex]
            if (item.quantity === 1) {
                updatedItems = currItems.filter((item) => currItems.indexOf(item) !== itemIndex)
                return { items: updatedItems, totalAmount: state.totalAmount - item.price }
            }
            currItems[itemIndex] = { ...item, quantity: item.quantity - 1 }
            updatedItems = [...currItems]
            return { items: updatedItems, totalAmount: state.totalAmount - item.price }
        }
        if (action.type === "plus") {
            let currItems = state.items
            const itemIndex = state.items.findIndex((item) => item.id === action.id)
            const item = currItems[itemIndex]
            currItems[itemIndex] = { ...item, quantity: item.quantity + 1 }
            const updatedItems = [...currItems]
            return { items: updatedItems, totalAmount: state.totalAmount + item.price }
        }
        if (action.type === 'delete') {
            const itemIndex = state.items.findIndex((arr) => arr.id === action.id)
            const delPrice = state.items[itemIndex].quantity * state.items[itemIndex].price
            const updatedItems = state.items.filter((arr) => arr.id !== action.id)
            return { items: updatedItems, totalAmount: state.totalAmount - delPrice }
        }
        if (action.type === "reset") {
            return initState
        }
        return initState
    }
    const [cartState, dispatchCart] = useReducer(cartReducer, initState)
    const addItemHandler = (item) => {
        if (item.quantity === "addOne") {
            dispatchCart({ type: "plus", id: item.id })
        }
        else {
            dispatchCart({ type: "add", item: item })
        }
    }
    const removerItemHandler = (id) => {
        dispatchCart({ type: "remove", id: id })
    }
    const deleteItemHandler = (id) => {
        dispatchCart({ type: "delete", id: id })
    }
    const resetState = () => {
        dispatchCart({ type: "reset" })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removerItemHandler,
        deleteItem: deleteItemHandler,
        reset: resetState
    }
    return (
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
    )
}
export default CartProvider
