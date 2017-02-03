<template>
  <div class="mains">
    <input
      type="text"
      v-model="musicname"
      placeholder="请输入歌曲名称"
      v-on:keyup.13="getMusicInfos"
    >
    <button v-on:click="getMusicInfos">点击</button>
  </div>
</template>

<script>
export default {
  name: 'mains',
  data () {
    return {
      musicname: ''
    }
  },
  props: ['changeMusic'],
  methods: {
    getMusicInfos: function () {
      window.fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({'musicname': this.musicname})
      })
        .then(response => response.json())
        .then(data => this.changeMusic(data))
        .catch(err => console.log(err))
      this.musicname = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
