<template>
    <div>
      <NavHeader></NavHeader>
      <router-view></router-view>
      <NavFooter></NavFooter>
    </div>
</template>

<script>
import NavFooter from '@cp/NavFooter.vue'
import NavHeader from '@cp/NavHeader.vue'
export default {
  components: {
    NavFooter,
    NavHeader
  }
}
</script>

<style lang="sass" scoped>

</style>
