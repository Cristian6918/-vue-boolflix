<template>
  <div id="app">
    <SearchPage :apiURL='apiUrl'/>
    
  </div>
</template>

<script>
import SearchPage from '@/components/SearchPage.vue';
export default {
  name: 'App',
  data(){
    return{
      apiUrl: 'https://api.themoviedb.org/3/search/',
    }
  },
  components:{
    SearchPage,
  },
  


  }

</script>

<style lang="scss">
*{
  color:white;
  margin:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
