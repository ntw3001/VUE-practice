import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import { ref } from 'vue';

const postUser = (user) => {
  const $toast = useToast();
  const loading = ref(false);

  const addUser = () => {
    console.log(user);
    loading.value = true;
    axios({
      method: 'post',
      url: 'http://localhost:3000/users',
      data: user
    })
    .then(()=>{
      $toast.success("Nice")
    })
    .catch(error => {
      $toast.error("rubbish")
    })
    .finally(()=>{
      loading.value = false;
    })
}

  return {loading, addUser}
}

export default postUser;
