<template>
  <div>
    <h1>{{ welcome }}</h1>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      welcome: 'Welcome to My Vue.js Music Player.'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3rem;
}

</style>
