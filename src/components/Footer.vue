<template>
  <v-sheet color="blue-grey darken-4" class="mt-12 pt-8" elevation="12">
    <v-container class="white--text">
      <v-row>
        <v-col cols="12" md="6" class="white--text">
          <h1 class="text--white mb-4">فروشگاه اینترنتی دورمون</h1>
          <p class="white--text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            perferendis quisquam omnis totam saepe? In, unde laudantium.
            Perspiciatis quo perferendis, temporibus, ab ea laborum facere
            mollitia consectetur alias dolorem sunt.
          </p>
        </v-col>
        <v-col cols="6" md="3">
          <ul class="mr-6  mt-6">
            <li>
              <router-link class="white--text" to="">
                تماس با پشتیبانی
              </router-link>
            </li>
            <li>
              <router-link class="white--text" to="">
                سوالات متداول</router-link
              >
            </li>
            <li>
              <router-link class="white--text" to=""> حقوق کاربران</router-link>
            </li>
            <li>
              <router-link class="white--text" to="">
                قوانین استفاده از شب</router-link
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="6" md="3">
          <p class="mt-6">پرطرفدارترین دسته بندی ها :</p>
          <ul class="mr-6 ">
            <li>
              <router-link class="white--text" to="">سوپر مارکت</router-link>
            </li>
            <li>
              <router-link class="white--text" to="">پروتئین</router-link>
            </li>
            <li><router-link class="white--text" to="">لبنیات</router-link></li>
            <li>
              <router-link class="white--text" to="">گل فروشی</router-link>
            </li>
          </ul>
        </v-col>
       <v-col cols=12>
          <v-divider dark></v-divider>
      </v-col>
        <v-col
          cols="12"
          class="text-center d-flex align-center"
          :class="$vuetify.breakpoint.mdAndUp ? 'flex-row' : 'flex-column'"
        >
         <div>
            <v-avatar>
              <router-link to=""><v-icon>mdi-telegram</v-icon></router-link>
            </v-avatar>
            <v-avatar>
              <router-link to=""><v-icon>mdi-twitter</v-icon></router-link>
            </v-avatar>
            <v-avatar>
              <router-link to=""><v-icon>mdi-linkedin</v-icon></router-link>
            </v-avatar>
            <v-avatar>
              <router-link to=""><v-icon>mdi-instagram</v-icon></router-link>
            </v-avatar>
            <v-avatar>
              <router-link to=""><v-icon>mdi-youtube</v-icon></router-link>
            </v-avatar>
          </div>
          <v-spacer></v-spacer>
           <p class="mb-0">
            کلیه حقوق محفوظ است
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
.v-avatar {
  background-color: white;
  margin: 10px;
  height: 36px !important;
  width: 36px !important;
  min-width: 36px !important;
}
a {
  color: white !important;
}
ul li {
  margin-top: 10px;
  font-size: 14px;
}
</style>