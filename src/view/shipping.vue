<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="8">
        <v-card class="pa-4">
          <h4>آدرس تحویل سفارش</h4>
          <p><span>تهران</span> , <span>آپادانا</span> , <span>پلاک 40</span> , <span>واحد 20</span></p>
          <p>
            <v-icon>mdi-account</v-icon>
            محمد رضایی
          </p>
          <v-btn text color="info">تغییر یا ویرایش آدرس
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
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
             <v-icon>mdi-chevron-up</v-icon>
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
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "shipping",
  data() {
    return {
      showDiscountInput: false ,
      discountCode : '',
      PayStatus: "Cart"
    }
  }
}
</script>

<style scoped>
.wraperInputDiscount{
  max-width: 400px !important;
}
</style>