import { Fragment } from "react"
import TextCard from "./TextCard"
import AvailableMeals from "./availableMeals"
const meals=()=>{
    return (
            <Fragment>
                <TextCard/>
                <AvailableMeals/>
            </Fragment>
    )
}
export default meals