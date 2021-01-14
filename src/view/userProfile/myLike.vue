<template>
  <v-card class="pa-3">
    <v-tabs
        color="red"
    >
      <v-tabs-slider color="red"></v-tabs-slider>
      <v-tab>
        کالاهای مورد علاقه
      </v-tab>
    </v-tabs>
    <div>
      <v-card flat class="pa-3 bordered mt-4 d-flex">
        <div class="d-flex">
          <img
              class="imgOrderInCarts"
              src="https://dkstatics-public.digikala.com/digikala-products/121605044.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لوازم تناسب اندام تی آر ایکس مدل تاکتیکال 1</p>
            <p>مبلغ کل 378000 تومان</p>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-menu bottom right :offset-x="true">
            <template v-slot:activator="{on , attrs}">
              <v-icon class="ml-2" v-on="on" v-bind="attrs">mdi-dots-vertical</v-icon>
            </template>
            <v-list>
              <v-list-item link>
                <v-icon color="red">mdi-trash-can-outline</v-icon>
                <small>حذف</small>
              </v-list-item>
              <v-list-item link>
                <v-icon class="ml-2">mdi-card-search</v-icon>
                <small>مشاهده محصول</small>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
      <v-card flat class="pa-3 bordered mt-4 d-flex">
        <div class="d-flex">
          <img
              class="imgOrderInCarts"
              src="https://dkstatics-public.digikala.com/digikala-products/121605044.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لوازم تناسب اندام تی آر ایکس مدل تاکتیکال 1</p>
            <p>مبلغ کل 378000 تومان</p>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-menu bottom right :offset-x="true">
            <template v-slot:activator="{on , attrs}">
              <v-icon class="ml-2" v-on="on" v-bind="attrs">mdi-dots-vertical</v-icon>
            </template>
            <v-list>
              <v-list-item link>
                <v-icon color="red">mdi-trash-can-outline</v-icon>
                <small>حذف</small>
              </v-list-item>
              <v-list-item link>
                <v-icon class="ml-2">mdi-card-search</v-icon>
                <small>مشاهده محصول</small>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
      <v-card flat class="pa-3 bordered mt-4 d-flex">
        <div class="d-flex">
          <img
              class="imgOrderInCarts"
              src="https://dkstatics-public.digikala.com/digikala-products/121605044.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لوازم تناسب اندام تی آر ایکس مدل تاکتیکال 1</p>
            <p>مبلغ کل 378000 تومان</p>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-menu bottom right :offset-x="true">
            <template v-slot:activator="{on , attrs}">
              <v-icon class="ml-2" v-on="on" v-bind="attrs">mdi-dots-vertical</v-icon>
            </template>
            <v-list>
              <v-list-item link>
                <v-icon color="red">mdi-trash-can-outline</v-icon>
                <small>حذف</small>
              </v-list-item>
              <v-list-item link>
                <v-icon class="ml-2">mdi-card-search</v-icon>
                <small>مشاهده محصول</small>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
      <v-card flat class="pa-3 bordered mt-4 d-flex">
        <div class="d-flex">
          <img
              class="imgOrderInCarts"
              src="https://dkstatics-public.digikala.com/digikala-products/121605044.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لوازم تناسب اندام تی آر ایکس مدل تاکتیکال 1</p>
            <p>مبلغ کل 378000 تومان</p>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-menu bottom right :offset-x="true">
            <template v-slot:activator="{on , attrs}">
              <v-icon class="ml-2" v-on="on" v-bind="attrs">mdi-dots-vertical</v-icon>
            </template>
            <v-list>
              <v-list-item link>
                <v-icon color="red">mdi-trash-can-outline</v-icon>
                <small>حذف</small>
              </v-list-item>
              <v-list-item link>
                <v-icon class="ml-2">mdi-card-search</v-icon>
                <small>مشاهده محصول</small>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </div>

  </v-card>
</template>

<script>
export default {
  name: "myLike"
}
</script>

<style scoped>

</style>