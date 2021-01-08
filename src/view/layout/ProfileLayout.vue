<template>
  <div class="d-flex pb-5" style="background-color:#f2f2f2 ; min-height:100vh">
    <v-navigation-drawer
      app
      fixed
      right
      expand-on-hover
      :mini-variant.sync="mini"
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item exact link to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>داشبورد</v-list-item-title>
        </v-list-item>
        <v-list-item link exact to="/profile/orders">
          <v-list-item-icon>
            <v-icon>mdi-order-bool-descending-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>سفارشات</v-list-item-title>
        </v-list-item>
        <v-list-item link exact to="/profile/product">
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>محصولات</v-list-item-title>
        </v-list-item>
        <v-list-item link exact to="/profile/editProfile">
          <v-list-item-icon>
            <v-icon>mdi-account-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ویرایش پروفایل</v-list-item-title>
        </v-list-item>
        <v-list-item link exact to="/profile/chat">
          <v-list-item-icon>
            <v-icon>mdi-chat-processing-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>سیستم پیام رسان</v-list-item-title>
        </v-list-item>
        <v-list-item link exact to="/">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="pt-15 w-100" :class="mini ? 'mypr-5' : 'mypr-15'">
        <v-toolbar class="my-v-toolbar" dense fixed :class="mini ? '' : 'vtoolbar-big'">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>دورمون</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      <v-container class="container">
        <router-view></router-view>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mini: true
    };
  }
};
</script>
<style>
.v-navigation-drawer {
  border-left: 1px solid #dfdede;
  z-index: 100 !important;
}
.mypr-5 {
  padding-right: 56px !important;
}
.mypr-15 {
  padding-right: 256px;
}
.vtoolbar-big{
width: calc(100% - 256px) !important;
}
.my-v-toolbar{
      height: 48px;
    position: fixed;
    top: 0;
    width: calc(100% - 56px);
    z-index: 99;
}
</style>