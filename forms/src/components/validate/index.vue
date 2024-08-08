<template>
  <Form>
    <div class="mb-3">
      <label for="name">Name</label>
      <Field
        name='name'
        :rules="isRequired"
        placeholder="Enter your name"
        class="form-control"
        />
      <ErrorMessage name="name"/>
    </div>

    <button class="btn btn-primary">
      Submit
    </button>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';

const isRequired=(value)=>{
  if(!value){
    return 'This field is required.';
  } else if (value === "Colin"){
    return 'Colin is not allowed.';
  }
  return true;
}

</script>
