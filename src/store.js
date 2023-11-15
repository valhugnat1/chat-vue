// store.js

import { createStore } from 'vuex';


export default createStore({
  state: {
    userEmail: '',
  },
  mutations: {
    setUserEmail(state, newEmail) {
      state.userEmail = newEmail;
    },
  },
});
