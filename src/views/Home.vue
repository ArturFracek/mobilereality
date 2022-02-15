<template>
  <div class="home">
    <div class="home__square home__square--1">
      <div class="square__header">{{ squareHeader1 }}</div>
      <div class="square__square-text">{{ squareText1 }}</div>
      <router-link to="/votes" class="suqare_button">Zobacz więcej</router-link>
    </div>
    <div class="home__square home__square--2">
      <div class="home__square-inside home__square-inside--1"></div>
      <div class="home__square-inside home__square-inside--2"></div>
      <div class="home__square-inside home__square-inside--3"></div>
      <div class="home__square-inside home__square-inside--4">
        <div class="square-inside__text">{{ squareText4 }}</div>
      </div>
    </div>
    <div class="home__square home__square--3">
     <div class="square__square-text square__square-text--2">{{ squareText1.toUpperCase() }}</div>
    </div>
    <div class="home__square home__square--4">
      <div class="square__header">{{ squareHeader4 }}</div>
      <div class="square__square-text">{{ squareText4 }}</div>
      <router-link to="/votes" class="suqare_button">Zobacz więcej</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      squareHeader1: "KILKA SŁÓW O NAS",
      squareHeader4: "NASZA OFERTA",
      squareText1: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      squareText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    }
  },
  components: {},
};
</script>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
}
.home__square {
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  width: 50%;
  justify-content: center;
  align-items: start;
}
.home__square--1 {
  background-color: rgb(250, 248, 248);
}
.home__square--2 {
  background-color: rgb(177, 177, 177);
}
.home__square--3 {
  background-image: url(https://picsum.photos/500);
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  color: white;
}
.home__square--4 {
  background-color: rgb(237, 237, 238);
}

.home__square-inside {
  height: 50%;
  display: flex;
  flex-basis: 50%;
  width: 50%;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  color: white;
}
.home__square-inside--1 {
  background-image: url(https://picsum.photos/500);
  
}
.home__square-inside--2 {
  background-image: url(https://picsum.photos/seed/picsum/300);
}
.home__square-inside--3 {
  background-image: url(https://picsum.photos/400/);
}
.home__square-inside--4 {
  background-image: url(https://picsum.photos/200);
  font-size: 14px;
}

.square__header {
  display: flex;
  flex-flow: column;
  margin-top: 15%;
  font-weight: 900;
  font-size: 28px;
  letter-spacing: 4px;
}
.square__header::after {
  font-size: 20px;
  margin-top: 0.5%;
  font-weight: 600;
  content: "KIM JESTEŚMY I DOKĄD IDZIEMY?";
  color: rgb(81, 149, 238);
  margin-bottom: 2vh;
  letter-spacing: 0px;
}
.square__square-text {
  display: flex;
  font-size: 16px;
  margin: 0 3vw 5vw
}
.square__square-text--2 {
  margin: 20%;
  font-size: 20px;
}
.suqare_button {
  margin-bottom: 15%;
  border: 2px solid rgb(81, 149, 238);
  padding: 5px;
  color: rgb(81, 149, 238);
  text-decoration: none;
  font-size: 24px;
}
.square-inside__text {
  margin: 10%;
}

@media (max-width: 700px) {
  .home__square {
    width: 100%;
    flex-basis: 100%;
  }
}

@media (max-width: 500px) {
  .home__square-inside {
    width: 100%;
    flex-basis: 100%;
    height: 25%;
  }
}
</style>
