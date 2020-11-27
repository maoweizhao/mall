<template>
    <div>
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
    </div>
</template>

<script>
import OrderHeader from '@cp/OrderHeader.vue'
import NavFooter from '@cp/NavFooter.vue'
export default {
  components: {
    OrderHeader,
    NavFooter
  }

}
</script>

<style scoped>

</style>
