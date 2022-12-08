import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import { Fragment } from "react";
const MyApp = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </Fragment>
    )
}
export default MyApp;