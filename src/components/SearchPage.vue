<template>
  <div class='container'>
    <header>
      <div class="search-section">
        <input  v-model='query' @keyup="queryApi(query.trim())" >
        <span  style='cursor:default;' >Search</span>
        </div>
      <div class="ct-type-section">
        <button  @click='isMovie=true ; queryApi(query.trim()) ' >Movies</button>
        <button  @click='isMovie=false ; queryApi(query.trim())'>Tv</button>
      </div>
    </header>

    <main>
          <FilmCard  v-for='film in films ' 
           :key='film.id'
           :title='control(film)' 
           :poster='getPoster(film.poster_path)'
           :originalTitle="controlOrginalTitle(film)"
           :language='getFlagEmoji(film.original_language)'
           :vote='film.vote_average'
           />
    </main>
     
     
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';
import axios from 'axios';



export default {
    data(){
        return{
            films:[],
            apiKey:'0b98e663444d090f1590b649dc04a365',
            query:'',
            isMovie:true,
            emptyPoster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3axCUQM3JAxoNSab8AbCUlfZQLE0UFtb6Q&usqp=CAU'
            
          
        }
    },
    components:{
        FilmCard,
        
    },
    props:{
        apiURL:String
    }, 
        methods:{
          queryApi(text){
            if(text.length!=0){
                let searchType=this.isMovie===true? 'movie':'tv';
                const params={
                  query:text,
                  api_key:this.apiKey,
                  language:'it-IT',
                }
                axios.get(this.apiURL + searchType, {params}).then((response)=>{
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
            else{
              this.films=[];
            }
    },

    control:function(film){
      if(film.title){
        return film.title;
      }else{
        return film.name;
      }
    },

    controlOrginalTitle:function(film){
      if(film.original_title){
        return film.original_title
      }else{
        return film.original_name
      }
    },

    getPoster(poster="",size='w342'){
      if(poster!=null){
        return `https://image.tmdb.org/t/p/${size}${poster}`
      }
      else{
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU"
      }
    },
//Show Flags on FireFox!
    getFlagEmoji(countryCode) {
      if(countryCode==='en'){
        countryCode='gb'
      } 
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
  
  

    
    
   

}
}







</script>


<style lang='scss' scoped>
.container{
  display:flex;
  flex-direction: column;
 
  min-height: 100vh;
  background-color:rgba(0, 0, 0, 0.493);
}

header{
  display: flex;
  flex-direction: column;
  height:10vh;
  justify-content: space-around;
 
  

    .search-section,
    .ct-type-section{
      justify-content: center;
      display:flex;
      gap:20px;
      align-items: center;
    }
}

main{
   flex-shrink: 1;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  gap: 20px;
  padding:20px;
  
}


input{
  border:none;
  border-radius: 4px;
  color:black;
  height:20px;
  outline: none;
  background-color:#FFFFFF;
  
}
button{
  border:none;
  width: 115px;
  height: 30px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 4px;
  
}

.search-button{
      background-color:#FFFFFF;
      color:black; 
     
    }

</style>