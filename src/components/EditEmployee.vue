<template>
 <div id="edit-employee">
 <h3>Edit Employee</h3>
 <div class="row">
 <form @submit.prevent="updateEmployee" class="col s12">
   <div class="row">
     <div class="input-field col s12">
       <input type="text" v-model="employee_id" required>
     </div>
   </div>
   <div class="row">
     <div class="input-field col s12">
       <input type="text" v-model="name" required>
     </div>
   </div>
   <div class="row">
     <div class="input-field col s12">
       <input type="text" v-model="dept" required>
     </div>
   </div>
   <div class="row">
     <div class="input-field col s12">
       <input type="text" v-model="position" required>
     </div>
   </div>
   <button type="submit" class="btn">Submit</button>
   <router-link to="/" class="btn grey">Cancel</router-link>
 </form>
</div>

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
 }
}
</script>
