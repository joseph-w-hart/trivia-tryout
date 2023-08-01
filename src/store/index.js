import Vue from 'vue'
import Vuex from 'vuex'
// My imports
// import axios from 'axios'
import questionService from "../services/QuestionService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
  },
  getters: {
  },
  mutations: {
    LOAD_QUESTIONS(state) {
      questionService
        .list()
        .then(response => {
          if (response.status === 200 && response.data.response_code === 0) {
            state.questions = response.data.results;
          }
        }).catch(error => {
          if (error.response) {
            console.log("Error retrieving questions: ", error.response.status);
          } else if (error.request) {
            console.log("Error retrieving questions: Server communication error");
          } else {
            console.log("Error retrieving questions: Error with request");
          }
        })
    }
  },
  actions: {
  },
  modules: {
  }
})
