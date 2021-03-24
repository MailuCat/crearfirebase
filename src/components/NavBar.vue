<template>
 <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <router-link class="nav-link" to='/listaballenas'>Lista de Ballenas</router-link>
                        </li>
                         <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'Administrar'}">Datos</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to='/login'>Login</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to= '/registrate'>Registrate</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to='/editar/:id'>Editar</router-link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" :class="activandoSout"  href="#" tabindex="-1" :disabled="existeUser" @click="signOut"> Sign Out</a>
                        </li>
            </ul>
             </div>
        </div>
     </nav>
     </div>
</template>

<script>
import firebase from 'firebase';
import {mapGetters} from 'vuex';
export default {
    name: "NavBar",
    computed: {
        ... mapGetters (['enviandoUser']),
        
        existeUser(){
            return ! this.enviandoUser;
        },

        activandoSout(){
            return this.existeUser ? 'disabled': '';
        }
    },
    methods:{
        signOut() { 
            firebase.auth().signOut().then(() => {
                console.log("Ciere de sesión")
                  this.$router.push({name:'Home'});
            }).catch((error) => {
                    console.error(error);
            });
        }
    }

}
</script>

<style>

</style>