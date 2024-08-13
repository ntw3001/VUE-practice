<template>
  <h3>No Homers Club</h3>
  <Form @submit="onSubmit" :validation-schema="formSchema">
    <div class="mb-3">
      <label for="name">Name</label>
      <Field
        name='name'

        placeholder="Enter your name"
        class="form-control"
        />
      <ErrorMessage name="name" as="div" v-slot="{message}">
        <div class="alert alert-danger" role="alert">
          {{message}}
        </div>
      </ErrorMessage>
    </div>

    <button class="btn btn-primary" type="submit">
      Submit
    </button>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required("Tell me your name").notOneOf(['Homer'], "No Homers! (We're allowed one)").max(5, "Wow, your name is too long for a dumb robot like me to remember!")
});

function onSubmit(values, {resetForm}) {
  console.log(values);
  resetForm();
}
// const isRequired=(value)=>{
//   if(!value){
//     return 'This field is required.'
//   }
//   return true;
// }

// const noHomers = (value) => {
//   if (value === 'Homer') {
//     return 'It says no Homers'
//   }
//     return true;
// }

</script>
