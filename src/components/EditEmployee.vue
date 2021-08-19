<template>
  <div id="edit-employee">
    <h3 class="text-center m-5">Edit employee</h3>
    <form @submit.prevent="updateEmployee" id="employee-form">
      <div class="form-group mt-5">
        <label for="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          required
          class="form-control text-white bg-light"
        />
      </div>
      <div class="form-group mt-3">
        <label for="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          required
          class="form-control text-white bg-light"
        />
      </div>
      <div class="form-group mt-3">
        <label for="gender">
          Gender
        </label>
        <select
          id="gender"
          v-model="gender"
          required
          class="form-select text-white bg-light"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label for="birthday">
          Birthday
        </label>
        <br />
        <input
          class="bg-light text-white"
          type="date"
          v-model="birthday"
          required
          id="birthday"
          name="birthday"
        />
      </div>
      <div class="form-group mt-3">
        <label for="emailAddress">
          Email Address
        </label>
        <input
          type="text"
          id="emailAddress"
          v-model="emailAddress"
          required
          class="form-control text-white bg-light"
        />
      </div>
      <input
        type="submit"
        value="Edit Employee"
        class="btn btn-primary col-12 mt-3"
        id="submitBtn"
      />
      <router-link to="/" class="btn btn-secondary col-12 mt-2">
        Back
      </router-link>
    </form>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "edit-employee",
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
            vm.firstName = doc.data().firstName;
            vm.lastName = doc.data().lastName;
            vm.gender = doc.data().gender;
            vm.birthday = doc.data().birthday;
            vm.emailAddress = doc.data().emailAddress;
          });
        });
      });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employee_id = doc.data().employee_id;
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            this.gender = doc.data().gender;
            this.birthday = doc.data().birthday;
            this.emailAddress = doc.data().emailAddress;
            console.log(this.firstName);
          });
        });
    },
    updateEmployee() {
      var employeeRef = db
        .collection("employees")
        .doc(this.$route.params.employee_id);
      employeeRef
        .set(
          {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            birthday: this.birthday,
            emailAddress: this.emailAddress,
          },
          { merge: true }
        )
        .then(() => {
          this.$router.push({
            name: "select-employee",
            params: { employee_id: this.$route.params.employee_id },
          });
        });
    },
  },
};
</script>
