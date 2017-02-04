<template>
  <div v-show="boxDisplay">
    <h1>{{ message.name }}</h1>
    <img v-bind:src="message.picUrl" alt="">
    <audio v-bind:src="message.musicUrl" controls="controls"></audio>
  </div>
</template>

<script>
export default {
  name: 'MusicBox',
  props: ['message', 'boxDisplay'],
  data () {
    return {
      data: 'hello'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    height: 70vh;
  }
  img {
    width: 70vw;
    height: 70vw;
    border-radius: 50%;
    border: 2px #999 solid;
  }
  audio {
    width: 80vw;
    height: 10vw;
    display: flex;
    align-items: stretch;
  }
  h1 {
    font-size: 5rem;
  }

</style>
