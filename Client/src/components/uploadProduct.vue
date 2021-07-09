<template>
    <div class="main">
    <form @submit.prevent="uploadpro" enctype="multipart/form-data">
    <h2>Upload Product Page</h2>
    <p class="message" v-show="Completed">
        Product Completed Uploaded
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
        <input 
        type="file" 
        accept="image/*"
         @change="selectfile" 
         ref="file" 
         class="photo-input" /> 
    </p>
     <p>
    <button class="Upload-Button"> Upload</button>
    </p>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
    export default {
        data(){
            return{
                file:'',
                price:'',
                model:'',
                name:'',
                Description:'',
                Completed:false,
            };
        },
        methods:{
            ...mapActions(['fetchProduct']),
            selectfile(){
                this.file = this.$refs.file.files[0];
                console.log(this.file);
            },
            async uploadpro(){
                const formData = new FormData();
                formData.append('file',this.file);
                formData.append('price',this.price);
                formData.append('model',this.model);
                formData.append('name',this.name);
                formData.append('description',this.description);
                if(formData){
                    this.Completed = true;
                    await axios.post('http://localhost:3000/api/products/upload',formData)
                }else{
                    this.Completed = false;
                    console.log('Error Can not upload');
                }
            }
        },
        computed:{
            ...mapGetters(['getProducts'])
        },
        created(){
            this.fetchProduct();
        }
    }
</script>

<style>
label {
    margin-top: 50px;
    display: inline-block;
    margin-inline: center;
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
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>