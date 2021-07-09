<template>
    <div class="col-md-4">
              <div class="thumbnail">
                <img :src="product_img" alt="" class="img-responsive">
                <div class="caption">
                  <h4 style="font-size: 30px">${{price}}</h4>
                  <p style="font-size: 30px">{{name}}</p>
                  <p style="font-size: 30px">Model:{{model}}</p>
                  <p>Decription:</p>
                  <p>{{description}}</p>
                  <p></p>
                </div>
                <div class="ratings">
                </div>
                <div class="space-ten"></div>
                <div class="btn-ground text-center">
                    <button type="button" class="btn btn-primary"><router-link to="/Contact">
                    <div class="text-button">Contact Us</div></router-link></button>
            </div>
            </div>
            </div>
</template>

<script>
export default {
  name:'car',
  props:{
    price:Number,
    model:String,
    name:String,
    description:String,
    product_img:String
  }
}
</script>
<style>
a {
    color: black;
    text-decoration: none;
    background-color: transparent;
}
.text-button {
    color: #fff;
}
a {
    color: white;
    text-decoration: none;
}
</style>
