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
import 'whatwg-fetch'
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
      if (/(\s)/.test(this.musicname) || this.musicname === '') {
        console.log(this.musicname)
        window.alert('歌曲名称请不要带有空格')
        this.musicname = ''
        return
      }
      window.fetch('http://123.206.19.27:3000/', {
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
