<template>
    <div id="employee-table">
        <div class="table-responsive-sm">
            <table class="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">First Name</th>
                        <th class="text-center">Last Name</th>
                        <th class="text-center">Gender</th>
                        <th class="text-center">Birthday</th>
                        <th class="text-center">Email Address</th>
                    </tr>
                </thead>
                <tbody v-for="employee in employees"
                v-bind:key="employee.id">
                    <td class="text-center">
                        <router-link v-bind:to="{name: 'select-employee', 
                        params: {employee_id: employee.id}}">
                             {{ employee.id }}
                        </router-link>
                    </td>
                    <td class="text-center">{{ employee.firstName }}</td>
                    <td class="text-center">{{ employee.lastName }}</td>
                    <td class="text-center">{{ employee.gender }}</td>
                    <td class="text-center">{{ employee.birthday }}</td>
                    <td class="text-center">{{ employee.emailAddress }}</td>
                </tbody>
            </table>
        </div>
        <div class="fixed-action-btn">
            <router-link to='/add' class="btn-floating
            btn-large blue">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'employee-table',
    data () {
        return {
            employees: []  //filled when fetching data
        }
    },
    created () { //runs when the component is created
        db.collection('employees').get().then (querySnapshot => { //gets employees from firestore and stores them
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'firstName': doc.data().firstName,
                    'lastName': doc.data().lastName,
                    'gender': doc.data().gender,
                    'birthday': doc.data().birthday,
                    'emailAddress': doc.data().emailAddress
                }
                this.employees.push(data)
            })
        })
    }
}
</script>