<template>
    
    <div class="d-flex align-items-stretch flex-wrap">
    <Product-card v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script>
import ProductCard from "./ProductCard"
    export default {
        components:{
            ProductCard
        },
        computed:{
            products(){
                return this.$store.state.products;
            }
        },
        mounted() {
            this.$store.dispatch("getProducts")
        },
        name:'ProductList'
    }
</script>

<style scoped>

</style>