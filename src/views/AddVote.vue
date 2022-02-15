<template>
  <div class="addVote">
    <button @click="like">I Like</button>
    <button @click="dislike">Dislike</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["createVote"]),
    async like() {
      await this.createVote({
        image_id: "asf2",
        sub_id: Math.random().toString(),
        value: 1,
      });
      this.$router.push("/votes");
    },
    async dislike() {
      await this.createVote({
        image_id: "asf2",
        sub_id: Math.random().toString(),
        value: 0,
      });
      this.$router.push("/votes");
    },
  },
};
</script>

<style></style>
