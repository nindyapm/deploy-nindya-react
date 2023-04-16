import axios from "axios"

export const setAuthToken = (token) => { 
    //Buat pengecekan jika tokennya ada
    if(token) {
        //Buat "interceptor" axios untuk menambahkan token request di header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
        
    } else {
        //Delete token dari headers
        delete axios.defaults.headers.common['Authorization'] 
    }

}
