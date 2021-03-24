<template>
    <div> 
        <h1 class="text-center mt-5">Editando a: {{nombre}}</h1>
    <div>
      <div class="container mt-5">
        <form @submit.prevent="grabar">
        <div class="input-group mb-3">
                        <span class="input-group-text" id="nombre">Nombre</span>
                        <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" v-model="nombre">
                      </div>
                     <div class="input-group mb-3">
                        <span class="input-group-text" id="temporada">Ubicación</span>
                        <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" v-model="temporada">
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="categoria">Categoría</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" v-model="categoria">
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="poblacionmaxima">Población máxima</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" v-model="cantidadmaxima">
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="fecha">Fecha último catastro</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" v-model="fecha">
                      </div>
                      <button type="submit" class="btn btn-primary m-5">Grabar</button>  
                       <button type="button" class="btn btn-primary m-5" @click="$router.go(-1)">Regresar</button>
                </form>
                     
      </div>
    </div>
</div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Editar',
    props: ['id'],
        data() {
            return {
                nombre: '',
                temporada:'',
                categoria:'',
                cantidadmaxima:'',
                fecha: ''
                
            }
        },
    computed: {
    ... mapGetters (['enviandoBallenas']),
    },
    mounted() {
        let ballenas = this.enviandoBallenas.find(ballenas => ballenas.idDoc === this.id);
         if (ballenas !== undefined) {
            this.nombre = ballenas.nombre;
            this.temporada = ballenas.temporada,
            this.categoria = ballenas.categoria,
            this.cantidadmaxima = ballenas.cantidadmaxima,
            this.fecha = ballenas.fecha

        } else {
              setTimeout(()=>{
                this.$router.push({name: 'Administracion'});
            },1000);
        }  
    },
    methods:{
      grabar(){
      // se usa el add para agregar un nuevo documento a la base de datos, se debe usar despues de una collection
      if( this.nombre && this.categoria) {
        let ballenas = {
          nombre: this.nombre,
          temporada: this.temporada,
          categoria: this.categoria,
          cantidadmaxima : this.cantidadmaxima,
          fecha : this.fecha,
          idDoc: this.id
        };
         this.$store.dispatch('grabar',ballenas);
                setTimeout(()=>{
                    this.$router.push({name: 'Administrar'});
                },1000);
            } else {
                console.log("No se puede actualizar el curso");
            }
        
      },

    }
}
</script>

<style>

</style>