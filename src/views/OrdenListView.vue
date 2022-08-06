<template>
  <h1>Ordenes de compra</h1>

  <div class="container">
    <div class="row">
      <div class="col">
        <form class="mt-5" @submit.prevent="orFilter({ estado: estado, cantidadProductos: Number(cantidadProductos)})">

          <div class="row">

            <div class="col input-group">
              <select class="form-select" v-model="estado">
                <option selected>Elige una opción</option>
                <option value="Ingresado">Ingresado</option>
                <option value="Preparacion">Preparacion</option>
                <option value="Entregado">Entregado</option>
              </select>
            </div>

            <div class="col input-group">
              <select class="form-select" v-model="cantidadProductos">
                <option selected>Elige una opción</option>
                <option value="160">160</option>
                <option value="45">45</option>
                <option value="120">120</option>
                <option value="70">70</option>
              </select>
               <button type="submit" class="btn btn-success">Buscar</button>
            </div>
           
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Monto</th>
              <th>Cantidad Product</th>
              <th>Fecha Entrega</th>
              <th>Avance</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="orden of listadoOrdenes" :key="orden.num_orden">
              <td>{{ orden.num_orden}}</td>
              <td>{{ orden.cliente}}</td>
              <td>{{ orden.monto}}</td>
              <td>{{ orden.cant_productos}}</td>
              <td>{{ orden.fecha_entrega}}</td>
              <td>
                <div class="progress">
                  <div 
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="'width:' + orden.avance_preparacion * 100 + '%'"
                  >
                     {{ orden.avance_preparacion * 100 + "%"}}
                  </div>
                </div>
              
              </td>
              <td>{{ orden.estado}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'ListadoCompra',
  data() {
    return {
      estado: '',
      cantidadProductos: 0,
    }
  },
  methods: {
    ...mapActions({
      listado: "getListadoOrdenesApi",
      orFilter: "ordenesFiltradas"
    })
  },
  computed: {
    ...mapState(["listadoOrdenes"])
  },
  created() {
    this.listado();
  }
}
</script>

<style>

</style>