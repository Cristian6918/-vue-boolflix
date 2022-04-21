<template>
  <div class='ct-card'>
      <img :src='poster' :alt="title">
      <div class="card-overlay">
          <h3>{{title}}</h3>
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
        ['poster' ,'id', 'title' ,'vote']
    

}
</script>

<style lang='scss' scoped>
.ct-card{
    position:relative;
  width: 200px;
  transition: transform 0.5s ease-out ;
        img{
            width:100%;
           
        }
}
.ct-card:hover{
    transform: scale(1.1);
    transform-origin: top;
    z-index:1;
    
}
.card-overlay{
display: flex;
align-content:center;
justify-content:center;
position: absolute;
left: 0%;
right: 0%;
top: 62.5%;
bottom: 0%;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.925) 100%);
transition: all 0.5s ease-out;

   
}
 .ct-card:hover .card-overlay{
        top:0%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.699) 0%, rgb(0, 0, 0) 100%);
    }

</style>