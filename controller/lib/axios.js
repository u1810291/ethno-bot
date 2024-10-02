const axios = require("axios");
const MY_TOKEN = "7356503952:AAHEsE0dQoHF0RlP9M2t4wgNtFTO3kFiqSY"

const BASE_URL = 'https://api.telegram.org/bot${MY_TOKEN';
function getAxiosInstance() {
    return {
        get(method, params){
            return axios.get({'/${method}', {
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


modelu.exports = { axiosInstance: getAxiosInstance()};