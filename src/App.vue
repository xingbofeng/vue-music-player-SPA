<template>
  <div id='app'>
    <Headers></Headers>
    <Mains v-bind:changeMusic="changeMusic"></Mains>
    <MusicBox v-bind:message="res"></MusicBox>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Mains from './components/Mains'
import MusicBox from './components/MusicBox'

export default {
  name: 'app',
  components: {
    Headers,
    Mains,
    MusicBox
  },
  data () {
    return {
      res: {
        'name': '告白气球',
        'picUrl': 'http://p1.music.126.net/m3_elKryq_x62UNHJ2NgHg==/109951162807555886.jpg',
        'musicUrl': 'http://m2.music.126.net/GvIMZ5ZW0l04xFMVYtTy8g==/18502581673300022.mp3',
        'page': 'http://music.163.com/m/song/440241144',
        'singer': '周二珂'
      }
    }
  },
  methods: {
    changeMusic: function (response) {
      this.res = response
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
