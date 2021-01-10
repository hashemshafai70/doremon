<template>
  <v-container>
    <v-toolbar dense>
      <v-btn class="green--text activeBtnGreen">
        سوپرمارکت
      </v-btn>
      <v-btn text class="text--green">
        شگفت انگیز سوپر مارکتی
      </v-btn>
      <v-btn text class="text--green">
        محصولات پروتئینی
      </v-btn>
      <v-btn text class="text--green">
        تنقلات
      </v-btn>
      <v-btn text class="text--green">
        صبحانه
      </v-btn>
      <v-btn text class="text--green">
        نوشیدنی
      </v-btn>
      <v-btn text class="text--green">
        کالاهای اساسی خوار و بار
      </v-btn>
    </v-toolbar>
    <v-breadcrumbs :items="itemsBreadCrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-left</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-card class="pa-4 py-8">
      <v-row>
        <v-col cols="12" class="border-left" md="4">
          <div class="card-header-product">
            <h2 class="red--text">پیشنهاد ویژه دورمون</h2>
            <p class="discountCircle mb-0">
              <span>50%</span><span>تخفیف</span>
            </p>
          </div>
          <div class="wraperShowImgSlider">
            <div class="wraperShowProductIcons">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <v-icon>mdi-heart-outline</v-icon>
                  </v-btn>
                </template>
                <span>افزودن به علاقمندی ها</span>
              </v-tooltip>
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </template>
                <span>اشتراک گذاری محصول</span>
              </v-tooltip>
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <v-icon>mdi-bell-ring</v-icon>
                  </v-btn>
                </template>
                <span>اطلاع رسانی ویژه دورمون</span>
              </v-tooltip>
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <v-icon>mdi-chart-line</v-icon>
                  </v-btn>
                </template>
                <span>نمودار قیمت</span>
              </v-tooltip>
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <v-icon>mdi-compare</v-icon>
                  </v-btn>
                </template>
                <span>مقایسه محصول</span>
              </v-tooltip>
            </div>
            <div class="containerProductZoomer">
              <ProductZoomer
                :base-images="images"
                :base-zoomer-options="zoomerOptions"
              />
            </div>
          </div>
          <!-- <div class="wraperSliderShowProduct">
            <div>
              <img
                class="imgProductPrimary"
                src="https://dkstatics-public.digikala.com/digikala-products/119223759.jpg?x-oss-process=image/resize,h_1600/quality,q_80"
                alt=""
              />
            </div>
            <div>
              <img
                class="imgProductPrimary"
                src="https://dkstatics-public.digikala.com/digikala-products/119223762.jpg?x-oss-process=image/resize,h_1600/quality,q_80"
                alt=""
              />
            </div>
            <div>
              <img
                class="imgProductPrimary"
                src="https://dkstatics-public.digikala.com/digikala-products/119223758.jpg?x-oss-process=image/resize,h_1600/quality,q_80"
                alt=""
              />
            </div>
            <v-avatar>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-avatar>
          </div> -->
        </v-col>
        <v-col cols="12" md="4">
          <div
            class="d-flex flex-column"
            style="justify-content: space-between;height:100%"
          >
            <div>
              <div class="headerTitleCart">
                <h3 class="mb-7">کاپوچینو ایتالیانو نسکافه بسته 20 عددی</h3>
              </div>
              <div class="informationCategoryProductCart">
                <p>
                  <small class="grey--text"
                    ><v-icon color="yellow">mdi-star</v-icon>4.3 (621)</small
                  ><v-btn class="info--text" link text
                    >388 دیدگاه کاربران</v-btn
                  >
                </p>
                <table class="tableInfoProductCategor">
                  <tr>
                    <td>برند:</td>
                    <td>
                      <v-btn class="info--text" link text>نسکافه:</v-btn
                      ><img
                        class="imgBrandInfo"
                        src="https://dkstatics-public.digikala.com/digikala-brands/100014552.png?x-oss-process=image/resize,m_lfit,h_120,w_120/quality,q_80"
                        alt=""
                      />
                    </td>
                    <td>دسته بندی</td>
                    <td>
                      <v-btn class="info--text" link text>
                        قهوه فوری و هات چاکلت:</v-btn
                      >
                    </td>
                  </tr>
                </table>
              </div>
              <div class="memberShipToDoremon">
                <p class="mb-0">
                  <v-icon color="purple darken-2">mdi-star-four-points</v-icon
                  >خدمات ویژه کاربران دورمون
                  <v-btn link text color="info" class="px-0"
                    >شما هم عضو شوید <v-icon>mdi-chevron-left</v-icon></v-btn
                  >
                </p>
                <v-list class="d-flex listMeberShibStar">
                  <v-list-item>1000 تومان هدیه نقدی</v-list-item>
                  <v-list-item>ارسال رایگان</v-list-item>
                  <v-list-item>30 روز بازگشت کالا</v-list-item>
                </v-list>
              </div>
            </div>
            <div class="d-flex justify-content-between border-top pt-3">
              <div align="center">
                <v-icon>mdi-face-agent</v-icon>
                <small> پشتیبانی 24 ساعته 7 روز هفته</small>
              </div>
              <div align="center">
                <v-icon>mdi-account-cash-outline</v-icon>
                <small>امکان پرداخت در محل</small>
              </div>
              <div align="center">
                <v-icon>mdi-shield-account-outline</v-icon>
                <small>ضمانت اصل بودن کالا</small>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="header-AddProduct d-flex">
            <v-spacer></v-spacer>
            <h5>
              <v-icon color="red">mdi-octagram</v-icon>بیش از ۲۸۰ نفر از
              خریداران این محصول را پیشنهاد داده‌اند
            </h5>
          </div>
          <v-card
            class="pa-3 mt-3 wrapperAddProductCartToPay"
            color="grey lighten-3"
          >
            <v-list color="inherit-bg">
              <v-list-item link class="d-flex align-center py-3">
                <img class="logoSeller ml-3" src="../assets/image/logo.png" />
                <div>
                  <p class="mb-1">فروشنده : دورمون</p>
                  <p class="info--text mb-0">
                    عملکرد : 5 از 5 | 90% رضایت از کالا
                  </p>
                </div>
                <v-spacer></v-spacer>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="py-3">
                <v-row align="center">
                  <v-icon class="ml-3">mdi-shield-check-outline</v-icon>
                  <p class="mb-0">گارانتی اصالت و سلامت فیزیکی کالا</p>
                </v-row>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="py-3" link>
                <v-row align="center">
                  <v-icon class="ml-3" color="green">mdi-car-pickup</v-icon>
                  <p class="mb-0">ارسال سریع سوپر مارکتی</p>
                  <v-spacer></v-spacer>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-row>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="py-3" link>
                <div class="discountPriceWraper w-100">
                  <div class="d-flex">
                    <span>قیمت مصرف کننده : </span>
                    <v-spacer></v-spacer>
                    <p>
                      <span class="discount-text-decoration grey--text"
                        >72000</span
                      >
                      <v-chip class="mr-3" dark color="purple" small
                        >18%</v-chip
                      >
                    </p>
                  </div>
                  <div class="d-flex">
                    <v-spacer></v-spacer>
                    <h3 class="purple--text">59000 <small>تومان</small></h3>
                  </div>
                  <div class="text-center pb-6">
                    <v-btn dark class="mt-4" block color="purple"
                      >افزودن به سبد خرید</v-btn
                    >
                    <small
                      ><v-icon color="amber accent-4">mdi-chip</v-icon>
                      دریافت ۶ امتیاز دیجی‌کلاب با خرید این کالا
                    </small>
                  </div>
                </div>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item link>
                <v-row class="d-flex" align="center">
                  <p class="mb-0">10 فروشنده دیگر این کالا</p>
                  <v-spacer></v-spacer>
                  <v-btn color="purple" text>مشاهده</v-btn>
                </v-row>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="pa-4 my-8 pb-10">
      <div class="realatedProductHeaderCard">
        <h3>محصولات مرتبط</h3>
      </div>
      <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
        <v-card class="carouselItem pa-3" link>
          <v-img
            src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          ></v-img>
          <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
          <div class="d-flex">
              <div></div>
            <v-spacer></v-spacer>
            <div>
              <p>
                <small class="discount-text-decoration grey--text">111000 تومان</small
                ><v-chip dark class="mr-3" color="purple">5%</v-chip>
              </p>
              <h4>
                <strong class="purple--text">105000</strong><small>تومان</small>
              </h4>
            </div>
          </div>
        </v-card>
        <v-card class="carouselItem pa-3" link>
          <v-img
            src="https://dkstatics-public.digikala.com/digikala-products/908839.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          ></v-img>
          <p><small> کاپوچینو ترابیکا مدل cappuccino بسته 20 عددی</small></p>
          <div class="d-flex">
            <div></div>
            <v-spacer></v-spacer>
            <div>
              <h4>
                <strong class="purple--text">105000</strong><small>تومان</small>
              </h4>
            </div>
          </div>
        </v-card>
        <v-card class="carouselItem pa-3" link>
          <v-img
            src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          ></v-img>
          <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
          <div class="d-flex">
              <div></div>
            <v-spacer></v-spacer>
            <div>
              <p>
                <small class="discount-text-decoration grey--text">111000 تومان</small
                ><v-chip dark class="mr-3" color="purple">5%</v-chip>
              </p>
              <h4>
                <strong class="purple--text">105000</strong><small>تومان</small>
              </h4>
            </div>
          </div>
        </v-card>
        <v-card class="carouselItem pa-3" link>
          <v-img
            src="https://dkstatics-public.digikala.com/digikala-products/908839.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          ></v-img>
          <p><small> کاپوچینو ترابیکا مدل cappuccino بسته 20 عددی</small></p>
          <div class="d-flex">
            <div></div>
            <v-spacer></v-spacer>
            <div>
              <h4>
                <strong class="purple--text">105000</strong><small>تومان</small>
              </h4>
            </div>
          </div>
        </v-card>
        <v-card class="carouselItem pa-3" link>
          <v-img
            src="https://dkstatics-public.digikala.com/digikala-products/292342.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          ></v-img>
          <p><small>کافی میکس گوددی مدل Cappuccino بسته 30 عددی</small></p>
          <div class="d-flex">
              <div></div>
            <v-spacer></v-spacer>
            <div>
              <p>
                <small class="discount-text-decoration grey--text">111000 تومان</small
                ><v-chip dark class="mr-3" color="purple">5%</v-chip>
              </p>
              <h4>
                <strong class="purple--text">105000</strong><small>تومان</small>
              </h4>
            </div>
          </div>
        </v-card>
        <v-card class="carouselItem pa-3" link>
          <v-img
            src="https://dkstatics-public.digikala.com/digikala-products/908839.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          ></v-img>
          <p><small> کاپوچینو ترابیکا مدل cappuccino بسته 20 عددی</small></p>
          <div class="d-flex">
            <div></div>
            <v-spacer></v-spacer>
            <div>
              <h4>
                <strong class="purple--text">105000</strong><small>تومان</small>
              </h4>
            </div>
          </div>
        </v-card>
      </VueSlickCarousel>
    </v-card>
  </v-container>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5
      },
      itemsBreadCrumbs: [
        {
          text: "دورمون",
          disabled: true,
          to: "/"
          //   to: ""
        },
        {
          text: "خوردنی و آشامیدنی",
          disabled: true,
          to: "/profile"
        },
        {
          text: "نوشیدنی",
          disabled: true,
          to: "/Products"
        },
        {
          text: "قهوه فوری و هات چاکلت",
          disabled: true,
          to: "/asdasd"
        }
      ],
      images: {
        thumbs: [
          {
            id: 1,
            url:
              "https://www.yoohooworld.com/assets/images/vue_product_zoomer/thumbs/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://www.yoohooworld.com/assets/images/vue_product_zoomer/thumbs/2.jpeg"
          }
        ],
        normal_size: [
          {
            id: 1,
            url:
              "https://www.yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://www.yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
          }
        ],
        large_size: [
          {
            id: 1,
            url: "/images/1.jpeg"
          },
          {
            id: 2,
            url: "/images/2.jpeg"
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3, // scale for zoomer
        pane: "pane", // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: "zoomer", // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click: false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "bottom",
        zoomer_pane_position: "left"
      }
    };
  },
  components: { VueSlickCarousel }
};
</script>
<style>
img {
  max-width: 100%;
}
.activeBtnGreen {
  background-color: rgb(222, 241, 193) !important;
}
.card-header-product {
  padding: 7px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.card-header-product .discountCircle {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid red;
  text-align: center;
}
.card-header-product .discountCircle span:first-of-type {
  font-size: 20px;
  display: inline-block;
  margin-bottom: -8px;
}
.wraperShowProductIcons {
  width: 10%;
}
.wraperShowImgSlider {
  display: flex;
  padding-top: 20px;
}
.wraperShowImgSlider i {
  color: #868686 !important;
}
.wraperSliderShowProduct {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wraperSliderShowProduct div {
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 80px;
  height: 80px;
  padding: 5px;
  margin: 10px;
  opacity: 0.75;
  cursor: pointer;
  transition: 0.5s;
}
.wraperSliderShowProduct div:hover {
  opacity: 1;
}
.imgBrandInfo {
  max-height: 40px;
}
.headerTitleCart {
  border-bottom: 1px solid #ccc;
}
.tableInfoProductCategor {
  border: none;
  font-size: 12px;
}
.tableInfoProductCategor td {
  padding: 0;
  vertical-align: middle;
}
.tableInfoProductCategor tr td:nth-of-type(2) {
  display: flex;
  align-items: center;
}
.tableInfoProductCategor button {
  padding: 0 !important;
}
.memberShipToDoremon {
  border: 1px solid #ccc;
  padding: 7px;
  border-radius: 8px;
  margin-top: 20px;
}
.listMeberShibStar {
  padding-top: 0;
  justify-content: space-between;
}
.listMeberShibStar .v-list-item {
  font-size: 12px;
  padding: 0;
  justify-content: center;
  text-align: center;
}
.scroller-at-bottom {
  display: block !important;
  width: 70% !important;
}
.pane-container {
  top: -120px !important;
  width: 450px !important;
  left: -450px !important;
}
.containerProductZoomer {
  direction: ltr !important;
  text-align: left !important;
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
}
.scroller-at-bottom .thumb-list .responsive-image {
  width: auto !important;
}
.header-AddProduct h5 {
  width: 50%;
}
.logoSeller {
  width: 20px !important;
}
.realatedProductHeaderCard {
  border-bottom: 2px solid purple;
  margin-bottom: 15px;
  padding: 10px;
}
.carouselItem .v-image{
    height: 200px !important;
    width: auto;
}
.carouselItem {
    height: 350px !important
}
.carouselItem:hover{
    transform: scale(1.03);
}
</style>