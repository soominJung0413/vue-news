import {fetchJobsList} from '../api/index.js'


const state = {
  jobs: []
};
const getters = {
  GET_JOBS(state) {
    return state.jobs;
  }
};
const actions = {
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then(({data}) => {
        commit('SET_JOBS',data);
      })
      .catch(err => console.log(err));
  }
};
const mutations = {
  SET_JOBS(state,payload) {
    state.jobs = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}