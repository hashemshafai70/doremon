<template>
  <v-container class="py-4 mt-5">
    <v-tabs class="inherit-bg" v-model="cartTab"
    >
      <v-tab>
        سبد خرید
      </v-tab>
    </v-tabs>
    <v-row class="mt-3">
      <v-col cols="12" md="8">
        <v-card class="pa-3 d-flex mt-3">
          <img class="ml-3 imgCartPay" src="https://dkstatics-public.digikala.com/digikala-products/2147104.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" />
          <div class="d-flex flex-column mt-4">
            <h3 class="mb-3">کاپوچینو ترابیکا مدل Cappuccino بسته 20 عددی</h3>
            <small class="mb-2"><v-icon class="ml-1" >mdi-shield-check-outline</v-icon>گارانتی اصالت و سلامت فیزیکی کالا</small>
            <small class="mb-2"><v-icon class="ml-1">mdi-store</v-icon>انتوریوم</small>
            <div class="d-flex mb-2">
              <p class="border-left pl-4 ml-3"><v-icon class="ml-1">mdi-car-estate</v-icon><small>ارسال دیجی‌کالا از ۱ روز کاری دیگر</small></p>
              <p><v-icon class="ml-1">mdi-calendar-check-outline</v-icon>موجود در انبار فروشنده</p>
            </div>
            <div class="d-flex align-center"><div class="counterOrder d-flex"><v-btn text>-</v-btn><span>1</span><v-btn text>+</v-btn></div><v-btn text class="mx-2"><small><v-icon>mdi-trash-can-outline</v-icon>حذف</small></v-btn></div>
          </div>
          <v-spacer></v-spacer>
          <v-row class="d-flex pl-3 pb-3" align="end"  justify="end">
            <div>
              <h5 class="red--text">تخفیف 7000 تومان</h5>
              <h2>79000 تومان</h2>
            </div>
          </v-row>
        </v-card>
        <v-card class="pa-3 d-flex mt-3">
          <img class="ml-3 imgCartPay" src="https://dkstatics-public.digikala.com/digikala-products/2147104.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" />
          <div class="d-flex flex-column mt-4">
            <h3 class="mb-3">کاپوچینو ترابیکا مدل Cappuccino بسته 20 عددی</h3>
            <small class="mb-2"><v-icon class="ml-1" >mdi-shield-check-outline</v-icon>گارانتی اصالت و سلامت فیزیکی کالا</small>
            <small class="mb-2"><v-icon class="ml-1">mdi-store</v-icon>انتوریوم</small>
            <div class="d-flex mb-2">
              <p class="border-left pl-4 ml-3"><v-icon class="ml-1">mdi-car-estate</v-icon><small>ارسال دیجی‌کالا از ۱ روز کاری دیگر</small></p>
              <p><v-icon class="ml-1">mdi-calendar-check-outline</v-icon>موجود در انبار فروشنده</p>
            </div>
            <div class="d-flex align-center"><div class="counterOrder d-flex"><v-btn text>-</v-btn><span>1</span><v-btn text>+</v-btn></div><v-btn text class="mx-2"><small><v-icon>mdi-trash-can-outline</v-icon>حذف</small></v-btn></div>
          </div>
          <v-spacer></v-spacer>
          <v-row class="d-flex pl-3 pb-3" align="end"  justify="end">
            <div>
              <h5 class="red--text">تخفیف 7000 تومان</h5>
              <h2>79000 تومان</h2>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-5">
          <div class="border-bottom mb-3">
           <div class="d-flex mb-1">
             <span>قیمت کالاها (1)</span>
             <v-spacer></v-spacer>
             <span>90000 تومان</span>
           </div>
            <div class="d-flex mb-1">
             <span>تخفیف کالاها</span>
             <v-spacer></v-spacer>
             <span class="red--text">7000  تومان (17%)</span>
           </div>
          </div>
          <div class="d-flex flex-column">
            <div class="d-flex mb-2">
              <span>جمع سبد خرید</span>
              <v-spacer></v-spacer>
              <strong>83000 تومان</strong>
            </div>
            <small>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد</small>
            <v-btn block class="py-6 mb-3 mt-5" dark color="purple" to="/shipping">ادامه فرایند خرید</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-3 pb-8">
          <v-card-title class="border-bottom">پیشنهادی برای شما</v-card-title>
          <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
            <v-card class="carouselItem pa-3" link>
              <img src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" class="imgOrderCart" alt="" />
              <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
              <div class="d-flex">
                <div></div>
                <v-spacer></v-spacer>
                <div>
                  <p>
                    <small class="discount-text-decoration grey--text">111000 تومان</small
                    >
                    <v-chip dark class="mr-3" color="purple">5%</v-chip>
                  </p>
                  <h4>
                    <strong class="purple--text">105000</strong><small>تومان</small>
                  </h4>
                </div>
              </div>
            </v-card>
            <v-card class="carouselItem pa-3" link>
              <img src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" class="imgOrderCart" alt="" />
              <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
              <div class="d-flex">
                <div></div>
                <v-spacer></v-spacer>
                <div>
                  <p>
                    <small class="discount-text-decoration grey--text">111000 تومان</small
                    >
                    <v-chip dark class="mr-3" color="purple">5%</v-chip>
                  </p>
                  <h4>
                    <strong class="purple--text">105000</strong><small>تومان</small>
                  </h4>
                </div>
              </div>
            </v-card>
            <v-card class="carouselItem pa-3" link>
              <img src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" class="imgOrderCart" alt="" />
              <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
              <div class="d-flex">
                <div></div>
                <v-spacer></v-spacer>
                <div>
                  <p>
                    <small class="discount-text-decoration grey--text">111000 تومان</small
                    >
                    <v-chip dark class="mr-3" color="purple">5%</v-chip>
                  </p>
                  <h4>
                    <strong class="purple--text">105000</strong><small>تومان</small>
                  </h4>
                </div>
              </div>
            </v-card>
            <v-card class="carouselItem pa-3" link>
              <img src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" class="imgOrderCart" alt="" />
              <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
              <div class="d-flex">
                <div></div>
                <v-spacer></v-spacer>
                <div>
                  <p>
                    <small class="discount-text-decoration grey--text">111000 تومان</small
                    >
                    <v-chip dark class="mr-3" color="purple">5%</v-chip>
                  </p>
                  <h4>
                    <strong class="purple--text">105000</strong><small>تومان</small>
                  </h4>
                </div>
              </div>
            </v-card>
            <v-card class="carouselItem pa-3" link>
              <img src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" class="imgOrderCart" alt="" />
              <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
              <div class="d-flex">
                <div></div>
                <v-spacer></v-spacer>
                <div>
                  <p>
                    <small class="discount-text-decoration grey--text">111000 تومان</small
                    >
                    <v-chip dark class="mr-3" color="purple">5%</v-chip>
                  </p>
                  <h4>
                    <strong class="purple--text">105000</strong><small>تومان</small>
                  </h4>
                </div>
              </div>
            </v-card>
          </VueSlickCarousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
name: "cart",
  data(){
    return{
      cartTab : 0 ,
      settings: {
        dots: true,
        // focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 5
      },
    }
  },
  components:{
    VueSlickCarousel
  }
}
</script>

<style scoped>
.imgCartPay{
  width: 200px;
  height: 200px;
}
.counterOrder{
  justify-content: space-between;
  padding: 3px 5px;
  font-size: 22px;
  border: 1px solid #cccccc;
  border-radius: 7px;
}
.counterOrder span{
  display: inline-block;
  margin: 0 10px;
}
.counterOrder .v-btn.v-size--default{
  font-size: 20px !important;
}
.imgOrderCart{
  height: 200px;
  display: block;
  margin: 0 auto
}
</style>