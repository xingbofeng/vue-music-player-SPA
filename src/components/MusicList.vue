<template>
  <div class="box" v-show="listDisplay">
    <li v-for="item in list" v-on:click="handleClick(item)">
    <div class="img">
    	<img v-bind:src="item.picUrl" alt="image">
    </div>
    <div class="infos">
    	<span>{{ item.name }}</span>
	    <span>{{ item.singer }}-{{ item.albumName }}</span>
    </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
  props: ['list', 'changeMusic', 'displayBox', 'displayList', 'listDisplay'],
  data () {
    return {
      welcome: 'MusicList'
    }
  },
  methods: {
    handleClick: function (item) {
      this.changeMusic(item)
      this.displayList(false)
      this.displayBox(true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.infos {
	display: flex;
	flex-direction: column;
	order: -1;
	flex: 2;
	font-size: 2rem;
}
li {
	list-style: none;
	width: 100%;
	height: 150px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	border: 1px solid #666;
	border-radius: 4px;
	box-sizing: border-box;
}
img {
	width: 120px;
	height: 120px;
	border-radius: 60px;
	border: 1px solid #999;
}
.img {
	flex: 1;
}

</style>
