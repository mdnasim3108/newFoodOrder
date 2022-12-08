import './addedItems.css';
import { Fragment, useContext } from 'react';
import cartContext from '../../contextStore/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMultiply } from '@fortawesome/free-solid-svg-icons'
const AddedItems = (props) => {
    const cart = useContext(cartContext)
    const addHandler = () => {
        cart.addItem({ name: props.name, price: props.price, id: props.id, quantity: "addOne" })
    }
    const removeHandler = () => {
        cart.removeItem(props.id)
    }
    const deleteHandler = () => {
        cart.deleteItem(props.id)
    }
    return (
        <Fragment>
            <div className="items_container">
                <div className="items_side">
                    <div className='leftSide'>
                        <h3>{props.name}</h3>
                        <span className='item_price'>${props.price}</span>
                    </div>
                    <span className="quantity">
                        <i style={{ margin: "5px" }}><FontAwesomeIcon icon={faMultiply} /></i>
                        {props.quantity}
                    </span>
                </div>
                <div className="items_add">
                    <button onClick={addHandler}>+</button>
                    <button onClick={removeHandler}>-</button>
                    <button id="del" onClick={deleteHandler}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            <div className="line" style={{ backgroundColor: "#8a2b06", height: "2.1px", marginBottom: "1.2rem", position: "relative", bottom: "0.9rem" }}></div>
        </Fragment>
    )
}
export default AddedItems