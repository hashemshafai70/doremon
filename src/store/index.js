import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        userToken : localStorage.getItem('user-token') ,
        userLogin : !! localStorage.getItem('user-token') ,
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
        }
    },
     actions:{
         setUser({commit} , payload){
             commit( 'SET_USER' , payload.userToken);
             localStorage.setItem('user-token' , payload.userToken)
         },
         logOut({commit}){
             commit('LOGOUT');
         }
     }
})