<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState([
            'isCartOpen', 'cartItems',
        ]),
        ...mapGetters([
            'getCartTotalAmount',
        ]),
    },
    methods: {
        ...mapActions([
            'addToCart', 'removeFromCart', 'setIsCartOpen',
        ]),
        onCloseCart() {
            this.setIsCartOpen(false)
        },
        getItemTotal(item) {
            return item.quantity 
                + ' / $' 
                + (item.price * item.quantity).toFixed(2)
        },
        onAddToCart(product) {
            this.addToCart(product)
        },
        onRemoveFromCart(product) {
            this.removeFromCart(product)
        },
    },
}
</script>

<template>
    <div class="card shopping-cart transition"
        :class="{'isOpen': isCartOpen}">
        <div class="card-header">
            <h5>Shopping Cart</h5>
            <a class="cursor-pointer" @click="onCloseCart"><i class="pi pi-times"></i></a>
        </div>
        <DataTable v-if="cartItems.length" 
            :value="cartItems"  
            stripedRows
            paginator :rows="5">
            <Column header="Image" style="width: 10%">
                <template #body="slotProps">
                    <img :src="slotProps.data.image" :alt="slotProps.data.image" class="table-image" />
                </template>
            </Column>
            <Column field="title" header="Title" style="width: 50%"></Column>
            <Column header="Quantity/Total" style="width: 20%">
                <template #body="slotProps">
                    <Badge :value="getItemTotal(slotProps.data)" severity="info"></Badge>
                </template>
            </Column>
            <Column header="Actions" style="width: 30%">
                <template #body="slotProps">
                    <div class="buttons-group">
                        <Button @click="onAddToCart(slotProps.data)" icon="pi pi-plus-circle" size="small" severity="help"></Button>
                        <Button @click="onRemoveFromCart(slotProps.data.id)" icon="pi pi-minus-circle" size="small" severity="help"></Button>
                    </div>
                </template>
            </Column>
        </DataTable>
        <Divider />
        <div class="card-header">
            <h5>Total: ${{ getCartTotalAmount }}</h5>
        </div>
    </div>
</template>

<style scoped>
.shopping-cart {
    overflow-y: scroll;
    z-index: 99;
    position: fixed;
    top: 80px;
    right: -600px;
    width: 600px;
    min-height: calc(100vh - 104px);
    background-color: #3C4962;
    color: #fff;
    border-radius: 5px 0 0 5px;
}
.shopping-cart.isOpen {
    right: 0;

}
.shopping-cart h5 {
    color: #fff;
}
</style>
