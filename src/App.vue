<template>
  <div id="app">
    <MainComponent :apiURL='apiUrl'/>
    
  </div>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue';
export default {
  name: 'App',
  data(){
    return{
      apiUrl: 'https://api.themoviedb.org/3/search/',
    }
  },
  components:{
    MainComponent,
  },
  


  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
