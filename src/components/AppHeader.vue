<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">
                <div class="nav navbar-nav">
                    
                    <router-link to="/" class="nav-item nav-link active">Home</router-link>
                    <a class="nav-item nav-link" href="#">Product</a>
                    <router-link to="/register" class="nav-item nav-link active">Signup</router-link>
                </div>
                <div>
                    <div class="dropdown open">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            {{cartItemCount }} cart
                        </button>
                        <div @click="$event.stopPropagation()" class="dropdown-menu p-2" style="min-width: 320px; right: 0; left: auto;" aria-labelledby="triggerId">
                            <mini-cart/>
                        </div>

                    </div>
                </div>
            </div>

        </nav>
    </div>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
    components: {
        MiniCart
    },
    computed:{
        cartItemCount(){
            return this.$store.getters.cartItemCount;
        }
    },
    name: 'AppHeader'
}
</script>

<style scoped></style>