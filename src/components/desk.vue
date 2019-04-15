<template>
  <div class="desk">
    <h1>我是工作台</h1>
    <ul>
      <li v-for="(item, index) in deskList" :key="index">{{item | capitalize}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deskList: ['work', 'homework']
    }
  },
  filters: {
  // 定义过滤器
    /* capitalize: function (value) {
      console.log(11, value)
      if (!value) return
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    } */
  }
}
</script>

<style scoped>
</style>
