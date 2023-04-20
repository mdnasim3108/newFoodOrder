import './availableMeals.css'
import Card from '../UI/Card';
import MealsList from './mealsList';
import Axios from "axios";
import { useEffect,useState } from 'react';
const AvailableMeals = () => {
    const [DUMMY_MEALS,setDUMMY_MEALS]=useState([])
    const flag=0
    useEffect(()=>{
        Axios.get("https://measlserver.onrender.com/listmeals")
        .then((res)=>{
         setDUMMY_MEALS(res.data)
        })
    },[flag])
    // const DUMMY_MEALS=[
    //     {
    //         "id": "m1",
    //         "name": "Sushi",
    //         "description": "Finest fish,veggies",
    //         "price": 22.99
    //     },
    //     {
    //         "id": "m2",
    //         "name": "Schnitzel",
    //         "description": "A german specialty!",
    //         "price": 16.5
    //     },
    //     {
    //         "id": "m3",
    //         "name": "Barbecue Burger",
    //         "description": "American, raw, meaty",
    //         "price": 12.99
    //     },
    //     {
    //         "id": "m4",
    //         "name": "Green Bowl",
    //         "description": "Healthy...and green...",
    //         "price": 18.99
    //     }
        
    // ]
    // Axios.delete("http://localhost:5000/deletemeals",{
    //     data:{"name":"Momos"},
    //     headers:{authorization: "samp"}
    // })
    // .then((response) => console.log(response.data))
  
    // Axios.post("http://localhost:5000/addmeals",{
    //     id:"m1",
    //     name:"Momos",
    //     description:"sticky and stripy",
    //     price:"99.24"
    // })
    // .then((res)=>{setDUMMY_MEALS(
    //     (arr)=>[...arr,res.data]
    // )})
    // Axios.delete("http://localhost:5000/deletemeals",{
    //    data:{ name:"Momos"},
    //    headers:{authorization: "samp"}
    // })
    // .then((res)=>console.log(res.data))
    return (
        <Card>
            <section className="meals">
                <ul>
                    {DUMMY_MEALS.map((arr) => {
                        return (
                            <li>
                                <MealsList
                                    id={arr.id}
                                    name={arr.name}
                                    description={arr.description}
                                    price={arr.price}
                    
                                />
                        </li>
                        )
                    })}
                </ul>
            </section>
        </Card>
    )
}
export default AvailableMeals;
