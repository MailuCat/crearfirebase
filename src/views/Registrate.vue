<template>
  <div>
            <div class="container">
            <h1>Regístrate</h1>
            <form @submit.prevent="registrate"> 

                <div class="form-group">
                <label >Nombre</label>
                <input  type="name" class="form-control" v-model="displayName">
                </div>

                <div class="form-group">
                <label >Correo electrónico</label>
                <input type="email" class="form-control" v-model="email">
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
    name: 'Registrate',
     
     data (){
         return{
             displayName: '',
             email: '',
            password:''
         }
            
     },

     methods: {
         registrate() {
      if (this.email && this.displayName && this.password.length >=6) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)

            .then((user) => {
              console.log(user);
              console.log("registrado");
              this.$router.push({name:'Home'});
            })
            .catch((error) => {
              console.log(error.code)
              console.log (error.message)
             });
      } else {
          console.log("no se puede");
      }
    }
 }
}
</script>

<style>

</style>