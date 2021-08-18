<template>
    <div id="add-meployee">
        <h3 class="text-center m-5">Add Employee</h3>
        <form id="employee-form">
            <div class="form-group mt-5">
                <label for="firstName">
                    First Name
                </label>
                <input type="text" id="firstName" class="form-control text-white bg-light">
            </div>
            <div class="form-group mt-3">
                <label for="lastName">
                    Last Name
                </label>
                <input type="text" id="lastName" class="form-control text-white bg-light">
            </div>
            <div class="form-group mt-3">
                <label for="gender">
                    Gender
                </label>
                <select id="gender" class="form-select text-white bg-light">
                    <option selected>Select one</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group mt-3">
                <label for="birthday">
                    Birthday
                </label>
                <br>
                <input class="bg-light text-white" type="date" id="birthday" name="birthday">
            </div>
            <div class="form-group mt-3">
                <label for="emailAddress">
                    Email Address
                </label>
                <input type="text" id="emailAddress" class="form-control text-white bg-light">
            </div>
            <input type="submit" value="Add Employee"
            class="btn btn-primary col-12 mt-5" id="submitBtn">
        </form>
    </div>
</template>

<script>
export default {
    name: 'add-employee',
    data () {
        return {
            
        }
    }
}
</script>