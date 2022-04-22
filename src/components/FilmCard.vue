<template>
  <div class='ct-card'>
      <img :src='poster' :alt="title">
      <div class="card-overlay">
          <h3>{{title}}</h3>
          <p>Titolo originale: {{originalTitle}}</p>
          <p>Lingua originale: {{language}}</p>
          <p>Voto: {{vote}}</p>
          <p>Overview: {{overview}}</p>
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
        ['poster' ,'id', 'title' ,'vote','originalTitle','language','overview']
    

}
</script>

<style lang='scss' scoped>
.ct-card{
    max-height: 100%;
    position:relative;
  width: 200px;
  border-radius: 10px;
  transition: transform 0.5s ease-out ;
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
top:90%;
bottom: 0%;
border-radius:10px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
transition:  0.5s ease-out;

        h3{
            text-align:center;
            
        }
        p{
            margin:5px 0px;
            text-align:left;
        }
   
}
 .ct-card:hover .card-overlay{
        opacity:1;
        top:0%;
        transform-origin:bottom;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.699) 0%, rgb(0, 0, 0) 100%);
    }

</style>