<template>
<!-- header section strats -->
  <header class="header_section header_inner">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
      <router-link to="/"> CarStore </router-link>
        <a class="navbar-brand" href="/">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ml-auto">
            <li class="nav-item active">
              <router-link to="/"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/About"> About </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/carlist"> List </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog"> Blog </router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li> -->
            <li class="nav-iteam">
              <router-link to="/login"> Login </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <!-- end header section -->

  <section class="blog_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Latest From Blog
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="img-box">
              <img src="../assets/images/b1.jpg" alt="">
              <h4 class="blog_date">
                29 <br>
                June
              </h4>
            </div>
            <div class="detail-box">
              <h5>
                Look even slightly believable. If you are
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
                <router-link to="/blogNews">Read More</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="img-box">
              <img src="../assets/images/b2.jpg" alt="">
              <h4 class="blog_date">
                28 <br>
                June
              </h4>
            </div>
            <div class="detail-box">
              <h5>
                Anything embarrassing hidden in the middle
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
                <router-link to="/blogNews"> Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name:'blog'
}
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
a {
  color: #42b983;
  font-size: 20px;
}
</style>