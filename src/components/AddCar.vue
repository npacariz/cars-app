<template>
  <div id="AddCar">
    <h1>{{title}}</h1>
      <form @submit.prevent = 'submit()'>
          <div class="form-group">
            <label for="brand">Brand</label>
            <input type="text" class="form-control" id="brand" v-model='NewCar.brand' required minlength="2">
          </div>
          <div class="form-group">
            <label for="brand">Model</label>
            <input  type="text" class="form-control" id="brand"  v-model='NewCar.model' required minlength="2" >
          </div>
          <div class="form-group">
            <label for="year">Select year</label>
            <select class="form-control" id="year" v-model='NewCar.year' required>
                <option v-for="year in getCurrentYear()" v-if="year >= 1990" :key= 'year' :value="year">{{ year }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="maxSpeed">maxSpeed</label>
            <input type="number" class="form-control" id="maxSpeed"  v-model='NewCar.maxSpeed'>
          </div>

           <div class="form-group">
            <label for="maxSpeed">numberOfDoors</label>
            <input type="number" class="form-control" id="numberOfDoors"  v-model='NewCar.numberOfDoors' required>
          </div>

           <div class="form-group" required>
            <label for="maxSpeed">isAutomatic</label>
            <input type="checkbox" class="form-control" id="isAutomatic"  v-model='NewCar.isAutomatic' required>
          </div>
          <br>
          <div class="form-group" required> 
            <div v-for='engine in typeOfEngines' :key='engine'>
              <input type="radio" id="one" :value='engine' v-model="NewCar.engine">
              <label for="one">{{engine}}</label>
              <br>
            </div>
         </div>  

          <button class='btn btn-success' type='submit'>{{button}}</button>
    </form>
          <button class='btn btn-danger' @click="reset()">Reset</button>
          <button class='btn btn' @click="preview()">Preview</button>

  </div>
</template>

<script>
import { cars } from '../services/CarsService'

export default {
  name: 'AddCar',
  
  data() {
    return {
      typeOfEngines: ['diesel', 'petrol', 'electric', 'hybrid'],
      title: "Add new car",
      button: "Add",
      NewCar: {
        brand: '',
        model: '',
        year: 0,
        maxSpeed: 0,
        numberOfDoors: 0,
        isAutomatic: false,
        engine: 'Not Selected',
      }
    }
  },

  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },


    submit() {
      this.$route.params.id? this.editCar() : this.addNewCar()
    }, 

    addNewCar() {
      cars.add(this.NewCar)
      .then( 
        this.$router.push('/cars'))
    },
    editCar() {
        cars.edit(this.NewCar)
       .then(() => {
        this.$router.push('/cars')})
      
    },
    
    preview() {
      alert(`
      Brand: ${this.NewCar.brand} 
      Model: ${this.NewCar.model}
      Year: ${this.NewCar.year}
      Max Speed: ${this.NewCar.maxSpeed}
      Number of doors: ${this.NewCar.numberOfDoors}
      Automatic: ${this.NewCar.isAutomatic}
      Engine: ${this.NewCar.engine}
      `)
    },

     reset() {
      this.NewCar = {
        brand: '',
        model: '',
        year: 0,
        maxSpeed: 0,
        numberOfDoors: 0,
        isAutomatic: false,
        engine: 'Not Selected',
      }
    },

},

computed: {
  checkId: {
    // getter
    get: function () {
     if(this.$route.params.id){
       conosle.log('get')
     }
      
    },
 
    set: function () {
      if(!this.$route.params.id){
      conosle.log('set')
     }
    }  
  }
},

created() {
       if(this.$route.params.id){
        this.title = "Edit car",
        this.button = 'Edit'
        cars.get(this.$route.params.id)
        .then(response => this.NewCar = response.data)
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
