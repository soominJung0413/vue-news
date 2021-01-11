import {fetchAskList,fetchAskItem} from '../api/index.js'


const state = {
  asks: [],
  askInfo: []
};
const getters = {
  GET_ASKS(state) {
    return state.asks;
  },
  GET_ASKINFO(state) {
    return state.askInfo;
  }
};
const actions = {
  FETCH_ASKS({commit}) {
    fetchAskList()
      .then(({data}) => {
        commit('SET_ASKS',data);
      })
      .catch(err => console.log(err));
  },
  FETCH_ASKINFO({commit},id) {
    fetchAskItem(id)
      .then(({data}) => {
        console.log(data);
        commit('SET_ASKINFO',data);
      })
      .catch(err => console.log(err));
  }
};
const mutations = {
  SET_ASKS(state,payload) {
    state.asks = payload;
  },
  SET_ASKINFO(state,payload) {
    state.askInfo = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}