<template>
  <h2>采购申请</h2>
</template>

<script>
export default {
  name: 'PurchaseRequest',
  components: {},
  data() {
    return {
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  watch: {

  },

  created() {
    console.warn('页面创建')
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
