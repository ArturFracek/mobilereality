import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Votes from "../views/Votes.vue"
import AddVote from "../views/AddVote.vue"
import Vote from "../views/Vote.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/votes",
    name: "Votes",
    component: Votes,
  },
  {
    path: "/add",
    name: "AddVote",
    component: AddVote,
  },
  {
    path: "/vote/:vote_id",
    name: "Vote",
    component: Vote,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
