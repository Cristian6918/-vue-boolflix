<template>
  <div class="film-card">
      <img :src="poster" :alt="title">
  </div>

  
</template>



<script>
export default {


    props:['poster','title','id']

}
</script>

<style lang='scss' scoped>
.film-card{
    border-radius:10px;
    width:250px;
    flex: 0 0 auto;
    
    
}
img{
    width:100%;
    border-radius:10px;
}

</style>