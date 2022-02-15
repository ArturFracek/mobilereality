import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    votes: [],
    vote: null
  }),

  mutations: {
    SET_VOTES(state, votes) {
      state.votes = votes;
    },
    ADD_VOTE(state, vote) {
      state.votes.push(vote);
    },
    SET_VOTE(state, vote) {
      state.vote = vote;
    },
  },

  actions: {
    async fetchAllVotes({ commit }) {
      const votes = (await api.get("/votes")).data;
      commit("SET_VOTES", votes);
    },
    async fetchVoteById({ commit }, vote_id) {
      const vote = (await api.get(`/votes/${vote_id}`)).data;
      commit("SET_VOTE", vote);
    },
    async deleteVote({ dispatch }, vote_id ) {
      await api.delete(`/votes/${vote_id}`);
      await dispatch("fetchAllVotes");
    },
    async createVote({ dispatch }, newVote) {
      await api.post("/votes", newVote);
      await dispatch("fetchAllVotes");
    },
  },

  getters: {
    votes(state) {
      return state.votes;
    },
    vote(state) {
      return state.vote
    }
  },
});
