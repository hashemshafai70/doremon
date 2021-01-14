<template>
  <v-card class="pa-3">
    <v-tabs
        color="red"
    >
      <v-tabs-slider color="red"></v-tabs-slider>
      <v-tab>
        نظرات من
      </v-tab>
    </v-tabs>
    <div>
      <v-card flat class="pa-3 bordered mt-4 d-flex">
        <div class="d-flex">
          <img
              class="imgOrderInCarts"
              src="https://dkstatics-public.digikala.com/digikala-products/115307948.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لطفا دقت کنید</p>
            <small>لطفا به سایز سفارش شده کفش دقت کنید و کفش را فقط با سایز 43 ارسال کنید</small>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-chip color="red" class="mx-3" small dark>تایید نشده</v-chip>
          <v-menu bottom right offset-x="10">
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
              src="https://dkstatics-public.digikala.com/digikala-products/115307948.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لطفا دقت کنید</p>
            <small>لطفا به سایز سفارش شده کفش دقت کنید و کفش را فقط با سایز 43 ارسال کنید</small>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-chip color="success" class="mx-3" small dark>تایید شده</v-chip>
          <v-menu bottom right offset-x="10">
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
              src="https://dkstatics-public.digikala.com/digikala-products/115307948.jpg?x-oss-process=image/resize,m_fill,h_150,w_150/quality,q_60"
              alt="">
          <div>
            <p class="d-flex">لطفا دقت کنید</p>
            <small>لطفا به سایز سفارش شده کفش دقت کنید و کفش را فقط با سایز 43 ارسال کنید</small>
          </div>
        </div>
        <V-spacer></V-spacer>
        <div>
          <v-chip class="mx-3" small dark>در حال بررسی</v-chip>
          <v-menu bottom right offset-x="10">
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
  name: "myComments"
}
</script>

<style scoped>

</style>