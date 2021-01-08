<template>
  <div>
    <v-sheet class="myvsheet" color="white">
      <v-sheet class="v-sheetroot">
        <v-container height="100%">
          <v-row class="justify-center align-center" height="100%">
            <v-col cols="8" md="5" class="text-center white--text">
              <h1>فروشگاه اینترنتی دورمون</h1>
              <p class="text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                modi quis consectetur porro aspernatur voluptates quod nemo. In
                quidem animi odit minima voluptate iusto quaerat. Molestiae,
                vitae! Minus, rerum nulla.
              </p>
              <v-btn
                target="_blank"
                href="http://example.com/CafeBazaarLinkDirector.php?packagename=com.example.app"
                >دانلود نرم افزار</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <v-parallax
        class="myparallax"
        src="../assets/image/background.jpg"
      ></v-parallax>
    </v-sheet>
    <v-container class="pt-12">
      <v-row class="my-6">
        <v-col cols="12" md="3">
          <v-card
            flat
            tile
            color="rgb(249, 249, 249)"
            class="d-flex flex-column justify-center align-center"
          >
            <v-img
              max-width="100px"
              src="../assets/image/contactSeller.png"
            ></v-img>
            <h3 class="my-3">گفتگو با میزبان پیش از پرداخت</h3>
            <small>امکان گفتگوی آنلاین پیش از پرداخت</small>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            flat
            tile
            color="rgb(249, 249, 249)"
            class="d-flex flex-column justify-center align-center"
          >
            <v-img max-width="100px" src="../assets/image/discount.jpg"></v-img>
            <h3 class="my-3">تخفیفات بالا تا 70 درصد</h3>
            <small>امکان تخفیفات بالا</small>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            flat
            tile
            color="rgb(249, 249, 249)"
            class="d-flex flex-column justify-center align-center text-center"
          >
            <v-img max-width="100px" src="../assets/image/bread.jpg"></v-img>
            <h3 class="my-3">خرید از نانوایی بدون صف</h3>
            <small
              >بدون اینکه در صف بمانید از نان گرم را در منزل خود بیارید
            </small>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            flat
            tile
            color="rgb(249, 249, 249)"
            class="d-flex flex-column justify-center align-center text-center"
          >
            <v-img max-width="100px" src="../assets/image/support.png"></v-img>
            <h3 class="my-3">پشتیبانی آنلاین</h3>
            <small>همراه شما در تمام مراحل از سفارش تا پایان خرید</small>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="position-Sticky d-flex align-center">
      <v-container>
        <v-row>
          <v-text-field
            class="ml-2"
            v-model="SearchCategory"
            label="جستجو کنید ..."
          ></v-text-field>
          <div class="d-flex">
            <v-btn
              class="pa-0 btnDefault"
              text
              min-width="30px"
              @click="grid = true"
              :class="grid ? 'activeBtn' : ''"
              ><v-icon class="pa-0 ma-0">mdi-view-grid</v-icon></v-btn
            >
            <v-btn
              class="pa-0 btnDefault"
              text
              min-width="30px"
              @click="grid = false"
              :class="grid ? '' : 'activeBtn'"
              ><v-icon class="pa-0 ma-0">mdi-view-list</v-icon></v-btn
            >
          </div>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <card-home
          @showDialog="showdialog"
          v-for="item in filteredItems"
          :grid="grid"
          :mydata="item"
          :key="item.id"
        />
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="450">
      <v-card class="px-5">
        <v-card-title>{{ dialogData.title }} </v-card-title>
        <div class="d-flex">
          <v-card-text>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </v-card-text>
          <v-img max-width="100" max-height="100" :src="dialogData.img"></v-img>
        </div>
        <v-divider class="my-3"></v-divider>
        <v-card-actions>
          <v-btn block class="ma-2" outlined color="indigo" to="Products">
         خرید
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-avatar
      @click="windowToTop"
      v-show="showWindowToTop"
      color="indigo lighten-1"
      class="windowToTop white--text"
      ><v-btn text
        ><v-icon color="white">mdi-chevron-up</v-icon></v-btn
      ></v-avatar
    >
  </div>
</template>
<script>
import CardHome from "../components/CardHome";
export default {
  name: "Home",
  created: function() {
    window.addEventListener("scroll", this.move);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.move);
  },
  data() {
    return {
      showWindowToTop: false,
      dialog: false,
      grid: true,
      items: [
        {
          id: 1,
          img:
            "https://cdn.britannica.com/86/124786-004-1F7D6700/Supermarket-Jamnagar-Gujarat-India.jpg",
          title: "سوپرمارکت",
          subtitle: "بیشتر از 10000 محصول"
        },
        {
          id: 2,
          img: "https://sarvban.com/wp-content/uploads/2020/04/11.jpg",
          title: "میوه و سبزی جات",
          subtitle: "بیشتر از 10000 محصول"
        },
        {
          id: 3,
          img:
            "https://gooshtiran.com/wp-content/uploads/2018/11/%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D8%AF%D8%B1%D8%A8-%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87-%DA%AF%D9%88%D8%B4%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-2.jpg",
          title: "پروتئین",
          subtitle: "بیشتر از 10000 محصول"
        },
        {
          id: 4,
          img: "https://media.hamshahrionline.ir/d/2019/07/27/4/4342141.jpg",
          title: "نانوایی",
          subtitle: "بیشتر از 10000 محصول"
        },
        {
          id: 5,
          img:
            "https://www.andisheh-sabz.com/wp-content/uploads/2019/08/%D8%B1%D8%A7%D9%87-%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D9%84%D8%A8%D9%86%DB%8C%D8%A7%D8%AA%DB%8C.jpg",
          title: "لبنیات",
          subtitle: "بیشتر از 10000 محصول"
        },
        {
          id: 6,
          img:
            "https://safarzon.com/mag/wp-content/uploads/2020/01/%D8%A7%D8%A8%D8%B9%D8%A7%D8%AF-%D8%AC%D8%AF%DB%8C%D8%AF-%DA%A9%D8%A7%D9%88%D8%B111.jpg",
          title: "گل فروشی",
          subtitle: "بیشتر از 10000 محصول"
        }
      ],
      SearchCategory: "",
      dialogData: {}
    };
  },
  methods: {
    move() {
      if (document.documentElement.scrollTop > 250) {
        this.showWindowToTop = true;
      } else {
        this.showWindowToTop = false;
      }
    },
    showdialog(event) {
      console.log(event);
      this.dialog = event.show;
      this.dialogData = this.items.filter(item => {
        if (item.id == event.id) return true;
        return false;
      })[0];
    },
    windowToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  components: {
    CardHome
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return (
          item.title.toLowerCase().indexOf(this.SearchCategory.toLowerCase()) >
          -1
        );
      });
    }
  }
};
</script>  
<style scoped>
.myvsheet {
  height: calc(100vh - 60px);
  position: relative;
}
.v-sheetroot {
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.75) !important;
  bottom: 0;
  z-index: 9;
  width: 100%;
}
.v-sheetroot .container,
.v-sheetroot .container .row {
  height: 100%;
}
.myparallax {
  height: 100% !important;
}
.windowToTop {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  transition: all 0.7s;
}
.v-avatar {
  margin: 10px;
  height: 36px !important;
  width: 36px !important;
  min-width: 36px !important;
}
.btnDefault {
  color: grey;
}
.activeBtn {
  color: rgb(56, 3, 141) !important;
}
@media only screen and (max-width: 600px) {
  .windowToTop {
    position: fixed;
    bottom: 50px;
    right: 20px;
    z-index: 10;
    transition: all 0.7s;
  }
}
</style>