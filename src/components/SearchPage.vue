<template>
  <div class='container'>
    <header>
      <div class="search-section">
        <input  v-model='query' @keyup="queryApi(query.trim()); resetPage()" >
        <span  style='cursor:default;' ><span ><i class="fa-solid fa-magnifying-glass"></i></span></span>
        <span class="close-button" @click="onClickButton"><i class="fa-solid fa-xmark"></i></span>
        </div>
      <div class="ct-type-section">
        <button  @click='isMovie=true ; queryApi(query.trim()); resetPage() ' >Movies</button>
        <button  @click='isMovie=false ; queryApi(query.trim())  ;resetPage()'>Tv Show</button>
      </div>
    </header>

    <main>
          <FilmCard  v-for='film in films ' 
           :key='film.id'
           :title='control(film)' 
           :poster='getPoster(film.poster_path)'
           :originalTitle="controlOrginalTitle(film)"
           :language='getFlagEmoji(film.original_language)'
           :vote='starReturn(film.vote_average)'
           :overview="film.overview"
           />
    </main>
           <div class="button-section">
              <button @click='prevPage() ; queryApi(query) ' v-if='page>1' >prev</button>
              <button @click='nextPage() ; queryApi(query) ' v-if='films.length > 0 && films.length==20 ' >next</button>
          </div>
    
    
     
     
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';
import axios from 'axios';

// :vote='starReturn(film.vote_average)'

export default {
    data(){
        return{
            films:[],
            apiKey:'0b98e663444d090f1590b649dc04a365',
            query:'',
            isMovie:true,
            emptyPoster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3axCUQM3JAxoNSab8AbCUlfZQLE0UFtb6Q&usqp=CAU',
            page:1
            
          
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
                  page:this.page,
                  query:text,
                  api_key:this.apiKey,
                  language:'it-IT',
                  adult:true
                }
                axios.get(this.apiURL + searchType, {params}).then((response)=>{
                  if(response.status===200){
                  this.films=response.data.results;
                  response.data.page=this.page;
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
},

starReturn(vote){
  let arrayStar=[];
  let rating=vote/2;
  rating= Math.ceil(rating);
  for(let i=0; i<5;i++){
    if(i<rating){
      arrayStar.push('full')
    }else{
      arrayStar.push('empty');
    }
  }
  
    return arrayStar;
  },

  nextPage:function(){
    this.page+=1;
  },
  prevPage:function(){
    this.page-=1;
  },

  resetPage(){
    this.page=1;
  },

  onClickButton () {
     this.$emit('clicked', false)
  }
  
  

    
    
   

}
}







</script>


<style lang='scss' scoped>
.container{
  position:absolute;
  top:0;
  left:0;
  display:flex;
  flex-direction: column;
  width:100%;
  min-height: 100vh;
  background-color:rgba(0, 0, 0, 0.904);
  z-index:99
  
  
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
    .search-section{
      .close-button{
        position:absolute;
       right:20px;
       font-size:2rem;
      }
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

      .button-section{
        display:flex;
        justify-content:center;
        gap:100px;
      }

</style>