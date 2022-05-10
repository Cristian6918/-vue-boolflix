<template>
  <div :class="'main-section'" :style="getHeroBackdrop(trendFilms)" >
      <div class="header-section">
          <span class="boolflix-logo">BOOLFLIX</span>
          <span @click="onClickButton" class="search-button" ><i class="fa-solid fa-magnifying-glass"></i></span>
          
      </div>
      <div class="hero-section"  >
          <div class="info-hero">
              <h1>{{hero_film.title}}</h1>
              <p>
                  {{hero_film.overview}}
              </p>
          </div>

      </div>
        <div class="wrapper">
            <h1>Trend Films</h1>
            <div @click="scroll_left" class="scroll-button scroll-left">
                    <i class="fa-solid fa-angle-left"></i>
                </div>
            <div class="film-section">
                
                <TrendFilmsCard v-for='film in trendFilms' 
                :key='film.id + "trendFilms"'
                :poster='getPoster(film.backdrop_path)' />
               
            </div>
             <div @click="scroll_right" class="scroll-button scroll-right">
                   <i class="fa-solid fa-angle-right"></i>
                </div>
      </div>

  </div>
</template>

// adult: (…)
// backdrop_path: (…)
// genre_ids: (…)
// id: (…)
// media_type: (…)
// original_language: (…)
// original_title: (…)
// overview: (…)
// popularity: (…)
// poster_path: (…)
// release_date: (…)
// title: (…)
// video: (…)
// vote_average: (…)
// vote_count: (…)



<script>
import axios from 'axios';
import TrendFilmsCard from '@/components/TrendFilmsCard.vue'
export default {
     data(){
        return{
            trendFilms:[],
            apiKey:'0b98e663444d090f1590b649dc04a365',
            media_type:'all',
            time_window:'day',
            hero_film:{}
                    }
    },
    components:{
        TrendFilmsCard,
        
    },
    props:{
        apiTrend:String,
        
    }, 
    
        //   ?api_key=<<api_key>>
       mounted(){
           this.trendLoad()
           
          
            },
            methods:{
                trendLoad(){
                     axios.get(`${this.apiTrend}/trending/${this.media_type}/${this.time_window}?api_key=${this.apiKey}` ).then((response)=>{
                  if(response.status===200){
                  console.log('trend--->',response)      
                  this.trendFilms=response.data.results;
                  console.log(this.trendFilms);
                  this.getHeroFilm(this.trendFilms)
                  }
                  })
                    .catch(error=>{
                        console.log(error);
                    })

                },
                

                getPoster(poster="",size='w342'){
                    return `https://image.tmdb.org/t/p/${size}${poster}`
                },
                getHeroFilm(array){
                    this.hero_film=array[this.randomNumber()]
                },

                // getHero(array){
                //     return `background-image:url(${this.getPoster(array[this.randomNumber()].backdrop_path , "w1280")})`
                // },
                getHeroBackdrop(){
                    return `background-image:url(${this.getPoster(this.hero_film.backdrop_path , "w1280")})`
                },
                

                randomNumber(){
                    return   Math.floor(Math.random() * 19 + 1 );
                },

                    // open search Page
                 onClickButton () {
                    this.$emit('clicked', true)
                },
                scroll_left() {
                    let content = document.querySelector(".film-section");
                    content.scrollLeft -= 500;
                },
                 scroll_right() {
                    let content = document.querySelector(".film-section");
                    content.scrollLeft += 500;
                },
             
            } ,
           
    }

</script>

<style lang="scss" scoped>
.main-section{
   position:absolute;
   top:0;
   left:0;
    width:100%;
    min-height:100vh;
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
    box-shadow: inset 0px -300px 100px -4px #000000;
    

}
.header-section{
    width:100%;
    height:10vh;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:20px;

    .search-button{
        font-size:1.5rem;
    }

}

.hero-section{
    width:100%;
    height:70vh;
    padding:20px;
    display: flex;
    align-items:flex-end;
    

    .info-hero{
        width:40%;
        height:20vh;
        text-align: left;
        display: flex;
        flex-direction:column;
        gap:20px;
        font-size:1.3rem;
        
       
        
        
    }
}


.film-section{
    padding:20px 0 0;
    gap:10px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x:hidden;
    scroll-behavior: smooth;
    padding:0 20px;

   
   
    
   


    &::-webkit-scrollbar {
    width:10px;
    
}

    &::-webkit-scrollbar-track {
    background-color: #03030310;
    border-radius: 100px;
    
}
 
    &::-webkit-scrollbar-thumb {
    background-color: #00000025;
    border-radius: 100px;
}

}
.boolflix-logo{
    color:red;
    font-weight: Bold;
    font-size:4rem;
}

.scroll-button{
    height:100%;
    width:100px;
    z-index:1;
    position:absolute;
    display: flex;
    top:0;
    justify-content:center;
    align-items:center;
     font-size:4rem;
     opacity: 50%;

     &:hover{
         opacity: 100%;
     }

    span{
        height:100%;
        width: 100%;
       
    }
}
.wrapper{
    position:relative;
    h1{
        text-align:left;
        margin-left:20px;
    }

    .scroll-left{
        left:0;
    }

    .scroll-right{
        right:0;
    }
}






</style>