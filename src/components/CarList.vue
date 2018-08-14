<template>
  <div class="listCars">
      <h1>List of Cars</h1>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Max speed</th>
                    <th scope="col">Automatic</th>
                    <th scope="col">Engine</th>
                    <th scope="col">Number of doors</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='car in listOfCars' :key='car.id'>
                    <th scope="row">{{car.brand}}</th>
                    <td>{{car.model}}</td>
                    <td>{{car.year}}</td>
                    <td>{{car.maxSpeed}}</td>
                    <td>{{car.isAutomatic}}</td>
                    <td>{{car.engine}}</td>
                    <td>{{car.numberOfDoors}}</td>
                    <td><router-link class='btn btn-warning' :to="{name:'edit', params: {id: car.id}}">Edit</router-link></td>    
                    <td><button @click='deleteCar(car.id)' class='btn btn-danger'>Delete</button></td>      
                </tr>
            </tbody>
        </table>
 

  </div>
</template>

<script>
import { cars } from '../services/CarsService'

export default {
  name: 'CarList',
  props:['listOfCars'],
  methods: {
      deleteCar(id){

        if(confirm('Are you shure too delete this contact')) {
            cars.delete(id)
            .then(()=> {
            this.$emit('deleteCar', id )
            this.$router.push('/cars')
            })
        }
         
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
