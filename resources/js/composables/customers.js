import { ref } from "vue";
export default function useCustomers(){

    const customers = ref([]);

    const getCustomers = async (page = 1) => {
        axios.get('/api/customers?page='+page)
            .then(({data}) => {
                customers.value = data
            }).catch(err => {
                console.log(err)
            })
    }

    return { customers,getCustomers };

}
