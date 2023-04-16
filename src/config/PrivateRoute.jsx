import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    //Get token dari local storage
    const token = localStorage.getItem('token')
    let user

    //Check token dari Local Storage
    token ? user = true : user = false

    if(!user) {
        return <Navigate to={'/login'} replace/>
    } else {
        return <Outlet />
    }
}

export default PrivateRoute