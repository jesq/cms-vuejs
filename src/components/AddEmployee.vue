<template>
  <div id="add-meployee">
    <h3 class="text-center m-5">Add Employee</h3>
    <form @submit.prevent="addEmployee" id="employee-form">
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
        value="Add Employee"
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
  name: "add-employee",
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
  methods: {
    addEmployee() {
      var docRef = db.collection("employees").doc();
      this.employee_id = docRef.id;
      db.collection("employees")
        .doc(this.employee_id)
        .set({
          employee_id: this.employee_id,
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          birthday: this.birthday,
          emailAddress: this.emailAddress,
          timeCreated: Date.now(),
        })
        .then(this.$router.push("/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>
