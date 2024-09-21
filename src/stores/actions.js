import axios from "axios";

export default {
  async GET_PRODUCTS() {
    try {
      const request = await axios.get(
        "https://run.mocky.io/v3/d7d3e1cb-7210-432c-b4c3-b1f0c06f72ca"
      );
      const products = request.data.products;
      this.SET_PRODUCTS(products);
    } catch (error) {
      console.log(error);
    }
  },

  SET_PRODUCTS(array) {
    if (array && Array.isArray(array)) {
      this.products = array;
    } else {
      console.log("Invalid products data");
    }
  },

  ADD_TO_CART(product) {
    let target = this.cart.find((prod) => prod.id === product.id);

    if (target) {
      target.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.TO_STORAGE();
  },

  REMOVE_FROM_CART(product) {
    this.cart = this.cart.filter((prod) => prod.id !== product.id);
    this.TO_STORAGE();
  },

  INCREMENT_PRODUCT(product) {
    if (product.quantity < 10) {
      product.quantity++;
    }
    this.TO_STORAGE();
  },

  DECREMENT_PRODUCT(product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
    this.TO_STORAGE();
  },

  GET_TOTAL() {
    return this.cart
      .map((item) => item.price * item.quantity)
      .reduce((item, acc) => item + acc, 0);
  },

  TO_STORAGE() {
    localStorage.setItem("cart_products", JSON.stringify(this.cart));
  },

  FROM_STORAGE() {
    this.cart = JSON.parse(localStorage.getItem("cart_products")) || [];
  },
};
