<template>
    <div class="main">
    <form @submit.prevent="editPro($route.params.id)"  enctype="multipart/form-data">
    <h2>Edit Product Page</h2>
    <p class="message" v-show="Completed">
        Product Completed Edited
    <router-link to="/admin/product">Check the Products</router-link>
    </p>
    <label>Product Price:</label>
    <input type="text" v-model="price" placeholder="Price" />
    <p>
    <label>Model:</label>
    <input type="text" v-model="model" placeholder="Model" />
    </p>
     <p>
    <label>Name:</label>
    <input type="text" v-model="name" placeholder="Name" />
    </p>
     <p>
    <label>Description: </label>
    <input type="text" v-model="description" placeholder="Description" />
    </p>
     <p>
    <button class="Upload-Button">Submit</button>
    </p>
    </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        data(){
          return{
            price:'',
            model:'',
            name:'',
            description:'',
            Completed:false,
          };
        },
        methods:{
          ...mapActions(['fetchProduct','updateProduct']),
          editPro(id){
            const objdata = {
              _id: id,
              price:this.price,
              model:this.model,
              name:this.name,
              description:this.description
            };
            this.Completed = true;
            this.updateProduct(objdata);
          }
        },
        computed:{
          ...mapGetters(['getProducts'])
        },
        created() {
          const productId = this.$router.params.id;
          const productsingle = this.this.getProduct.find(product => product._id === productId);

          this.price  = productsingle.name;
          this.model  = productsingle.model;
          this.name = productsingle.name;
          this.description = productsingle.description;
        },
    };
</script>

<style>
label {
    margin-top: 50px;
    display: inline-block;
    float: center;
    clear: center;
    width: 200px;
    text-align: center; 
}
input, button, select, optgroup, textarea {
  display: inline-block;
  float: center;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin: 10px 0 30px 0;
}
input[type='text'],
select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid beige;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>