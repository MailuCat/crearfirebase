<template>
  <div>
    <div class="container">
      <h1>Login</h1>
    <form @submit.prevent="login"> 
        <div class="form-group">
          <label for="exampleInputEmail1">Correo electrónico</label>
          <input type="email" class="form-control" v-model="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" v-model="password">
        </div>
           <button type="submit" class="btn btn-primary mt-5">Grabar</button>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return{
      email: '',
      password: ''
    }
  },
  
  methods: {
    login() {
      if (this.email && this.password.length >=6) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((user) => {
              console.log(user);
              console.log("login");
              this.$router.push({name:'Home'});
            })
            .catch((error) => {
              console.log(error.code)
              console.log (error.message)
             
            });
      } else {
          console.log("no se puede");
      }
           
    },
  },
}
</script>
