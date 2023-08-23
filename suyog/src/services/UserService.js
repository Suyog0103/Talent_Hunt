import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:6969"

class UserService {
    addUser(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL+'/userslist', user);
    
    }
    
    login(UserEmailPass) 
    {
       
       return axios.post(USER_API_BASE_URL+'/login',UserEmailPass)             //"http://localhost:8080/user/login?email=bhosalerahul5920@gmail.com&pass=1234
    }  
    
    getAllsingers(u){
        return axios.post(USER_API_BASE_URL+'/artistsAdateBycategory/'+u)
    }

    addOrder(booked_date, order_price,artist_emailid, user_emailid ){
        console.log("in userservice  "+ booked_date, order_price, artist_emailid, user_emailid)
        return axios.post(USER_API_BASE_URL+'/orderslist/'+booked_date+'/null/'+order_price+'/null/'+artist_emailid+'/'+user_emailid)
        // return axios.post(USER_API_BASE_URL+'/orderslist/null/null/1200/null/lala@gmail.com/setu@gmail.com')
    }
   
}

export default new UserService()