<template>
  <div>
    <product-list />
  </div>
 
</template>

<script>
// @ is an alias to /src

import ProductList from "../components/ProductList"
export default {
  name: 'HomeView',
  components: {
    ProductList
  }
}
</script>
