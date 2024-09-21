<template>
  <div class="v-main-wrapper">
    <router-link class="v-main-wrapper__cart-link link" :to="{ name: 'cart' }"
      >Cart {{ store.CART.length }}</router-link
    >
    <router-view></router-view>
    <v-cart />
  </div>
</template>

<script>
import { useStore } from "../stores/commonStore";

export default {
  name: "v-main-wrapper",

  data() {
    return {
      store: useStore(),
    };
  },

  mounted() {
    this.store.FROM_STORAGE();
  },
};
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;

  .link {
    text-decoration: none;
    font-size: 30px;
  }

  &__cart-link {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid black;
  }
}
</style>
