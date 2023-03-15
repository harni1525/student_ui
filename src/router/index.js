import Vue from "vue";
import VueRouter from "vue-router";
import SalaryCalculation from "../components/SalaryCalculation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "salaryCalculation",
    component: SalaryCalculation
  },
  {
    path: "/crud",
    name: "crud",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/crud.vue")
  },
  {
    path: "/BloodDonation",
    name: "BloodDonation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/BloodDonation.vue")
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
