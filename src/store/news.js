import {fetchNewsList} from '../api/index.js'


const state = {
  news: []
};
const getters = {
  GET_NEWS(state) {
    return state.news;
  }
};
const actions = {
  FETCH_NEWS({commit}) {
    fetchNewsList()
      .then(({data}) => {
        commit('SET_NEWS',data);
      })
      .catch(err => console.log(err));
  }
};
const mutations = {
  SET_NEWS(state,payload) {
    state.news = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}