<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <div class="v-catalog-item__name">{{ product_data.name }}</div>
    <div class="v-catalog-item__price">Price: {{ product_data.price }} uah</div>
    <button class="v-catalog-item__btn btn" @click="addToCart(product_data)">
      Add to cart
    </button>
  </div>
</template>

<script>
import { useStore } from "../../stores/commonStore";

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    store() {
      return useStore();
    },
  },

  methods: {
    addToCart(product) {
      this.store.ADD_TO_CART(product);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;

  &__image {
    width: 150px;
  }
}
</style>
