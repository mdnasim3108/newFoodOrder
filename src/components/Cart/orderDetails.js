import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
const orderDetails = (props) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const items = props.items.map((item) => {
        return (
            <li>
                {item.name}
                    <i style={{margin:"0 7px 0 1rem"}}><FontAwesomeIcon icon={faMultiply} /></i>
                    {item.quantity}
            </li>
        )
    })
    return (
        <Fragment>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>My Orders</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  lg:gap-8 ">
                <div class="p-4  items-center justify-center">

                    <ul className="mb-[]">
                        <h1 style={{ fontWeight: "bold" }}>ITEMS</h1>
                        {items}
                    </ul>
                </div>
                <div class="p-4 flex items-center justify-start mb-[]">
                    <ul>
                        <h1 style={{ fontWeight: "bold" }}>Shipping address</h1>
                        <li>{props.address.address_line1}</li>
                        <li>city:{props.address.address_city}</li>
                        <li>country:{props.address.address_country}</li>
                        <li>pincode:{props.address.address_zip}</li>
                    </ul>
                </div>
                <div class="p-4 flex items-center justify-center">


                    <ul>
                        <h1 style={{ fontWeight: "bold" }}>Order details</h1>
                        <li>order Amount:{props.amount}</li>
                        <li>date:{today}</li>
                        <li>transaction id:{props.transId}</li>
                        <li>order id:{props.orderId}</li>
                    </ul>

                </div>

            </div>

        </Fragment>
    )
}
export default orderDetails