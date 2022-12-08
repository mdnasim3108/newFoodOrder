import React from "react";
const orderContext = React.createContext({
    orderRequest:()=>{},
    confirm: ()=>{},
    failed: ()=>{},
})
export default orderContext;