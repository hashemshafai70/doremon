<template>
  <v-card class="pa-4 cardProduct" min-height="370px" :to="`/Products/${product.title}/${product.id}`">
    <v-img :src="product.img" max-height="150px"></v-img>
    <div>
      <div class="wraperTitleProductCard">
          <small>{{product.title}}</small>
      </div>
      <p class="d-flex justify-space-between align-items-center">
        <small style="max-width:90px"
          ><v-icon small color="green">mdi-car-limousine</v-icon>ارسال سریع
          سوپرمارکتی</small
        >
        <small class="text-left grey--text" style="direction:ltr"><v-icon small color="yellow">mdi-star</v-icon>{{product.rate}}/({{product.countRate}})</small>
      </p>
      <div class="d-flex justify-space-between align-items-center">
        <v-btn @click.stop.prevent="plusProduct" color="red darken-2" dark>+</v-btn>
        <div>
            <h4 v-if="product.percentDiscount" style="direction : ltr"><v-chip small dark color="red">{{product.percentDiscount}}</v-chip> <span class="discount-text-decoration grey--text">{{product.discountPrice}}</span></h4>
            <h4>{{product.price}} تومان</h4>
        </div>
      </div>
      <v-card-actions class="mt-3">
        <small class="d-flex mb-0 "
          ><v-icon>mdi-store</v-icon>
          <span class="mx-3">فروشنده : دورمون</span>
          <v-img width="12px" src="../assets/image/logo.png"></v-img
        ></small>
      </v-card-actions>
    </div>
  </v-card>
</template>
<script>
export default {
    props:{
        product: {
            type: Object
        }
    },
    methods: {
      plusProduct(){
        console.log('hello');
      }
    }
}   
</script>
<style >
    .cardProduct{
        position: relative;
    }
    .cardProduct .v-card__actions{
        position: absolute;
        bottom: 0;
    }
    .wraperTitleProductCard{
        height: 40px;
        margin-bottom: 10px;
    }
</style>