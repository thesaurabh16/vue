<template>
    <div class="col-2 mx-3 mt-3">
        <div class="card h-100 text-left">
           <img class="w-100" :src="getImageUrl(product.image)"  alt="image" />
          <div class="card-body">
            <h4 class="card-title">
                <router-link :to="{name:'Product',params:{id:product.id}}">{{product.title}}</router-link>
            </h4>
            <strong>NRS {{product.price}}</strong>
            <p class="card-text">{{ product.description }}</p>
          </div>
          <div class="px-4 pb-3">
            <button class="btn btn-secondary" @click="addToCart()">Add to cart</button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ProductCard',
        props:["product"],
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