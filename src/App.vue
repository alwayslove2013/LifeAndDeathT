<template>
  <div id="app">
    <div id="min_div">
      <life-and-death-tencent/>
    </div>
  </div>
</template>

<script>
import LifeAndDeathTencent from "./components/LifeAndDeathTencent"
export default {
  name: "app",
  components: {
    LifeAndDeathTencent
  },
  mounted: function() {
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

#min_div {
  // position: absolute;
  left: 0;
  right: 0;
  // width: 100%;
  // height: 100%;
  // border: 1px solid red;
  text-align: center;
  // height: 100%;
  overflow: hidden;
}
</style>
