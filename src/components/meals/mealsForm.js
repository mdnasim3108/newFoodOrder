import './mealsForm.css'
import { useRef } from 'react';
const MealsForm = (props) => {
    const inputRef=useRef()
    const submitHandler=(event)=>{
            event.preventDefault();
            const number=+inputRef.current.value
            if(number <1 || number>5){
                alert("please enter a valid amount (1-5)")
                return
            }
            props.onAdd(number)
    }
    return (
        <form onSubmit={submitHandler} id="mealForm" >
            <div className='top' style={{display:"flex"}}>
                <label htmlFor="amount" id="label">Amount</label>
                <input  ref={inputRef} type="number" name="amount" defaultValue="1" min="0" max="5"/>
            </div>
            <div className='bottom'>
                <button className='AddMeals' type="submit">+ Add</button>
            </div>
        </form>
    )
}
export default MealsForm;