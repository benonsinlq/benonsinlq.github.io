<template>
  <div>
    <s-home></s-home>    
  </div>
</template>
<script>
module.exports = {  
    components:{
      's-home':httpVueLoader('./Home.vue')
    },
    data(){
      return{
        counter:1
      }
    }
}
</script>

