<template>
  <div>
    <NavBar/>
    <div>
    <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import firebase from 'firebase'

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        
          this.$store.dispatch('user', user)
          
        } else {
          this.$store.dispatch('user', null)
          
        }
      });
      
      this.$store.dispatch('llamarAPI');
      this.$store.dispatch('getBallenas');
  },
  }

</script>


<style lang="scss">

 
</style>
