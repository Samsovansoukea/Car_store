<template>
  <router-link to="/admin" class="sideAdmin"><button><i class="fas fa-arrow-alt-circle-left">Back</i></button></router-link>
  <div>
    <table>
        <tr>
        <td>Name</td>
        <td>Email</td>
        </tr>
        <tr v-for="user in getUsers" v-bind:key="user._id">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td><button @click="deleteuser(user._id)">Delete</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'User',
  methods: {
    ...mapActions(['fetchUsers','DelteUser']),
    deleteuser(id){
      this.DelteUser(id).then(() =>{
        this.$router.go()
      })
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}
table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}
table th,
table td {
  padding: 0.625em;
  text-align: center;
}
table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.btn-active,
.btn-ban {
  border: none;
  background: none;
  padding: 0;
  font-size: 17px;
}
.btn-active {
  margin-right: 3px;
  color: rgb(151, 252, 0);
}
.btn-active:hover,
.btn-ban:hover {
  color: black;
}
.btn-ban {
  color: red;
}
@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table caption {
    font-size: 1.3em;
  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
  .sideAdmin { 
    margin-left: 150px;
  } 
}
</style>