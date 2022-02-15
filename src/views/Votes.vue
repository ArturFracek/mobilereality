<template>
  <div class="api">
    <div v-for="(vote, index) in votes" :key="index" class="api votes">
      {{ vote }}
      <router-link :to="`vote/${vote.id}`">See this Vote</router-link>
    </div>
    <router-link to="/add">Add Vote</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["votes"]),
  },
  mounted() {
    this.fetchAllVotes();
  },
  methods: {
    ...mapActions(["fetchAllVotes"]),
  },
};
</script>

<style></style>
