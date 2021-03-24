<template>
  <div class="container mt-5">
    
      <div class="alert alert-primary" role="alert">
        Bienvenido {{enviandoUser.email}}
      </div>
           <h5 class="card-title">Imagen Api</h5>
          <div class="card" style="width: 18rem;">
            <img :src="enviandoAPI.image" class="card-img-top" alt="Foto">
          <div class="card-body">
            <p class="card-text">Respuesta: {{enviandoAPI.answer}}</p>
         </div>
      </div>
      
      
  </div>
</template>


<script>

import {mapGetters} from 'vuex';
export default {
  name: 'ListaBallenas',

  computed: {
 
    ... mapGetters (['enviandoUser',  'enviandoAPI']),
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
