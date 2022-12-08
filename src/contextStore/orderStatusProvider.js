import OrderContext from "./orderContext";
import { useReducer } from "react";
const OrderStatusProvider=(props)=>{
    const OrderReducer = (state, action) => {
        switch (action.type) {
            case "place_order_request":
                return { loading: true }
            case "place_order_success":
                return { success: true,loading:true }
            case "place_order_failed":
                return { loading: false, error: action.payload }
            case "reset":
                return {}
            default:
                return state
        }
    }
    const requestHandler=()=>{
        dispatchOrder({type:"place_order_request"})
    }
    const confirmHAndler=()=>{
        dispatchOrder({type:"place_order_success"})
    }
    const failHandler=()=>{
        dispatchOrder({type:"failHandler"})
    }
    const resetState=()=>{
        dispatchOrder({type:"reset"})
    }
    const [orderState, dispatchOrder] = useReducer(OrderReducer, {})
    const orderStatusContext={
        orderState:orderState,
        orderRequest:requestHandler,
        confirm:confirmHAndler,
        failed:failHandler,
        reset:resetState
    }
    return(
        <OrderContext.Provider value={orderStatusContext}>
            {props.children}
        </OrderContext.Provider>
    )
}
export default OrderStatusProvider