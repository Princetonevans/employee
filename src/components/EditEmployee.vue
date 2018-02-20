<template>
<div id="edit-employee">
<h3>Edit Employee</h3>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
name: 'edit-employee',
data (){
  return {
    employee_id: null,
    name: null,
    dept: null,
    position: null
  }
},
beforeRouteEnter (to, from, next) {
  db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then(querySnapshot => {
    querySnapshot.foreach(doc => {
      next(vm => {
        vm.employee_id = doc.data().employee_id
        vm.name = doc.data().name
        vm.dept = doc.data().dept
        vm.position = doc.data().position
      })
    })
  })
},
watch: {
  '$route': 'fetchData'
},

}
</script>
