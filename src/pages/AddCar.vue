<template>
  <div id="AddCar">
    <CarForm :newCar="newCar" :titles="titles"  @submit='submit' @reset='reset' />
  </div>
</template>

<script>
import { cars } from "../services/CarsService";
import CarForm from "../components/CarForm.vue";

export default {
  name: "AddCar",
  components: {
    CarForm
  },

  data() {
    return {
      typeOfEngines: ["diesel", "petrol", "electric", "hybrid"],
      titles: {
        title: "Add new car",
        buttonTitle: "Add"
      },
      newCar: this.reset()
    };
  },

  methods: {
    submit() {
      this.$route.params.id ? this.editCar() : this.addNewCar();
    },

    addNewCar() {
      cars.add(this.newCar).then(this.$router.push({ name: "cars" }));
    },
    editCar() {
      cars.edit(this.newCar).then(() => {
        this.$router.push("/cars");
      });
    },

    reset() {
      return (this.newCar = {
        brand: "",
        model: "",
        year: 1990,
        maxSpeed: 0,
        numberOfDoors: 0,
        isAutomatic: true,
        engine: "diesel"
      });
    }
  },

  created() {
    if (this.$route.params.id) {
      (this.titles.title = "Edit car"), (this.titles.buttonTitle = "Edit");
      cars
        .get(this.$route.params.id)
        .then(response => (this.newCar = response.data));
    }
  },

  beforeRouteLeave: function(to, from, next) {
    if (this.$route.params.id) {
      (this.titles.title = "Add car"), (this.titles.buttonTitle = "Add");
      this.reset();
      next();
    }
    next();
  }
};
</script>

<style>
.form-group {
  width: 50%;
  margin: auto;
}
</style>
