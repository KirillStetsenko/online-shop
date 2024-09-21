import { createRouter, createWebHashHistory } from "vue-router";
import vCatalog from "../components/catalog/v-catalog.vue";
import VCart from "../components/cart/v-cart.vue";

const routes = [
  { path: "/", name: "catalog", component: vCatalog },
  { path: "/cart", name: "cart", component: VCart },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
