const axios = require("axios");
const MY_TOKEN = "7386904675:AAFndZ7qjIgBrptHFVRUb9Oc72uJ6_p_TeU"

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;
function getAxiosInstance() {
    return {
        get(method, params){
            return axios.get(`{/${method}`, {
                baseURL: BASE_URL,
                params,
            } );
        },
        post(method, data){
            return axios ({
                method: "post",
                baseURL: BASE_URL,
                url: '/${method}',
                data,
            });
        },
    };

}


module.exports = { axiosInstance: getAxiosInstance()};