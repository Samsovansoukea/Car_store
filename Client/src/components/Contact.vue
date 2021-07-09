
<template>
     <section class="contact_section layout_padding2-top layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Get In <span>Touch</span></h2>
      </div>
      <div class="row">
        <div class="col-md-6 px-0">
          <div class="form_container">
            <form @submit.prevent='sendEmail'>
              <div class="form-row">
                <div class="form-group col">
                  <input type="text" class="form-control" v-model="name" name="from_name" placeholder="Your Name" required/>
                </div>
              </div>
              <!-- <div class="form-row">
                <div class="form-group col">
                  <input type="text" class="form-control" v-model="phone" placeholder="Phone Number" />
                </div>
              </div> -->
              <div class="form-row">
                <div class="form-group col">
                  <input type="email" class="form-control" v-model="email" name="email" placeholder="Email" required/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <input type="text" class="form-control" v-model="phone" name="phone" placeholder="Phone" required/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <input type="text" class="message-box form-control" v-model="message" name="message" placeholder="Message" required/>
                </div>
              </div>
              <div class="btn_box"> 
               <button type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 px-0">
          <div class="map_container">
            <div class="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      phone: '',
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_wu72gow', 'template_03j2ikd', e.target,
        'user_IwS3LJ5L7qJ4OhZMtFiC6', {
          name: this.name,
          email: this.email,
          message: this.message,
          phone:this.phone
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      this.phone = ''
    },
  }
}
</script>
<style>
a {
    color: white;
    text-decoration: none;
    background-color: transparent;
}
</style>