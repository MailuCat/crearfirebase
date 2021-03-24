import firebase from 'firebase';
import Vue from 'vue'
import Vuex from 'vuex';
/*imp axios from 'axios'  se axios si no implementamos el archivo apiConfig*/
import {conexApi} from '../services/apiConfig';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    respuestaAPI: {},
    ballenas: [],
    huemul: [],
  },
  getters:{
    enviandoUser (state){
      return state.user
    },
    enviandoAPI(state){
      return state.respuestaAPI
    },
    enviandoBallenas(state){
      return state.ballenas
    },
    enviandohuemul(state){
      return state.huemul
    },
  },
  mutations: {
    mutarUsuario(state, datoUser){
      state.user = datoUser;
    },
    mutarAPI (state, datos){
      state.respuestaAPI = datos;
    },
    mutandoBallenas(state, ballenas){
        state.ballenas = ballenas;
    },
    mutandohuemul(state, huemul){
      state.huemul = huemul;
  }
  },
  actions: {
    user ({commit}, datoUser){
      commit ('mutarUsuario', datoUser);
    },
    async llamarAPI({commit}){
      let resultado = await conexApi();
      commit('mutarAPI', resultado);
                
      /*Esté código se usa si no implementamos el archivo apiConfig para
      conectarnos a la API
      axios.get('https://yesno.wtf/api').then(respuesta => {
        console.log (respuesta.data);
        commit('mutarAPI', respuesta.data);
        }).catch(error => console.error (error)); */
    },
    getBallenas ({commit}){
      firebase.firestore().collection('ballenas').onSnapshot((result)=>{
          let datos = [];
           result.forEach (element=> {
             console.log(element.data());
             datos.push({
                idDoc: element.id,
                nombre: element.data().nombre,
                categoria: element.data().categoria,
                cantidadmaxima: element.data().cantidadmaxima,
                temporada: element.data().temporada,
                fecha : element.data().fecha,
             })
          });
          commit('mutandoBallenas', datos);
      }).catch(error=> console.error(error))
    },
    /* tiempo real*/
    getHuemules ({commit}){
      firebase.firestore().collection('huemul').onSnapshot().then(result=> {
          let datos = [];
           result.forEach (element=> {
             console.log(element.data());
             datos.push({
                idDoc: element.id,
                alimentacion: element.data().alimentacion,
             })
          });
          commit('mutandohuemul', datos);
      }).catch(error=> console.error(error))
      },
      borrarB(context,id){
        // se usa el delete para borrar un documento, se debe utilizar despues de un doc indicando el id o identificacion del documento a borrar
        firebase.firestore().collection('ballenas').doc(id)
          .delete()
          .then(()=>console.log('eliminado'))
          .catch(error => console.error(error));
      },
      grabar(context, ballenas){
        // se usa el add para agregar un nuevo documento a la base de datos, se debe usar despues de una collection
        firebase.firestore().collection('ballenas').doc(ballenas.idDoc).update({
          nombre: ballenas.nombre,
          categoria: ballenas.categoria,
          cantidadmaxima: ballenas.cantidadmaxima,
          temporada: ballenas.temporada,
          fecha: ballenas.fecha

        }).catch(error => console.error(error));
          
      },
}
})
