<template>
  <div>
    <v-toolbar dense class="position-Sticky ">
      <v-btn small text
        ><v-icon>mdi-select-group</v-icon> دسته بندی کالاها</v-btn
      >
      <v-btn small text><v-icon>mdi-storefront</v-icon> سوپرمارکت</v-btn>
      <v-btn small text><v-icon>mdi-sale</v-icon>تخفیف ها و پیشنهادات</v-btn>
      <v-btn small text><v-icon>mdi-account-tie</v-icon>فروشنده شوید</v-btn>
      <v-spacer></v-spacer>
      <v-switch class="mt-4" label="نمایش نقشه" v-model="myshowMap"></v-switch>
    </v-toolbar>
    <v-container class="py-5">
      <v-row>
        <v-col v-if="!myshowMap" cols="12" md="3">
          <v-card class="pa-5" rounded>
            <h3 class="pb-3">دسته بندی نتایج</h3>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-group :value="true">
                <template v-slot:activator>
                  <v-list-item-title>سوپرمارکت</v-list-item-title>
                </template>

                <v-list-group :value="true" no-action sub-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>خوار و بار</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item v-for="(title, i) in admins" :key="i" link>
                    <v-list-item-action
                      ><v-checkbox
                        dense
                        v-model="checkbox[i]"
                        :label="title"
                      ></v-checkbox
                    ></v-list-item-action>
                  </v-list-item>
                </v-list-group>
              </v-list-group>
            </v-list>
          </v-card>
          <v-card class="pa-5 mt-4" rounded> </v-card>
        </v-col>
        <v-col cols="12" :md="!myshowMap ? '9' : '7'">
          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="product in Products"
              :key="product.id"
            >
              <product-component @GetLocation="myshowMap = true" :product="product"></product-component>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="myshowMap" cols="12" md="5">
          <v-card class="map" style="height: 200px; overflow: auto;">
            <l-map
              v-if="showMap"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 70%"
              @update:center="centerUpdate"
              @update:zoom="zoomUpdate"
              :max-bounds="maxBounds"
              @click="changeCenter"
            >
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-control class="submitMap">
                <v-text-field v-if="!findMarker" background-color="white" rounded  label="جستجو کنید ..." filled  solo>
                  <template v-slot:append>
                    <v-btn color="primary" rounded @click="submitMap">
                      ارسال
                    </v-btn>
                  </template>
                </v-text-field>
              </l-control>
              <l-marker v-if="!findMarker" :lat-lng="centerMarker">
                <l-icon
                  :icon-anchor="staticAnchor"
                  class-name="someExtraClass"
                  icon-url="../assets/image/logo.png"
                  :icon-size="[20, 15]"
                >
                  <img
                    style=" width: 20px !important;height: 20px !important;"
                    src="../assets/image/logo.png"
                  />
                </l-icon>

              </l-marker>
              <template v-if="findMarker">
                <l-marker @click="SelectStore(index)" v-for="(marker , index) in MarketFined" :key="marker.id" :lat-lng="marker.ltlng" @mouseover="hoverMarker(index)" @mouseleave="unHoverMarker(index)">
                  <l-icon
                      :icon-anchor="staticAnchor"
                      class-name="someExtraClass"
                      icon-url="../assets/image/logo.png"
                      :icon-size="[20, 15]"
                  >
                    <img
                        style=" width: 20px !important;height: 20px !important;"
                        src="../assets/image/logo.png"
                    />
                  </l-icon>
                </l-marker>
              </template>
            </l-map>
            <v-card color="grey" class="pa-3" v-if="hover">
              <p>{{MarkerTitle}}</p>
              <p>فاصله شما تا این مغازه {{MarkerDistance}} می باشد</p>
            </v-card>
            <v-btn class="mt-3" v-if="!findMarker" block @click="findMarker = true" color="success">
              ارسال
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ProductComponent from "../components/ProductComponent";
import { latLng, latLngBounds } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon , LControl   } from "vue2-leaflet";
export default {
  data() {
    return {
      hover : false ,
      checkbox: [true, true, true, true, true, true],
      Products: [
        {
          id: 1,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/111990397.png?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "زعفران درجه یک مصطفوی مقدار 4 گرم",
          rate: 4.5,
          countRate: 576,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        },
        {
          id: 2,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/0f9a7478489f4507afa905ea823614d041295a29_1596344776.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "زعفران درجه یک مصطفوی مقدار 4 گرم",
          rate: 4.5,
          countRate: 576,
          price: 76500
        },
        {
          id: 3,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/55cdd7df30a4dfdfcf8628da4dc6849d339cc068_1605016181.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "برنج طارم هاشمی ممتاز طبیعت - 10 کیلوگرم",
          rate: 4.1,
          countRate: 191,
          price: 396000,
          discountPrice: 358000,
          percentDiscount: "10%"
        },
        {
          id: 4,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/457834b32a02f1525722a0da345927e6692cd40e_1594182512.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "برنج فجر هایلی - 10 کیلو گرم",
          rate: 4.0,
          countRate: 376,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        },
        {
          id: 5,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/2b3b36fbd98cd2ffb78cb276f3db1255fbc6c7f8_1605341726.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "روغن سرخ کردنی شیررضا - 1.8لیتر",
          rate: 3.5,
          countRate: 2576,
          price: 76500
        },
        {
          id: 6,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/d4cbc118977b24b447c250e1313c71d471d09a13_1600937105.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "خمیر مایه ضامن - 100 گرم",
          rate: 4.7,
          countRate: 200,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        },
        {
          id: 7,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/d4cbc118977b24b447c250e1313c71d471d09a13_1600937105.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "خمیر مایه ضامن - 100 گرم",
          rate: 4.7,
          countRate: 200,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        },
        {
          id: 8,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/d4cbc118977b24b447c250e1313c71d471d09a13_1600937105.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "خمیر مایه ضامن - 100 گرم",
          rate: 4.7,
          countRate: 200,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        },
        {
          id: 9,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/d4cbc118977b24b447c250e1313c71d471d09a13_1600937105.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "خمیر مایه ضامن - 100 گرم",
          rate: 4.7,
          countRate: 200,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        },
        {
          id: 10,
          img:
              "https://dkstatics-public.digikala.com/digikala-products/d4cbc118977b24b447c250e1313c71d471d09a13_1600937105.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "خمیر مایه ضامن - 100 گرم",
          rate: 4.7,
          countRate: 200,
          price: 76500,
          discountPrice: 70000,
          percentDiscount: "10%"
        }
      ],
      admins: ["شکر", "نان", "برنج", "روغن", "قند و نبات", "حبوبات و سویا"],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"]
      ],
      MarketFined: [
        {id : 1,ltlng :[36.316263, 419.596968] , title : 'سوپر علی'  , distance : '2 کیلومتر' },
        {id : 2,ltlng :[36.318263, 419.566968] , title : 'سوپر محمد'  , distance : '5 کیلومتر' }
      ],
      MarkerTitle : '' ,
      MarkerDistance : '',
      findMarker : false ,
      myshowMap: false,
      staticAnchor: [16, 37],
      clicks: 0,
      delay: 700,
      timer: null,
      timerSelectstore : null ,
      centerMarker: [36.315263, 419.586968],
      maxBounds: latLngBounds([
        [36.114565, 419.728021],
        [36.589068, 419.11417]
      ]),
      zoom: 13,
      center: latLng(36.315263, 419.586968),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(36.360967, 59.509019),
      //   withTooltip: latLng(36.360967, 59.509019),
      currentZoom: 11.5,
      currentCenter: latLng(36.360967, 59.509019),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    hoverMarker(index){
      this.hover = true;
      this.MarketFined.filter((item , Itemindex) => {
          if (index == Itemindex) {
            this.MarkerTitle = item.title ;
            this.MarkerDistance = item.distance ;
          }
      })

    },
    unHoverMarker(){
      this.hover = false;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    changeCenter(event) {
      this.clicks++;
      if (this.clicks === 1) {
        var self = this;
        this.timer = setTimeout(function() {
          self.clicks = 0;
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        this.clicks = 0;
        console.log("hello");
        this.centerMarker = [event.latlng.lat, event.latlng.lng];
      }
    },
    submitMap(){
      alert('hello')
    },
    SelectStore(index){

      this.clicks++;
      if (this.clicks === 1) {
        var self = this;
        this.timerSelectstore = setTimeout(function() {
          self.clicks = 0;
        }, this.delay);
      } else {
        clearTimeout(this.timerSelectstore);
        this.clicks = 0;
        let Market ;
        this.MarketFined.filter((item , itemIndex) =>{
          if (index == itemIndex){
            Market = item
          }
        })
        this.myshowMap = false
        this.findMarker = false
        this.hover = false
        this.$store.dispatch('selectStore' , Market )
      }


      // alert(`Market is ${Market.ltlng} , name is ${Market.title}`)
    }
  },
  components: {
    ProductComponent,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LControl ,
  }
};
</script>

<style >
.v-label {
  text-align: right;
  margin-right: 7px;
}
.v-application--is-rtl
  .v-list-group--no-action.v-list-group--sub-group
  > .v-list-group__items
  > .v-list-item {
  padding-right: 40px !important;
}
.map {
  min-height: 100vh !important;
  position: sticky;
  top: 80px !important;
}
.someExtraClass {
  background-color: rgb(19, 2, 112);
  padding: 10px;
  border: 1px solid #333;
  border-radius: 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
}
.submitMap{
  position: absolute;
  top: 15px;
  right: 15px;
  font-family: "myFirstFont" !important;
}
.leaflet-right{
  width: 50% !important;
}
.leaflet-control{
  width: 100% !important;
}
.v-input__slot{
  padding-left: 10px !important;
}
.leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
  border: none !important;
}
</style>