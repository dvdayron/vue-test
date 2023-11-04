<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  computed: {
      ...mapState([
          'isCartOpen', 'cart',
      ]),
      ...mapGetters([
        'getCartTotalAmount', 'getCartTotalProducts',
      ]),
  },
  methods: {
      ...mapActions([
          'setIsCartOpen',
      ]),
      openCart() {
        this.setIsCartOpen(!this.isCartOpen)
      },
  }
}
</script>

<template>
  <div class="layout-topbar">
    <img src="../../assets/logo.png"/>
    <Button 
      @click="openCart()" 
      icon="pi pi-shopping-cart" 
      :label="'Products: ' + getCartTotalProducts + ' Total: $' + getCartTotalAmount"
      size="small" 
      severity="help">
    </Button>
  </div>
</template>

<style scoped>
.layout-topbar {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    -moz-transition: width 0.2s;
    -o-transition: width 0.2s;
    -webkit-transition: width 0.2s;
    transition: width 0.2s;
    height: 56px;
    background-color: #FDFEFF;
    box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.layout-topbar img {
    height: 32px;
}
</style>
