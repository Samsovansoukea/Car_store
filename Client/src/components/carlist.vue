<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <router-link to="/"> 
          <span>CarStore</span>
        </router-link>
      </nav>
    </div>
    <div class="carlist row">
      <car  v-for="car in getProducts" :key="car._id" v-bind:price="car.price" v-bind:name="car.name" v-bind:model="car.model" v-bind:description="car.description" 
        v-bind:product_img="car.product_img"/></div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import car from "./car"
  export default {
    components:{
      car
    },
    methods :{
      ...mapActions(['fetchProducts'])
    },
    computed:{
      ...mapGetters(['getProducts'])
    },
    created(){
      this.fetchProducts();
    }
  };
</script>
<style scoped>

a[data-v-a531b0dc] {
    font-size: 20px;
    color: #42b983;
    text-decoration: none;
    background-color: transparent;
}

.btn-primary {
    color: #fff;
    background-color: white;
    border-color: #007bff;
}
a {
    color: white;
    text-decoration: none;
}
</style>
