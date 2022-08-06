import { createStore } from 'vuex'

export default createStore({
  state: {
    listadoOrdenes: [], 
    detalleOrden: {}
  },
  mutations: {
    setListadoOrdenes(state, payload) {
      state.listadoOrdenes = payload;
    }
  },
  actions: {
    async getListadoOrdenesApi({commit}) {
      try {
        const response = await fetch('db.json');
        const data = await response.json();
        //* llamar a un mutation
        commit('setListadoOrdenes', data.ordenes);
      } catch (error) {
        throw error;
      }
    },
    async ordenesFiltradas({dispatch, commit, state}, filtroObj) {
      console.log('Ordenes-Filtradas');
      console.log(filtroObj);
      if(filtroObj.cantidadProductos && filtroObj.estado) {
        const newListFiltrada = state.listadoOrdenes.filter( orden => (orden.cant_productos == filtroObj.cantidadProductos && orden.estado == filtroObj.estado));
        console.log(newListFiltrada);
        commit('setListadoOrdenes', newListFiltrada);
      } else {
        await dispatch('getListadoOrdenesApi');
        return;
      }
   

    }
  },
  getters: {
  },
  modules: {
  }
})
