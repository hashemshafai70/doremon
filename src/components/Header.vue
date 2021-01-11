<template>
  <div>
    <v-toolbar dense height="63">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="!$vuetify.breakpoint.mdAndUp"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="!$vuetify.breakpoint.mdAndUp"></v-spacer>
      <v-toolbar-title class="ml-3">
        <v-avatar class="my-2">
          <v-img src="../assets/image/logo.png"></v-img>
        </v-avatar>
        دورمون
      </v-toolbar-title>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn text>
          فروشگاه
        </v-btn>
        <v-btn text>
          اخبار
        </v-btn>
        <v-btn text>
          درباره ما
        </v-btn>
        <v-btn text>
          تماس با ما
        </v-btn>
      </template>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <template v-if="userLogin">
          <v-menu z-index="110" bottom min-width="150px" :offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-account
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/profile" dense link>
                <v-list-item-icon class="ml-3"
                  ><v-icon>mdi-account</v-icon></v-list-item-icon
                >
                <v-list-item-title class="mysubtitle-1"
                  >پروفایل کاربری</v-list-item-title
                >
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item dense link @click="logout">
                <v-list-item-icon class="ml-3"
                  ><v-icon>mdi-exit-to-app</v-icon></v-list-item-icon
                >
                <v-list-item-title class="mysubtitle-1">خروج</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn icon to="/cart">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn text to="/login">
            ورود
          </v-btn>

          <v-btn text to="/login">
            ثبت نام
          </v-btn>
        </template>
      </template>
      <template v-else>
        <template v-if="!userLogin">
          <v-menu z-index="11" bottom min-width="150px" :offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-account
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/login" dense link>
                <v-list-item-icon class="ml-3"
                  ><v-icon>mdi-login</v-icon></v-list-item-icon
                >
                <v-list-item-title class="mysubtitle-1">ورود</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item dense link to="/login">
                <v-list-item-icon class="ml-3"
                  ><v-icon>mdi-account-plus</v-icon></v-list-item-icon
                >
                <v-list-item-title class="mysubtitle-1"
                  >ثبت نام</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-else>
          <v-menu z-index="11" bottom min-width="150px" :offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-account
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/profile" dense link>
                <v-list-item-icon class="ml-3"
                  ><v-icon>mdi-account</v-icon></v-list-item-icon
                >
                <v-list-item-title class="mysubtitle-1"
                  >پروفایل کاربری</v-list-item-title
                >
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item dense link to="/login">
                <v-list-item-icon class="ml-3"
                  ><v-icon>mdi-exit-to-app</v-icon></v-list-item-icon
                >
                <v-list-item-title class="mysubtitle-1">خروج</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </template>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item v-if="userLogin">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>فروشگاه</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>اخبار</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>درباره ما</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-card-account-phone-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>تماس با ما</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    userLogin() {
      return store.state.userLogin;
    }
  },
  methods: {
    logout() {
      store.dispatch("logOut");
      this.$router.push("/");
    }
  }
};
</script>
<style>
.v-navigation-drawer {
  z-index: 10 !important;
}
</style>
