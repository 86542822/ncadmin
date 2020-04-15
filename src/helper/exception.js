/**
 * httpclient，错误拦截，loading计数
 */
import axios from 'axios';

export default {
    install(Vue, options) {

        const { store } = options;

        let syncError = []; // 同步错误
        let asyncError = []; // 异步错误

        // 同步错误处理
        function syncErrorHandler(error) {
            syncError.push(error);
            console.error(error);
            // TODO: 错误收集后的上报条件，上报内容
            console.log('syncError:', syncError.length);
        }

        // 异步错误处理
        function asyncErrorHandler(error) {
            asyncError.push(error);

            // 错误信息统一处理
            let errorTitle = 'Tips:', errorMessage = '⊙﹏⊙‖∣° 系统开小差了..';

            if (!error.response) {
                // errorMessage = '';
            } else {
                switch (error.response.status) {
                    case 404:
                        // errorMessage = '404';
                        break;
                    case 403: // 没有权限
                        errorMessage = '⊙﹏⊙‖∣° 没有操作权限，请联系管理员开通呗';
                        break;
                    case 401: // 未登录

                        if (error.response.data.message === 'Unauthorized') { // 用户名或密码错误
                            Vue.prototype.$message({
                                message: '用户名或密码错误!',
                                type: 'error'
                              });
                        } else {
                            alert('请先登录!');
                            location.href = `#/common/login`;
                        }
                        return;
                        break;
                }
            }

            Vue.prototype.$notify.error({
                title: errorTitle,
                message: errorMessage
            });

            // TODO: 错误收集后的上报条件，上报内容
            if (asyncError.length > 100) {
                // send Error
                // axios.post();
            }
        }

        function countChange(wait = true, action) {
            if (!wait) return;
            switch (action) {
                case 'increase':
                    store.dispatch('_requestCountIncrement');
                    break;
                case 'decrease':
                    store.dispatch('_requestCountDecrement');
                    break;
            }
        }

        // 统一code处理
        function codeHandler(response) {
            switch (response.data.code) {
                case 99:
                    window.location.href = response.data.data;
                    break;
            }
        }

        // TODO: 上开发环境时打开 Vue渲染错误 
        if (process.env.NODE_ENV !== 'development') {
            Vue.config.errorHandler = syncErrorHandler;
        }

        const axiosInstance = axios.create({
            withCredentials: true
        });
        // Add a request interceptor
        axiosInstance.interceptors.request.use(function (config) {
            // Do something before request is sent
            countChange(config._wait, 'increase');
            return config;
        }, function (error) {
            // Do something with request error
            countChange(error.config._wait, 'decrease');
            return Promise.reject(error);
        });

        // Add a response interceptor
        axiosInstance.interceptors.response.use(function (response) {
            // Do something with response data
            countChange(response.config._wait, 'decrease');
            codeHandler(response);
            return response;
        }, function (error) {
            // Do something with response error
            countChange(error.config._wait, 'decrease');
            asyncErrorHandler(error);
            return Promise.reject(error);
        });

        Vue.prototype.$axios = axiosInstance;
    }
}