<template>
    <div >
        <div v-for="item in cart" :key="item.product">
            <div class="px-2 d-flex justify-content-between " >
                <div >
                    <strong>{{item.product.title}}</strong>
                    <br />
                    {{item.quantity}} x NRS {{item.product.price}}
                </div>
                <div>
                    <a href="#" class="badge bg-secondary" @click.prevent="removeProductFromCart(item.product)">remove</a>
                </div>
                
            </div>
            <hr/>
        </div>
        
        <div class="d-flex justify-content-between">
            <span>Total: NRS {{cartTotalPrice}}</span>
            <a href="#" style="color: #3d6caf;" @click.prevent="clearCart">Clear Cart</a>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        cart(){
            return this.$store.state.cart;
        },
        cartTotalPrice(){
            return this.$store.getters.cartTotalPrice;
        }
    },
    mounted(){
        this.$store.dispatch('getCartItems');
    },
    methods:{
        removeProductFromCart(product){
            this.$store.dispatch('removeProductFromCart',product);
        },
        clearCart() {
        this.$store.dispatch('clearCart'); 
    }
    }

}
</script>

<style scoped></style>