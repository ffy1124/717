import Vue from 'vue';
import axios from 'axios';
import { getCookie } from '../utils/utils';

if (process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = 'http://localhost:3000';
};
if (process.env.NODE_ENV == "production") {
    axios.defaults.baseURL = 'http://www.lb717.com';
};


var httpPlugin = {
    install: function (Vue) {
        let axiosCase1 = axios.create();
        let axiosCase2 = axios.create({
            headers:{'Authorization': ''}
        });
        // 添加请求拦截器
        axiosCase2.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            let token = getCookie('token');
            config.headers.Authorization = token;
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
        Object.defineProperty(Vue.prototype,'$http',{
            value:axiosCase1
        })
        Object.defineProperty(Vue.prototype, '$http_token', {
            value: axiosCase2
        })
    }
};

Vue.use(httpPlugin);
