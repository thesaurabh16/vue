import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        products:[],
        product:null,
        cart:JSON.parse(localStorage.getItem('cart')) || []
    },
    getters: {
        cartItemCount(state){
            return state.cart.length;
        },
        cartTotalPrice(state){
            let total = 0;
            state.cart.forEach(item =>{
                total += item.product.price * item.quantity;
            })
            return total;
        }
        
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setProduct(state, product) {
            state.product = product;
        },
        ADD_TO_CART(state,{product, quantity}){
            if (!product) return; 
            let productInCart = state.cart.find(item =>{
                return item.product.id === product.id;
            });
            if(productInCart){
                productInCart.quantity +=quantity;
                return;
            }else{
                state.cart.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            
        },
        SET_CART(state,cartItems){
            state.cart = cartItems.filter(item=>item.product);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        REMOVE_PRODUCT_FROM_CART(state,product){
            if (!product) return; 
            state.cart = state.cart.filter(item => item.product.id !== product.id);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        CLEAR_CART(state) {
            state.cart = [];  
            localStorage.removeItem('cart'); 
        }
    },
    actions: {
        async getProducts({commit}){
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products'); 
                commit('setProducts', response.data); 
            } catch (error) {
                console.error('Error fetching products:',  error.response ? error.response.data : error.message);
            }
        },
        async getProduct ({commit},productId){
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
                commit('setProduct',response.data); 
            }catch (error) {
                console.error('Error fetching product:',  error.response ? error.response.data : error.message);
            }
        },
         addProductToCart({commit},{product, quantity}){
            commit('ADD_TO_CART', { product, quantity });
        },
        getCartItems({commit}){
            let cartData = JSON.parse(localStorage.getItem('cart')) || [];
                commit('SET_CART',cartData); 
           
        },
         removeProductFromCart({commit},product){
            commit('REMOVE_PRODUCT_FROM_CART',product);
        },
        clearCart({ commit }) {
            commit('CLEAR_CART'); 
        }
    },
     
});

export default store;