<template>
  <div id="select-employee">
    <ul class="list-group mt-5">
      <li class="list-group-item active text-center">
        {{ firstName }} {{ lastName }}
      </li>
      <li class="list-group-item">ID: {{ employee_id }}</li>
      <li class="list-group-item">Gender: {{ gender }}</li>
      <li class="list-group-item">Birthday: {{ birthday }}</li>
      <li class="list-group-item">E-mail: {{ emailAddress }}</li>
    </ul>
    <router-link to="/" class="btn btn-secondary m-1">
      Back
    </router-link>
    <button @click="deleteEmployee" class="btn btn-danger m-3">
      Delete
    </button>
    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{
          name: 'edit-employee',
          params: { employee_id: this.employee_id },
        }"
        class="btn-floating
            btn-large blue"
      >
        <i class="fas fa-edit"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "select-employee",
  data() {
    return {
      employee_id: null,
      firstName: null,
      lastName: null,
      gender: null,
      birthday: null,
      emailAddress: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    //before entering the route, we fetch the employee
    db.collection("employees")
      .where("employee_id", "==", to.params.employee_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.employee_id = doc.data().employee_id;
            vm.firstName = doc.data().firstName;
            vm.lastName = doc.data().lastName;
            vm.gender = doc.data().gender;
            vm.birthday = doc.data().birthday;
            vm.emailAddress = doc.data().emailAddress;
          });
        });
      });
  },
  methods: {
    deleteEmployee() {
      if (confirm("Are you sure?")) {
        db.collection("employees")
          .doc(this.employee_id)
          .delete();
        this.$router.push("/");
      }
    },
  },
};
</script>
