<template>
  <div>
    <div class="container">
      <h1>Administrar Datos</h1>
       <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" 
       data-bs-target="#exampleModal">
        Agregar
      </button>
       <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Temporada</th>
            <th scope="col">Categoría</th>
            <th scope="col">Población Máxima</th>
            <th scope="col">Fecha</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for= "(item, index) in enviandoBallenas" :key="index">
             <td> {{index+1}}</td>
            <td>{{item.nombre}}</td>
            <td>{{item.temporada}}</td>
            <td>{{item.categoria}}</td>
            <td> {{item.cantidadmaxima}}</td>
            <td>{{item.fecha}}</td>
            <td> <button class="btn btn-primary" @click="editarBallenas(item.idDoc)">Editar</button></td>
            <td> <button class="btn btn-primary" @click="borrarB(item.idDoc)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>

        <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
            aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregar Ballena</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
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
                        <span class="input-group-text" id="fecha">Último Catastro</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" v-model="fecha">
                      </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click.prevent="guardar">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex' 
import firebase from 'firebase'

export default {
    name: 'Administrar',
    data(){
      return{
        nombre: '',
        temporada:'',
        categoria:'',
        cantidadmaxima:'',
        fecha: ''
      }
      
    },

    computed:{
    ... mapGetters ([ 'enviandoBallenas'])
    },
   methods: {
    guardar(){
      // se usa el add para agregar un nuevo documento a la base de datos, se debe usar despues de una collection
      if( this.nombre && this.temporada && this.categoria && this.cantidadmaxima && this.fecha) {
        firebase.firestore().collection('ballenas').add({
        idDoc: this.id,
        nombre: this.nombre,
        temporada: this.temporada,
        categoria: this.categoria,
        cantidadmaxima: this.cantidadmaxima,
        fecha: this.fecha,
        }).then(resp => console.log(resp)).catch(error => console.error(error));
     
     } else {
        console.log("no");
      }
    },
      borrarB(id){
        this.$store.dispatch('borrarB',id);
      },
      editarBallenas(idDoc){
            this.$router.push({name: 'Editar', params: {id: idDoc}});
        },
      },
}
  
</script>

<style>

</style>