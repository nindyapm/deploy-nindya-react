import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setAuthToken } from "../components/helpers/setAuthToken"
import "../assets/css/login.css"

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password:''
    })

    const [error, setError] = useState('');

    const navigate = useNavigate()

    const onLogin = () => {
        //pengecekan jika email dan password tidak sesuai
        if (user.email !== 'eve.holt@reqres.in' && user.password !== 'cityslicka') {
            setError("input with email: 'eve.holt@reqres.in', password: 'cityslicka'")
        } else {
            //Setup url API
            const url = "https://reqres.in/api/login"
            
            //Call axios post untuk request ke API login & passing state "user" sbg payload 
            axios.post(url, user)
            //promise resolve dan reject
                .then( res => {
                    //Get token from response
                    const token = res.data.token
    
                    //Set token to local storage
                    localStorage.setItem("token", token)
    
                    //Simpan token ke setAuthToken
                    setAuthToken(token)
    
                    //Redirect ke halaman dasboard jika berhasil login
                    navigate('/createproduct')
                })
                .catch(err => {
                    console.log('Error login => ', err);
                })
        }    

    }
    

    return (
     <div className="loginPage">
        <h2 className="login">LOG IN</h2>
        <div>
            <input type="email" name="email" placeholder="Email" id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <br />
            <input type="password" name="password" placeholder="Password" id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <br />
            <small className="text-danger">
                {error}
            </small>
            <br />
            <button onClick={onLogin} id="loginUser">
                Login
            </button>
        </div>
     </div>
     
    )
}

export default Login