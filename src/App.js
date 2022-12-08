import Cartprovider from "./contextStore/Cartprovider";
import Login from "./components/authentication/Auth";
import MyApp from "./MyApp";
import { useState, useEffect } from "react";
import AuthContext from "./contextStore/AuthContext";
import axios from "axios";
import OrderStatusProvider from "./contextStore/orderStatusProvider";
function App() {
  useEffect(() => {
    if (localStorage.getItem("name")) {
      setLogin(true)
    }
    axios.post("https://ordersserver-production.up.railway.app/myorder", { Name: localStorage.getItem("name") })
      .then((res) => {
        if (res.data.orderItems.length) {
          localStorage.setItem("isOrdered", true)
        }
      })
  })
  const [login, setLogin] = useState(false);
  const loginHandler = (name) => {
    localStorage.setItem("name", name)
    setLogin(true)
  }
  const logOutHandler = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("isOrdered")
    setLogin(false)
  }
  return (
    <OrderStatusProvider>
      <Cartprovider>
        {!login ? <Login onConfirmUser={loginHandler} />
          : <AuthContext.Provider value={{ logout: logOutHandler }}>
            <MyApp />
          </AuthContext.Provider>}
      </Cartprovider>
    </OrderStatusProvider>
  );
}
export default App;
