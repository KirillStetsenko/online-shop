<template>
  <div class="v-cart">
    <router-link class="v-cart__back-btn" :to="{ name: 'catalog' }"
      >Back to Catalog</router-link
    >
    <div v-if="!store.CART.length" class="v-cart__empty-message">
      There are not any products yet
    </div>

    <v-cart-item
      v-for="product in store.CART"
      :key="product.id"
      :product_data="product"
    />
    <div class="v-cart__total">Total {{ store.GET_TOTAL() }}</div>
  </div>
</template>

<script>
import vCartItem from "../cart/v-cart-item.vue";
import { useStore } from "../../stores/commonStore";

export default {
  name: "v-cart",
  components: { vCartItem },
  data() {
    return {
      store: useStore(),
    };
  },
};
</script>

<style lang="scss" scoped>
.v-cart {
  margin: $margin * 2;
  padding: $padding * 2;
  border: 1px solid red;

  &__empty-message {
    margin: $margin * 2;
    padding: $padding * 2;
  }

  &__back-btn {
    font-size: 30px;
    margin: $margin * 2;
    padding: $padding * 2;
    border: none;
    text-decoration: none;
  }

  &__total {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
    color: white;
  }
}
</style>
