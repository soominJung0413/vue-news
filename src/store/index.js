import Vue from 'vue'
import Vuex from 'vuex'

import News from './news.js'
import Jobs from './jobs.js'
import Asks from './ask.js'
import User from './user.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    News,
    Jobs,
    Asks,
    User
  }
});