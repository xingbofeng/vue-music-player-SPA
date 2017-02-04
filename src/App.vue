<template>
  <div id='app'>
    <Headers></Headers>
    <Mains
      v-bind:changeMusic="changeMusic"
      v-bind:listMusic="listMusic"
      v-bind:displayBox="displayBox"
      v-bind:displayList="displayList"
    ></Mains>
    <MusicList
      v-bind:list="list"
      v-bind:changeMusic="changeMusic"
      v-bind:displayBox="displayBox"
      v-bind:displayList="displayList"
      v-bind:listDisplay="listDisplay"
    ></MusicList>
    <MusicBox
      v-bind:message="res"
      v-bind:boxDisplay="boxDisplay"
    ></MusicBox>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Mains from './components/Mains'
import MusicBox from './components/MusicBox'
import MusicList from './components/MusicList'

export default {
  name: 'app',
  components: {
    Headers,
    Mains,
    MusicBox,
    MusicList
  },
  data () {
    return {
      res: {
        'name': '告白气球',
        'picUrl': 'http://p1.music.126.net/m3_elKryq_x62UNHJ2NgHg==/109951162807555886.jpg',
        'musicUrl': 'http://m2.music.126.net/GvIMZ5ZW0l04xFMVYtTy8g==/18502581673300022.mp3',
        'page': 'http://music.163.com/m/song/440241144',
        'singer': '周二珂'
      },
      list: [],
      listDisplay: false,
      boxDisplay: true
    }
  },
  methods: {
    changeMusic: function (response) {
      this.res = response
    },
    listMusic: function (response) {
      this.list = response
    },
    displayList: function (display) {
      this.listDisplay = display
    },
    displayBox: function (display) {
      this.boxDisplay = display
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}
</style>
