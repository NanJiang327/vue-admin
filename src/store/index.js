import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';

Vue.use(Vuex);
const STORE = new Vuex.Store({
    modules: {
        global: global
    }
});

export default STORE;
