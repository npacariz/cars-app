<template>
  <div class="CarForm">
        <h1>{{titles.title}}</h1>
      <form @submit.prevent="submit()">
          <div class="form-group">
            <label for="brand">Brand</label>
            <input type="text" class="form-control" id="brand" v-model='newCar.brand' required minlength="2">
          </div>
          <div class="form-group">
            <label for="brand">Model</label>
            <input  type="text" class="form-control" id="brand"  v-model='newCar.model' required minlength="2" >
          </div>
          <div class="form-group">
            <label for="year">Select year</label>
            <select class="form-control" id="year" v-model='newCar.year' required>
                <option v-for="year in getCurrentYear()" v-if="year >= 1990" :key= 'year' :value="year">{{ year }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="maxSpeed">maxSpeed</label>
            <input type="number" class="form-control" id="maxSpeed"  v-model='newCar.maxSpeed'>
          </div>

           <div class="form-group">
            <label for="maxSpeed">numberOfDoors</label>
            <input type="number" class="form-control" id="numberOfDoors"  v-model='newCar.numberOfDoors' required>
          </div>

           <div class="form-group" required>
            <label for="maxSpeed">isAutomatic</label>
            <input type="checkbox" class="form-control" id="isAutomatic"  v-model='newCar.isAutomatic'>
          </div>
          <br>
          <div class="form-group" required> 
            <div v-for='engine in typeOfEngines' :key='engine'>
              <input type="radio" id="one" :value='engine' v-model="newCar.engine">
              <label for="one">{{engine}}</label>
              <br>
            </div>
         </div>  
         
        <button class='btn btn-success' type='submit'>{{titles.buttonTitle}}</button>      
    </form>
        <button class='btn btn-danger' @click="reset()" >Reset</button>
        <button class='btn btn' @click="preview">Preview</button>
        
 

  </div>
</template>

<script>
import { cars } from "../services/CarsService";
export default {
  name: "CarForm",
  props: {
    newCar: Object,
    titles: Object
  },

  data() {
    return {
      typeOfEngines: ["diesel", "petrol", "electric", "hybrid"]
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
    submit() {
      this.$emit("submit");
    },
    reset() {
      this.$emit("reset");
    },
    preview() {
      alert(`
            Brand: ${this.newCar.brand} 
            Model: ${this.newCar.model}
            Year: ${this.newCar.year}
            Max Speed: ${this.newCar.maxSpeed}
            Number of doors: ${this.newCar.numberOfDoors}
            Automatic: ${this.newCar.isAutomatic}
            Engine: ${this.newCar.engine}
      `);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
