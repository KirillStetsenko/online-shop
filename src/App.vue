<template>
  <div class="app">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
import { useStore } from "./stores/commonStore";
import vMainWrapper from "./components/v-main-wrapper";

export default {
  components: { vMainWrapper },
  name: "App",

  data() {
    return {
      store: useStore(),
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #eee;
  height: 100vh;
}
</style>
