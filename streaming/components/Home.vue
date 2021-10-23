<template>
<div>
  <div v-for="item,index in online" :key="index" >{{ item }}</div>
</div>
</template>
<script>

module.exports = {
  data() {
    return {
      online : [{ name: "test" },{name:"test2"}]
    };
  },
};
</script>
