<template>
  <div>
    <OrderHeader></OrderHeader>
     cart
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
<style lang="sass" scoped>

</style>
