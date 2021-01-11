import {fetchUserInfo} from '../api/index.js'


const state = {
  userInfo: []
};
const getters = {
  GET_USERINFO(state) {
    return state.userInfo;
  },
};
const actions = {
  FETCH_USERINFO({commit},name) {
    fetchUserInfo(name)
      .then(({data}) => {
        commit('SET_USERINFO',data);
      })
      .catch(err => console.log(err));
  }
};
const mutations = {
  SET_USERINFO(state,payload) {
    state.userInfo = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}