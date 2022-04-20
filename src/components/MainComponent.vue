<template>
  <div>
     <FilmCard v-for='{name, id} in films' :key='id' :title='name'/>
     
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';
import axios from 'axios';
export default {
    data(){
        return{
            films:[],
            apiKey:'0b98e663444d090f1590b649dc04a365'
        }
    },
    components:{
        FilmCard
    },
    props:{
        apiURL:String
    },
        mounted(){
    const query='hello';
    const params={
      query,
      api_key:this.apiKey,
      language:'it-IT'
    }
    axios.get(this.apiURL + 'tv', {params}).then((response)=>{
      console.log(response);
      if(response.status===200){
      this.films=response.data.results;
      console.log(this.films);
      }
      })
      .catch(error=>{
        console.log(error);
      })
    }
}
</script>

<style>

</style>