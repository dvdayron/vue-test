<script>
import { mapActions, mapState } from 'vuex'
import SearchField from '../shared/SearchField.vue'
import { getProducts } from '../../services/products.service'

export default {
    data() {
        return {
            products: [],
            searchTerm: '',
        }
    },
    mounted() {
        this.fetchProducts()
    },
    computed: {
        ...mapState([
            'selectedCategory',
        ]),
        filteredProducts() {
            return this.products.filter((product) => {
                return (!this.searchTerm || product.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
                    && (!this.selectedCategory || product.category === this.selectedCategory);
            })
        },
    },
    methods: {
        ...mapActions([
            'addToCart',
        ]),
        fetchProducts() {
            getProducts()
                .then((products) => {
                    this.products = products
                })
                .catch(() => console.error)
        },
        onSearchTermChanged(term) {
            this.searchTerm = term
        },
        viewProduct(id) {
            console.log('viewProduct', id)
        },
        onAddToCart(product) {
            this.addToCart(product)
        },
    },
    components: {
        'search-field': SearchField,
    },
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h5>Products ({{ filteredProducts.length }}) <Badge v-if="selectedCategory" :value="selectedCategory" severity="info"></Badge></h5>
            <search-field placeholder="Search" @change="onSearchTermChanged($event)"></search-field>
        </div>
        <DataTable v-if="filteredProducts.length" 
            :value="filteredProducts"  
            stripedRows 
            scrollable 
            paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]"
            tableStyle="min-width: 50rem">
            <Column header="Image" style="width: 10%">
                <template #body="slotProps">
                    <img :src="slotProps.data.image" :alt="slotProps.data.image" class="table-image" />
                </template>
            </Column>
            <Column field="title" sortable header="Title" style="width: 15%"></Column>
            <Column field="description" header="Description" style="width: 35%"></Column>
            <Column field="price" sortable header="Price" style="width: 5%"></Column>
            <Column field="category" sortable header="Category" style="width: 15%"></Column>
            <Column field="rating" sortable header="Rating" style="width: 15%">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating.rate" readonly :cancel="false" />
                </template>
            </Column>
            <Column sortable header="Actions">
                <template #body="slotProps">
                    <div class="buttons-group">
                        <Button @click="onAddToCart(slotProps.data)" icon="pi pi-cart-plus" size="small" severity="help"></Button>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
