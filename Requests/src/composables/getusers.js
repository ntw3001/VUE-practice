import axios from "axios";
import { useToast } from "vue-toast-notification";
import { reactive } from "vue";

const getUsers = () => {

  const $toast = useToast();
  const data = reactive({
    loading:true,
    user:[]
  })

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users")
      data.users = response.data
      data.loading = false
    } catch (error) {
      $toast.error("too bad, so sad")
      data.loading = false
    }
  }


  return { data, loadUsers }
}

export default getUsers
