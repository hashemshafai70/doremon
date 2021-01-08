<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
@import "./assets/css/config.css";

$body-font-family: "myFirstFont";
$title-font: "myFirstFont";

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
  .subtitle-1 {
      font-family: $title-font, sans-serif !important;
  }
}
</style>
