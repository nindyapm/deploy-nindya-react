import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import { setAuthToken } from "./components/helpers/setAuthToken";
import { useEffect } from "react";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import CreateProduct from "./Pages/CreateProduct";
import PrivateRoute from "./config/PrivateRoute";

function App() {
  //Get token dari local storage
  const token = localStorage.getItem("token");

  if(token) {
    setAuthToken(token);
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res))
    .catch(e => console.log('error get :', e))
  })

  return (
    <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<LandingPage />} index />
        <Route element={<PrivateRoute />} >
          <Route element={<CreateProduct />} path='/createproduct'/>
        </Route>
    </Routes>
  )
}

export default App
