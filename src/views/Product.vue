<template>
    <div class="container row mt-5" v-if="product">
       <div class="col-3">
        <img :src="getImageUrl(product.image)" class="w-100">
       </div>
       <div class="col-8">
        <h1>{{product.title}}</h1>
        <h3>NRS {{product.price}}</h3>
        <input type="text" class="text-center col-1 mr-2 p-1 mx-2" />
        <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
        <p class="mt-4">{{product.description}}</p>
       </div>
    </div>
</template>

<script>
    export default {
        props:['id'],
        computed:{
            product(){
                return this.$store.state.product;
            }
        },
        mounted(){
            this.$store.dispatch('getProduct',this.id)
        },
        methods:{
            getImageUrl(image){
                return `http://127.0.0.1:8000/storage/${image}`
            },
            addToCart(){
                this.$store.dispatch('addProductToCart',{
                    product:this.product,
                    quantity:1
                });
            }
        }
    }
</script>

<style scoped>

</style>