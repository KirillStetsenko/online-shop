<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <div class="v-cart-item__info">
      <div class="v-cart-item__name">{{ product_data.name }}</div>
      <div class="v-cart-item__price">Price: {{ product_data.price }}</div>
    </div>
    <div class="v-cart-item__quantity">
      <button class="v-cart-item__btn btn" @click="decrementItem(product_data)">
        -
      </button>
      <div class="v-cart-item__price">
        {{ product_data.quantity }}
      </div>
      <button class="v-cart-item__btn btn" @click="incrementItem(product_data)">
        +
      </button>
    </div>
    <button class="v-cart-item__btn btn" @click="removeFromCart(product_data)">
      Remove
    </button>
  </div>
</template>

<script>
import { useStore } from "../../stores/commonStore";

export default {
  name: "v-cart-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      store: useStore(),
    };
  },

  methods: {
    removeFromCart(product) {
      this.store.REMOVE_FROM_CART(product);
    },

    incrementItem(product) {
      this.store.INCREMENT_PRODUCT(product);
    },

    decrementItem(product) {
      this.store.DECREMENT_PRODUCT(product);
    },
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: $margin * 2;
  padding: $padding * 2;
  border: 1px solid red;

  &__image {
    width: 100px;
  }

  &__quantity {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn {
    margin: $margin * 2;
    padding: $padding * 2;
    font-size: 20px;
    background: none;
    border: none;
  }
}
</style>
