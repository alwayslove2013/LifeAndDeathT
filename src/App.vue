<template>
  <div id="app">
    <div id="min_div">
      <life-and-death-tencent />
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import LifeAndDeathTencent from "./components/LifeAndDeathTencent";
export default {
  name: "app",
  components: {
    LifeAndDeathTencent
  },
  data() {
    return {};
  },
  mounted: function() {
    let ua = navigator.userAgent.toLowerCase();
    let fontFamily = "Roboto, SourceHanSansCN, “思源黑体”, Noto Sans SC";
    if (/\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua)) {
      fontFamily = "PingFang SC";
    }
    d3.select("body").style("font-family", fontFamily);
  }
};
</script>

<style lang="less">
#min_div {
  // position: absolute;
  left: 0;
  right: 0;
  // width: 100%;
  // height: 100%;
  // border: 1px solid red;
  text-align: center;
  // height: 100%;
}
</style>
