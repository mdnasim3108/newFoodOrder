import './mealsList.css';
import { Fragment } from 'react';
import MealsForm from './mealsForm';
import { useContext } from 'react';
import cartContext from '../../contextStore/CartContext';
const MealsList=(props)=>{
    const cart=useContext(cartContext)
    const addToCart=(amount)=>{
          cart.addItem({name:props.name,price:props.price,quantity:amount,id:props.id})
    }
    return (
        <Fragment>
        <div className="cont">
            <div className="left">
                <ul>
                    <li className='name'>{props.name}</li>
                    <li className='desc'><i>{props.description}</i></li>
                    <li className='price'>${props.price}</li>
                </ul>
            </div>
            <div className="right">
                <MealsForm onAdd={addToCart}/>
            </div>
        </div>
        <div className="line"></div>
        </Fragment>
    )
}
export default MealsList