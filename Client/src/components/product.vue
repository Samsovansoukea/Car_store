<template>
    <div>
    <div class="button-header">
         <router-link to="/admin" class="sideAdmin"><button><i class="fas fa-arrow-alt-circle-left">Back</i></button></router-link>
         <router-link to="/admin/uploadProduct" class="sideAdmin"><button><i class="fas fa-arrow-alt-circle-left">Upload</i></button></router-link>
    </div>
   
        <table>
      <tr>
        <th>Price</th>
        <th>Picture</th>
        <th>Model</th>
        <th>Name</th>
        <th>Description</th>
       </tr>
      <tr  v-for="car in getProducts" :key="car._id">
      <td>
          {{car.price}}
      </td>
      <td>
        <img :src="car.product_img" width="100">
      </td>
      <td>
          {{car.model}}
      </td>
      <td>
          {{car.name}}
      </td>
      <td>
          {{car.description}}
      </td>
      <td><button @click="deleteproduct(car._id)">Delete</button></td>
      </tr>
    </table>
    </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
    export default {
        methods:{
            ...mapActions(['fetchProducts','DeleteProduct']),
            deleteproduct(id){
                this.DeleteProduct(id).then(()=>{
                    this.$route.go()
                })
            } 
        },
        computed:{
            ...mapGetters(['getProducts'])
        },
          created(){
            this.fetchProducts();
    }
    }
</script>

<style >
p {
    margin-top: 1px;
    margin-bottom: 1px;
    display: block;
    margin-block-start: 1px;
    margin-block-end: 1px;
    text-align: justify;
}
</style>