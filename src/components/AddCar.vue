<template>
  <div id="AddCar">
      <form @submit.prevent>
          <div class="form-group">
            <label for="brand">Brand</label>
            <input type="text" class="form-control" id="brand" v-model='NewCar.brand'>
          </div>
          <div class="form-group">
            <label for="brand">Model</label>
            <input type="text" class="form-control" id="brand"  v-model='NewCar.model'>
          </div>
          <div class="form-group">
            <label for="year">Select year</label>
            <select class="form-control" id="year" v-model='NewCar.year'>
                <option v-for="year in getCurrentYear()" v-if="year >= 1990" :key= 'year' :value="year">{{ year }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="maxSpeed">maxSpeed</label>
            <input type="number" class="form-control" id="maxSpeed"  v-model='NewCar.maxSpeed'>
          </div>

           <div class="form-group">
            <label for="maxSpeed">numberOfDoors</label>
            <input type="number" class="form-control" id="numberOfDoors"  v-model='NewCar.numberOfDoors'>
          </div>

           <div class="form-group">
            <label for="maxSpeed">isAutomatic</label>
            <input type="checkbox" class="form-control" id="isAutomatic"  v-model='NewCar.isAutomatic'>
          </div>
          <br>
          <div class="form-group"> 
            <div v-for='engine in typeOfEngines' :key='engine'>
            <input type="radio" id="one" :value='engine' v-model="NewCar.engine">
            <label for="one">{{engine}}</label>
            <br>
            </div>
         </div>  

          <button class='btn btn-success' @click = "addNewCar()">Add</button>
    </form>
    

  </div>
</template>

<script>
import { cars } from '../services/CarsService'

export default {
  name: 'AddCar',
  
  data() {
    return {
      typeOfEngines: ['diesel', 'petrol', 'electric', 'hybrid'],
      NewCar: {
        isAutomatic: false
      }
    }
  },

  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
    addNewCar() {
      cars.add(this.NewCar)
      .then( this.$router.push('/cars'))
      .catch(error => console.log(error))

     
    }
}

}
</script>

<style>
.form-group {
  width: 50%;
  margin: auto;
}
</style>
