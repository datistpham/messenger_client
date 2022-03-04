import axios from "axios"
import Cookies from 'js-cookie'
const fetchByCookie = async() => {
    await axios.get("http://localhost:4000/user/loginauto", {
            params: { user: Cookies.get("_s_ID") }
        })
    .then(res => console.log(res.data))
    .catch(err=> console.log(err))
}