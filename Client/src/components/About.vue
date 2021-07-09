<template>
    <header class="header_section header_inner">
        <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="/">
                <router-link to="/"> Carstore </router-link>
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


    <!-- about section -->

    <section class="about_section layout_padding">
        <div class="container  ">
            <div class="row">
                <div class="col-md-6 ">
                    <div class="img-box">
                        <img src="../assets/images/about-img.png" alt="">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="detail-box">
                        <div class="heading_container">
                            <h2>
                                About Us
                            </h2>
                        </div>
                        <p>
                            Words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                            chunks </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- end about section -->

    <!-- info section -->

    <section class="info_section ">
        <div class="info_container ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="info_contact ">
                            <div class="row">
                                <div class="col-md-3">
                                    <a href="#" class="link-box">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                      Location
                    </span>
                                    </a>
                                </div>
                                <div class="col-md-5">
                                    <a href="#" class="link-box">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                      Call +01 1234567890
                    </span>
                                    </a>
                                </div>
                                <div class="col-md-4">
                                    <a href="#" class="link-box">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                      demo@gmail.com
                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5  col-lg-3 mx-auto">
                        </div>
                    </div>
                </div>
                <div class="info_logo">
                    <a class="navbar-brand" href="index.html">
                        <span>
              CarStore
            </span>
                    </a>
                </div>
                <div class="social-box">
                    <a href="">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
    </section>
</template>
<script>
export default {
    name:'About'
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
}
</style>