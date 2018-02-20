<template>
 <div id="edit-employee">
   <ul class="collection with-header">
     <li class="collection-header"><h4>{{name}}</h4></li>
     </ul>

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
