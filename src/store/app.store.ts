import { createStore } from 'vuex'

const AppStore = createStore({
    state () {
      return {
        selectedCategory: null,
        isCartOpen: false,
        cartItems: [],
      }
    },
    getters: {
      getCartTotalAmount(state) {
        let total = 0

        state.cartItems.forEach((cartItem) => {
          total += cartItem.quantity * cartItem.price
        });

        return total.toFixed(2)
      },
      getCartTotalProducts(state) {
        let total = 0

        state.cartItems.forEach((cartItem) => {
          total += cartItem.quantity
        });

        return total
      },
    },
    mutations: {
      setSelectedCategory(state, category) {
        state.selectedCategory = category
      },
      setIsCartOpen(state, isOpen) {
        state.isCartOpen = isOpen
      },
      addToCart(state, product) {
        let existInCart = state.cartItems.some((item) => item.id === product.id)

        if (!existInCart) {
          state.cartItems.push({
            id: product.id,
            title: product.title,
            quantity: 1,
            price: product.price,
            image: product.image,
          })
        } else {
          state.cartItems.forEach((cartItem) => {
            if (cartItem.id === product.id) {
              cartItem.quantity++
            }
          });
        }
      },
      removeFromCart(state, id) {
        state.cartItems.forEach((cartItem) => {
          if (cartItem.id === id) {
            cartItem.quantity--
          }
        });

        state.cartItems = state.cartItems.filter((cartItem) => cartItem.quantity > 0)
      },
    },
    actions: {
      setSelectedCategory(context, category) {
        context.commit('setSelectedCategory', category)
      },
      setIsCartOpen(context, isOpen) {
        context.commit('setIsCartOpen', isOpen)
      },
      addToCart(context, product) {
        context.commit('addToCart', product)
      },
      removeFromCart(context, id) {
        context.commit('removeFromCart', id)
      },
    }
})

export default AppStore
