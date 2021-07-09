<template>
<form @submit.prevent="submit">
  <div class="container" id="myContainer">
      <div class="row w-100">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex">
            <img src="../assets/images/images.jpg" alt="">
              <!-- Background image for card set in CSS! -->
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
                 <label for="inputUserame">Email</label>
                <div class="form-label-group">
                  <input type="text" id="inputUserame" class="form-control"  v-model="form.email" required/>
                </div>
                <label for="inputPassword">Password</label>
                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" v-model="form.password" required/>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button>
                <router-link to="/Register"></router-link>
                <a class="d-block text-center mt-2 small" href="/Register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</form>
</template>

<script>
import {mapActions} from 'vuex';
export default{
  name:'Login',
  data(){
    return{
      form:{
        email:'',
        password:''
      }
    };
  },
  methods:{
    ...mapActions(['Signin']),
     submit(){
      if(this.form){
        this.Signin(this.form).then(()=>{
          this.$router.replace({name:'HelloWorld'});
        });
      }
    }
  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
