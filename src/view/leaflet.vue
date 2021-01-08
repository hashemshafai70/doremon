<template>

  <div>
    <div style="height: 20%; overflow: auto;">
      <h3>Custom Marker Icons</h3>
      <label for="iconSize">Icon size:</label>
      <input
        id="iconSize"
        v-model="iconSize"
        type="range"
        min="1"
        max="200"
        value="64"
      >
      <label for="customTextInput">Custom text: </label>
      <input
        id="customTextInput"
        v-model="customText"
        type="text"
      >
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <!-- Use default icon -->
  
      <!-- Use icon given in icon property -->
     
      <!-- Create image icon (icon) from l-icon tag -->

      <!-- Create HTML icon (divIcon) by providing content inside the l-icon tag -->
      <l-marker :lat-lng="[47.41322, -1.189482]">
        <l-icon
          :icon-anchor="staticAnchor"
          class-name="someExtraClass"
           icon-url="../assets/image/logo.png"
           :icon-size="[20,15]"
        >
          <img style=" width: 20px !important;height: 20px !important;" src="../assets/image/logo.png">
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import { latLng, icon } from "leaflet";

export default {
  name: "Icon",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      icon: icon({
        iconUrl: "static/images/baseball-marker.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: "Foobar",
      iconSize: 64
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  methods: {}
};
</script>

<style>


</style>
