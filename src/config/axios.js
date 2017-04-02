import axios from 'axios';

let baseURL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = "https://evan-server-stage.herokuapp.com";
} else {
  baseURL = 'https://evan-server-stage.herokuapp.com';
}

// setAuthorizationToken(response.data.user.authentication_token)

const Axios = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

// Axios.interceptors.request.use((axiosConfig) => {
//   console.log(store.getState().user);
//   // if (typeof store.getState().user.current_user !== "undefined") {
//   //   var user_token = store.getState().user.current_user.authentication_token
//   //   if(user_token){
//   //     axiosConfig.headers.Authorization = `${user_token}`;
//   //   }
//   // }

//   return axiosConfig;
// });


// Axios.interceptors.response.use((response) => {
//     return response
//   }, function (error) {
//     if(error.response.status === 401){
//       hashHistory.push('/signin');
//     }
//     // Do something with response error
//     return Promise.reject(error)
//   }
// );


export default Axios;
