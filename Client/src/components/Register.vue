<template>
<form @submit.prevent="RegisterUser">  
  <div class="container" id="myContainer">
      <div class="row w-100">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex">
            <div class="card-body">
              <h5 class="card-title text-center">Resigter</h5>
                <div class="form-label-group">
                   <label for="name">Your name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Name">
                </div>
                <p class="message" v-show="uservalid">
                    You  must have at less 3 charaters, From Letter
                </p>
                <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"  v-model="form.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                            </div>
                <div class="form-label-group">
                  <label for="inputPassword">Password</label>
                  <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Password" required>
                </div>
                <p class="message" v-show="passwordvalid">
                    * Invalid password, at less 8 characters with lowercase, uppercase,
                    and number
                  </p>
                 <div class="form-group">
                                <button class="btn btn-primary" @click="submit">Signup</button>
                  </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:"Register",
  data(){
    return{
      form:{ 
      name:"",
      email:"",
      password:""
      },
      uservalid:false,
      passwordvalid:false
    };
  },
  methods: {
    ...mapActions(['signUp']),
    Namecheck(c){
      if(c.length > 3){
        this.uservalid = false;
        return true;
      }
      this.uservalid = true;
      console.log(c);
      return false;

    },
    
    Passwordcheck(c){
      if (
        c.length > 8 &&
        c.match(/[A-Z]/g) &&
        c.match(/[0-9]/g) &&
        c.match(/[a-z]/g)
      ){
        this.passwordvalid = false;
        console.log(c);
        return true
      }
      this.passwordvalid = true;
      console.log(c);
      return false
    },
    RegisterUser(){
      if(this.Namecheck(this.form.name) && 
        this.Passwordcheck(this.form.password)){
          this.signUp(this.form).then(()=>{
            this.$router.replace({ name: 'HelloWorld' });
          });
        }else{
          console.log('Error Can not Register');
        }
    }
  },
};
</script>
<style>
</style>