<template>
  <div class="vote">
    {{ vote }}
    <button @click="deleteAndGoBack">Delete this vote</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  watch: {
    "$route.params.vote_id": {
      immediate: true,
      async handler(vote_id) {
        if (!vote_id) return;
        await this.fetchVoteById(vote_id);
      },
    },
  },
  methods: {
    ...mapActions(["fetchVoteById", "deleteVote"]),
    async deleteAndGoBack() {
      await this.deleteVote(this.vote.id);
      this.$router.push("/votes");
    },
  },
  computed: {
    ...mapGetters(["vote"]),
  },
};
</script>

<style></style>
