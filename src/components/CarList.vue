<template>
  <div class="listCars">
      <h1>List of Cars</h1>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">brand</th>
                    <th scope="col">model</th>
                    <th scope="col">year</th>
                    <th scope="col">maxSpeed</th>
                    <th scope="col">isAutomatic</th>
                    <th scope="col">engine</th>
                    <th scope="col">numberOfDoors</th>
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
                </tr>
            </tbody>
        </table>
 

  </div>
</template>

<script>

export default {
  name: 'CarList',

    props:['listOfCars']

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
