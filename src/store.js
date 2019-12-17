import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
    SET_MENULIST: 'SET_MENULIST'
}
export default new Vuex.Store({
  state: {
    menuList: []
  },
  getters: {
    menuList: state =>{
        return state.menuList
    }
  },
  mutations: {
    [types.SET_MENULIST](state,menuList){
        if(menuList){
          return state.menuList = menuList
        }else{
          return state.menuList = []
        }
      }
  },
  actions: {
    setMenuList: (context,menuList) =>{
        context.commit(types.SET_MENULIST,menuList)
      }
  }
})
