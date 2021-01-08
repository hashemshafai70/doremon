<template>
  <div class="chart d-flex justify-center my-10">
    <div :style="{height : heightParent}">
      <div
        :style="{ height: height[0], width: width, backgroundColor: color }"
      ></div>
    </div>
    <div  class="mx-3" :style="{height : heightParent}">
      <div
       
        :style="{ height: height[1], width: width, backgroundColor: color }"
      ></div>
    </div>
    <div :style="{height : heightParent}">
      <div
        :style="{ height: height[2], width: width, backgroundColor: color }"
      ></div>
    </div>
    <div class="mx-3" :style="{height : heightParent}">
      <div
        :style="{ height: height[3], width: width, backgroundColor: color }"
      ></div>
    </div>
    <div  :style="{height : heightParent}">
      <div
        :style="{ height: height[4], width: width, backgroundColor: color }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      default: "5px"
    },
    func: {
      type: Function,
      default: () => ["50%", "60%", "30%" , "50%" , "60%"]
    },
    color: {
      default: "orange"
    },
    heightParent :{
        default: "80px"
    }
  },
  data() {
    return {
      height: this.func()
    };
  }
};
</script>
<style>
.chart {
  transform: rotate(180deg);
}
.chart > div> div {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.chart > div{
   border: 1px solid rgb(223, 221, 221);   
}
</style>