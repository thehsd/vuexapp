import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    counter: 0,
    },
    
    getters: {
        counter2: state => {
    return state.counter*2
        },
        hesabcounter: state => {
        return state.counter + ' click'
    }}
    
});
