<template>
      <v-card class="pa-3" >
        <h3 class="my-4">تاریخچه سفارشات</h3>
        <v-tabs
            active-class="red--text"
            v-model="tab"
        >
          <v-tabs-slider color="red"></v-tabs-slider>
          <v-tab
              v-for="item in itemTabs"
              :key="item.tab"
          >
            {{ item.tab }}
            <v-badge
                bordered
                color="error"
                :content="item.count"
                overlap
                offset-y="-2"
                offset-x="-2"
            >
            </v-badge>

          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item >
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>تحویل شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>تحویل شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>لغو شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>لغو شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item >
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>تحویل شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>تحویل شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>تحویل شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item >
            <v-card flat class="pa-3 bordered mt-4" >
              <div class="border-bottom d-flex ">
                <div>
                  <p class="d-flex"><span>24 دی 1399</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>DRMN-6541212</span><v-icon class="mx-1" color="grey">mdi-circle-small</v-icon><span>لغو شده</span></p>
                  <p>مبلغ کل 378000 تومان</p>
                </div>
                <V-spacer></V-spacer>
                <div><v-btn color="primary"> مشاهده سفارش  <v-icon>mdi-chevron-left</v-icon></v-btn></div>
              </div>
              <div class="d-flex">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/111931345.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/110158063.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
                <img class="imgOrderInCarts" src="https://dkstatics-public.digikala.com/digikala-products/3272437.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80">
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
</template>

<script>
export default {
  name: "myOrders",
  data(){
    return {
      tab : 0,
      itemTabs: [
        {tab: 'کل سفارشات', count: '4'},
        {tab: 'تحویل شده', count: '3'},
        {tab: 'لغو شده', count: '1'},
      ],
    }
  }
}
</script>

<style>
.imgOrderInCarts{
  width: 100px;
  height: 100px;
  margin: 10px 20px;
}
</style>