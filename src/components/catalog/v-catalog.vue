<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in products"
        :key="product.id"
        :product_data="product"
        @sendArticle="show"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "../catalog/v-catalog-item.vue";
import { useStore } from "../../stores/commonStore";

export default {
  components: { vCatalogItem },
  name: "v-catalog",
  data() {
    return {
      store: useStore(),
    };
  },

  computed: {
    products() {
      return this.store.PRODUCTS;
    },
  },

  mounted() {
    this.store.GET_PRODUCTS();
  },
};
</script>

<style lang="scss" scoped>
.v-catalog {
  margin: $margin * 2;
  padding: $padding * 2;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
