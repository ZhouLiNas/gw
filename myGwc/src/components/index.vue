<template>
  <div>
      <List></List>
      <div>
          
      </div>
  </div>
</template>

<script>
import List from './list'
export default {
  name: 'Index',
  components:{
    List
  },
  mounted(){
      this.$store.dispatch("getList")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
