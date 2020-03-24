import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)




const store  = new Vuex.Store({
  state:{
    LoginUrl:{},
    LoginStateFT:{}
  },
  mutations:{
    Login(state,data){
      state.LoginUrl  = data
    },
    LoginStatus(state,data){
      state.LoginStateFT  = data
    }
  }
})

export default store
