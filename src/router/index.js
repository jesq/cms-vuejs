import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeTable from '@/components/EmployeeTable'
import AddEmployee from '@/components/AddEmployee'
import EditEmployee from '@/components/EditEmployee'
import SelectEmployee from '@/components/SelectEmployee'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EmployeeTable',
    component: EmployeeTable
  },
  {
    path: '/add',
    name: 'add-employee',
    component: AddEmployee
  },
  {
    path: '/edit/:employee_id',
    name: 'edit-employee',
    component: EditEmployee
  },
  {
    path: '/:employee_id',
    name: 'select-employee',
    component: SelectEmployee
  }
]

const router = new VueRouter({
  routes
})

export default router
