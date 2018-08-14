import Vue from "vue";
import VueRouter from "vue-router";
import AppCars from "../pages/AppCars.vue";
import AddCar from "../pages/AddCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/cars"
  },
  {
    path: "/cars",
    component: AppCars,
    name: "cars"
  },
  {
    path: "/add",
    component: AddCar,
    name: "addCar"
  },
  {
    path: "/edit/:id",
    component: AddCar,
    name: "edit"
  }
];

const router = new VueRouter({ mode: "history", routes });

export default router;
