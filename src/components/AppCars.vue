<template>
  <div class="appCars">
      <CarList  :listOfCars= 'listOfCars'/>
  </div>
</template>

<script>
import CarList from './CarList.vue'
import { cars } from '../services/CarsService'
export default {
    
  name: 'AppCars',
    components: {
        CarList
    },

    data() {
        return {
            listOfCars: []
        }
    },
     beforeRouteEnter(to,from,next) {
        cars.getAll().then( response => {
            next( vm => {
                vm.listOfCars = response.data
            })
        }).catch(error => console.log(error))
    }

   
       
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
