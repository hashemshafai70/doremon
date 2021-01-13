<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="8">
        <v-card class="pa-4">
          <h4>آدرس تحویل سفارش</h4>
          <p><span>تهران</span> , <span>آپادانا</span></p>
          <v-btn class="mb-3" color="primary" @click="editLocation">ویرایش محله</v-btn>
          <h4>تکمیل آدرس</h4>
          <div class="d-flex">
            <v-text-field class="mx-2" label="کوچه ..."></v-text-field>
            <v-text-field class="mx-2" label="پلاک ..."></v-text-field>
            <v-text-field class="mx-2" label="توضیحات اضافی"></v-text-field>
          </div>
          <p>
            <v-icon>mdi-account</v-icon>
            محمد رضایی
          </p>
        </v-card>
        <v-card class="pa-4 mt-4">
          <h4>شیوه پرداخت</h4>
          <v-radio-group
              class="mt-4"
              row
              v-model="PayStatus"
          >
            <v-radio
                label="primary"
                color="primary"
                value="Cart"
            >
              <template v-slot:label>
                <div class="d-flex">
                  <v-icon :color="PayStatus == 'Cart' ? 'info' : ''" class="ml-4">mdi-credit-card-check-outline</v-icon>
                  <div>
                    <p class="mb-0" :class="PayStatus == 'Cart' ? 'info--text' : ''">پرداخت اینترنتی</p>
                    <small class="grey--text">آنلاین با تمامی کارت‌های بانکی</small>
                  </div>
                </div>
              </template>
            </v-radio>
            <v-radio
                label="primary"
                color="primary"
                value="In"
            >
              <template v-slot:label>
                <div class="d-flex">
                  <v-icon :color="PayStatus == 'Cart' ? '' : 'info'">mdi-account-cash</v-icon>
                  <div>
                    <p class="mb-0" :class="PayStatus == 'Cart' ? '' : 'info--text'">پرداخت در محل</p>
                  </div>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-card>
        <v-card class="pa-4 mt-4">

          <v-btn block color="info" class="d-flex" text @click="showDiscountInput = !showDiscountInput">
             <h4> کارت هدیه و کد تخفیف</h4>
             <v-spacer></v-spacer>
             <v-icon>{{ showDiscountInput ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
           </v-btn>
          <v-expand-transition>
            <div class="wraperInputDiscount" v-if="showDiscountInput">
              <v-text-field  v-model="discountCode" label="کد تخفیف" placeholder="افزودن کد تخفیف">
                <template v-slot:append>
                  <v-btn text>ثبت</v-btn>
                </template>
              </v-text-field>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mt-4 pa-3">
          <h4 class="mb-9">خلاصه سفارش</h4>
          <div class="border-bottom py-5" v-for="(item,index) in [0,1]" :key="item" >
            <v-row class=" d-flex px-4 myCursor" justify="space-between" @click="showProductShippingCart(index)">
              <div class="text-center">
                <h4>مرسوله {{ index + 1 }}</h4>
                <small>2 کالا </small>
              </div>
              <div class="text-center">
                <h4>ارسال عادی</h4>
                <small>پنج شنبه 21 دی ماه</small>
              </div>
              <div class="text-center">
                <h4>مبلغ مرسوله : 237000 تومان</h4>
              </div>
              <v-icon>{{isExpandProductShipping == index ? 'mdi-chevron-down' :'mdi-chevron-up' }}</v-icon>
            </v-row>
            <v-expand-transition>
              <div class="d-flex mt-4" v-if="isExpandProductShipping == index">
                <div class="wraperProductForSell">
                  <img src="https://dkstatics-public.digikala.com/digikala-products/113263793.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80" alt="">
                  <p> کروسان کاکائو پچ پچ مقدار 30 گرمی بسته 9 عددی</p>
                </div>
              </div>
            </v-expand-transition>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-3">
            <div class="pa-3 border-bottom d-flex ">
              <span>قیمت کالاها(2)</span>
              <v-spacer></v-spacer>
              <span>77000 تومان</span>
            </div>
          <div class="border-bottom pa-3">
            <div class="d-flex">
              <span>جمع کل </span>
              <v-spacer></v-spacer>
              <span>77000 تومان</span>
            </div>
            <div class="d-flex grey--text">
              <small>هزینه ارسال</small>
              <v-spacer></v-spacer>
              <small>24,500 تومان</small>
            </div>
          </div>
          <div class="pa-3">
              <div class="d-flex">
                <strong>مبلغ قابل پرداخت</strong>
                <v-spacer></v-spacer>
                <strong>101,500 تومان</strong>
              </div>
            <v-btn color="purple py-5 mt-7" dark block >پرداخت و ثبت نهایی سفارش</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogLocation" max-width="600">
        <v-card class="pa-3">
          <div style="height: 500px; width: 100%">
            <l-map
                v-if="showMap"
                :zoom="zoom"
                :center="center"
                :options="mapOptions"
                style="height: 100%"
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate"
                @click="changeCenter"
            >
              <l-tile-layer
                  :url="url"
                  :attribution="attribution"
              />
              <l-marker :lat-lng="centerMarker">
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
            </l-map>
          </div>
          <v-btn color="success" @click="submitMap">
            ارسال
          </v-btn>
        </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker , LIcon  } from "vue2-leaflet";
export default {
  name: "shipping",
  data() {
    return {
      showDiscountInput: false ,
      discountCode : '',
      PayStatus: "Cart",
      isExpandProductShipping : null,
      dialogLocation : false,

      /// map
      clicks: 0,
      delay: 700,
      staticAnchor: [16, 37],
      timer: null,
      zoom: 13,
      center: latLng(36.315263, 59.509019),
      centerMarker: [36.315263, 59.509019],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter:  latLng(36.360967, 59.509019),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    }
  },
  methods:{
    showProductShippingCart(index){
      if (index == this.isExpandProductShipping ){
        this.isExpandProductShipping = null
      }else {
        this.isExpandProductShipping = index
      }
    },
    editLocation(){
      this.dialogLocation = true
    },
    //// map
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    changeCenter(event) {
      console.log(event.latlng.lat, event.latlng.lng);
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
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
}
</script>

<style scoped>
.wraperInputDiscount{
  max-width: 400px !important;
}
</style>