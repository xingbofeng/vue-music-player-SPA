<template>
  <div class="mains">
    <input
      type="text"
      v-model="musicname"
      placeholder="请输入歌曲名称"
      v-on:keyup.13="getMusicInfos"
    >
    <button v-on:click="getMusicInfos">搜索</button>
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
  props: ['changeMusic', 'listMusic', 'displayList', 'displayBox'],
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
        .then(data => this.listMusic(data))
        .catch(err => console.log(err))
      this.musicname = ''
      this.displayBox(false)
      this.displayList(true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mains {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
input {
  flex: 5;
  height: 5rem;
  font-size: 2rem;
  line-height: 5rem;
  text-align: center;
  box-shadow: none;
}
button {
  flex: 1;
  height: 5rem;
  line-height: 5rem;
  box-sizing: border-box;
  font-size: 2rem;
}

</style>
