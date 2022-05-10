<template>
  <div class='ct-card'>
      <img :src='poster' :alt="title">
      <div class="card-overlay">
          <h3>{{title}}</h3>
          <p> <span>Titolo originale: </span>  {{originalTitle}}</p>
          <p> <span>Lingua originale: </span>{{language}}    </p>
         
          <p> <span>Voto: </span>
            <span  v-for='(i, index ) in  vote'  :key='index'  > 
              <font-awesome-icon v-if='i==="full"'  icon="fa-solid fa-star "/>
              <font-awesome-icon v-if='i==="empty"'  icon="fa-regular fa-star " />
            </span> 
          </p>
          <p> <span>Overview: </span>  {{overview}}</p>
      </div>
  </div>
</template>

<script>


export default {
    data(){
        return{
         
        }
    },
    props:
        ['poster' ,'id', 'title' ,'vote','originalTitle','language','overview'],
    components:{
        
    },
}
</script>

<style lang='scss' scoped>
.ct-card{
    max-height: 100%;
    position:relative;
  width: 150px;
  border-radius: 10px;
  transition: transform 0.5s ease-out ;
//   transition-delay:1s;
        img{
            width:100%;
            border-radius: 10px;
           
        }
}
.ct-card:hover{
    transform: scale(1.1);
    z-index:1;
    
}
.card-overlay{
opacity:0;
position: absolute;
left: 0%;
right: 0%;
top:70%;
bottom: 0%;
border-radius:10px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
transition: all 0.5s ease-out ;
// transition-delay: 1s;

        h3{
            text-align:center;
            
        }
        p{  
            display:none;
            margin:5px 0px;
            text-align:left;
        }

        &::-webkit-scrollbar {
            display:none

        }
   
}
 .ct-card:hover 
 .card-overlay{
     opacity:1;
        top:0%;
        transform-origin:bottom;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.699) 0%, rgb(0, 0, 0) 100%);
        overflow-y: auto;
        scrollbar-width: none;
        padding:5px;

        p{
            display:block;
        }
       
    }
    span{
        font-weight: bold;
    }
   
   

</style>