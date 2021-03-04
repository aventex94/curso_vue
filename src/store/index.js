import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        user:"Matias Miletich",
        token:''
    },
    getters:{
        user(state){
            return state.user;
        },
        token(state){
            return state.token;
        }
    },
    mutations:{
        SET_USER(state,user){
            state.user = user;
        }
    },
    actions:{
        modifUser( {commit} ){
            commit('SET_USER',"Carlos Benites");
        },
        
    },
    modules:{

    }
})

export default store;