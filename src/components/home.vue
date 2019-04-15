<template>
  <div class="home">
    <h1>我是首页</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '父组件中的数据共享到子组件',
      msgInfo: ''
    }
  },
  components: {
  },
  methods: {
    changeHandle () {
      this.msgInfo = '监听方法改变的数据'
    }
  }
}
</script>

<style scoped>
</style>
