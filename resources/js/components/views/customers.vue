<template>
    <div>
        <h4>customers</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Subscription Date</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(customer,index) in customers.data">
                    <th scope="row">{{customer.id}}</th>
                    <td>{{customer.name}}</td>
                    <td>{{customer.subscription_end_date}}</td>
                </tr>
            </tbody>
        </table>
        <pagination :data="customers" @pagination-change-page="getCustomers"></pagination>
    </div>
</template>

<script>
import useCustomers from "../../composables/customers.js";
import {onMounted} from "vue";

export default {
    name: "customer",
    setup(){
        const { customers,getCustomers } = useCustomers();

        onMounted(() => {
            getCustomers()
        })

        return { customers, getCustomers }
    }
}
</script>

<style scoped>

</style>
