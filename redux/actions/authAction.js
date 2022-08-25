
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL ="LOGIN_FAIL";
export const LIST_TIME_ZONE_SUCCESS = "LIST_TIME_ZONE_SUCCESS";
export const LIST_TIME_ZONE_FAIL = "LIST_TIME_ZONE_FAIL";

import axios from "axios";
const BASE_URL = 'http://10.0.2.2:4000';


export const ListTimeZone = () => {
    var result = {};
    var config = {
        method: 'get',
        url: `${BASE_URL}/timezone_list`,
        headers: { },
        data : ''
      };
      
    return async dispatch => {
    await  axios(config)
        .then(function (response) {
        result = response.data
        console.log(result);
        if(result.code == 0){
            dispatch({
                type: LIST_TIME_ZONE_SUCCESS,
                payload: result.data
            });
        }else{
            dispatch({
                type: LIST_TIME_ZONE_FAIL,
                payload: false
            });
        }
        })
        .catch(function (error) {
        console.log(error);
        });
        return result;
    }
}

export const Login = (account, password) => {
    var result = {};
    var config = {
        method: 'get',
        url: `${BASE_URL}/login?account=${account}&&password=${password}`,
        headers: { },
        data : ''
      };
      
    return async dispatch => {
    await  axios(config)
        .then(function (response) {
        result = response.data
        console.log(result);
        if(result.code == 0){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: true
            });
        }else{
            dispatch({
                type: LOGIN_FAIL,
                payload: false
            });
        }
        })
        .catch(function (error) {
        console.log(error);
        });
        return result;
    }
}
