<template>
  <div id="app">
    <MainPage :apiTrend='apiTrend' @clicked="onClickChild" />
    <SearchPage  v-if="isOpen==true" :apiURL='apiUrl'
    @clicked="onClickChild"  />
    
  </div>
</template>

<script>
import SearchPage from '@/components/SearchPage.vue';
import MainPage from '@/components/MainPage.vue';
export default {
  name: 'App',
  data(){
    return{
      apiUrl: 'https://api.themoviedb.org/3/search/',
      apiTrend:'https://api.themoviedb.org/3',
      isOpen:false
      
    }
  },
  components:{
    SearchPage,
    MainPage
  },
  methods:{
    onClickChild (value) {
      this.isOpen=value;
      console.log(value) // someValue
    }
  }
  
  


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
