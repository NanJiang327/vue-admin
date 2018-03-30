import axios from 'axios'

const BASE_URL = '';

const http = (type, url, data = {}) => {
    const config = {
        method: type,
        url: `${BASE_URL}${url}`
    };

    if (type === 'post') {
        config.data = data;
    } else if (type === 'get') {
        config.params = data;
    };

    return axios(config).then((response) => {
        return response.data;
    }).catch(err => {
        return err.response;
    })
};

export default {
    install: function (Vue) {
        Vue.prototype.$http = http;
    }
}
