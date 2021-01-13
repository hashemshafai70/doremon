import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        userToken : localStorage.getItem('user-token') ,
        userLogin : !! localStorage.getItem('user-token') ,
        store : JSON.parse(localStorage.getItem('store'))
    },
    mutations :{
        SET_USER(state,payload){
             state.userToken = payload;
             state.userLogin = true;
        },
        LOGOUT(state){
            state.userToken = null;
            state.userLogin = false;
            localStorage.removeItem('user-token');
        },
        SELECT_STORE(state , market){
            state.store = market
        }
    },
     actions:{
         setUser({commit} , payload){
             commit( 'SET_USER' , payload.userToken);
             localStorage.setItem('user-token' , payload.userToken)
         },
         logOut({commit}){
             commit('LOGOUT');
         },
         selectStore({commit},Market){
             localStorage.setItem('store' , JSON.stringify(Market))
             commit('SELECT_STORE' , Market)
         }
     }
})