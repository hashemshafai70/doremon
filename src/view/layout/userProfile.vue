<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="12" md="3">
        <v-card
            height="65vh"
            width="256"
            class="mx-auto navigationUserProfile"
        >
          <v-navigation-drawer  permanent>
            <v-list-item exact active-class="bg-none" to="/userProfile">
              <v-list-item-content>
                <v-timeline
                    align-top
                    dense
                >
                  <v-timeline-item
                      color="pink"
                      small
                  >
                    <template v-slot:icon>
                      <v-avatar>
                        <img src="../../assets/image/avatar.jpg">
                      </v-avatar>
                    </template>
                    <v-row class="pt-1">
                      <v-col cols="12">
                        <strong>محمد رحمانی</strong>
                        <p class="mt-2">m.Rahmani@gmail.com</p>
                      </v-col>

                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item
                      color="pink"
                      small
                  >
                    <v-row class="pt-1">
                      <v-col cols="4">
                        <strong>کیف پول</strong>
                      </v-col>
                      <v-col cols="8">
                        <strong>0 تومان</strong>
                        <div class="caption">
                          <v-btn @click.prevent="increaseBudgeUser" class="pa-0" color="info" text>افزایش موجودی
                            <v-icon>mdi-chevron-left</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item
                      color="pink"
                      small
                  >
                    <v-row class="pt-1">
                      <v-col cols="5">
                        <strong>امتیاز دورمون</strong>
                      </v-col>
                      <v-col>
                        <div class="caption">
                          <v-chip small>121 امتیاز</v-chip>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
              <v-list-item
                  link
                  to="/userProfile/myOrders"
              >
                <v-list-item-icon>
                  <v-icon>mdi-order-bool-descending-variant</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>سفارش های من</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
                  to="/userProfile/myLikes"
              >
                <v-list-item-icon>
                  <v-icon>mdi-heart-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>علاقمندی های من</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
                  to="/userProfile/myComments"
              >
                <v-list-item-icon>
                  <v-icon>mdi-comment-text-multiple-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>نظرات و پرسش و پاسخ من</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
                  to="/userProfile/myInfo"
              >
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>اطلاعات حساب</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
                  to="/"
              >
                <v-list-item-icon>
                  <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>خروج</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
       <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "userProfile",
  methods:{
    increaseBudgeUser(){
      alert('hello')
    }
  }
}
</script>

<style>
.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before {
  right: 22px !important;
  left: auto;
}
.v-timeline-item__divider {
  justify-content: end !important;
  width: 20px !important;
  min-width: auto !important;
  margin-left: 20px;
  margin-right: 10px;
}

.v-timeline--dense .v-timeline-item {
  justify-content: flex-end !important;
}

.v-timeline--dense .v-timeline-item__body {
  width: 100% !important;
  max-width: 100% !important;
}
.navigationUserProfile{
  position: sticky !important;
  top: 20px;
}
</style>