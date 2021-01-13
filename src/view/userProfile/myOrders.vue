<template>
      <div>
        <v-tabs
            v-model="tab"
        >
          <v-tab
              v-for="item in itemTabs"
              :key="item.tab"
          >
            <v-icon class="ml-3">{{ item.icon }}</v-icon>
            {{ item.tab }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat class="pa-3">
              <h2>نقد و بررسی اجمالی</h2>
              <v-card class="ma-3 d-flex align-center pa-4 py-10 mt-6" color="grey lighten-4">
                <p>کاپوچینو یکی از محبوب‌ترین نوشیدنی‌هایی است که از قهوه، شیر، شکر و... تهیه می‌شود و طعمی عالی دارد. این
                  نوشیدنی خاص و خوش‌طعم دوستداران زیادی دارد؛ اگر شما نیز از علاقه‌مندان به این نوشیدنی هستید، ما بسته
                  ساشه کاپوچینو «ترابیکا» مدل «Cappuccino» را پیشنهاد می‌کنیم. این محصول شامل 20 عدد ساشه (بسته‌ی کوچک)
                  است که هرکدام حاوی 25 گرم پودر کاپوچینو هستند؛ به‌این‌ترتیب می‌تواند برای هر روز یک یا چند ساشه را داخل
                  کیفتان قرار دهید و در محل‌کار، دانشگاه و... نوش‌جان کنید. ناگفته نماند که به هر ساشه، یک بسته‌ی کوچک
                  Choco Granule چسبانده شده که با اضافه کردنش به کاپوچینو، طعم بهتری به این نوشیدنی خواهید داد. بعد از باز
                  کردن ساشه، پودر را داخل آب جوش حل کنید و Choco Granule را روی آن بریزید. کاپوچینو «ترابیکا» در کنار کیک،
                  بیسکوییت و... میان‌وعده‌ای هیجان‌انگیز و خوشمزه خواهد بود.</p>
                <v-img width="100" class="mx-14" src="/images/review.png"></v-img>
              </v-card>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="pa-3">
              <h2>توضیحات</h2>
              <v-card class="ma-3 d-flex align-center pa-4 py-10 mt-6" color="grey lighten-4">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                  شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                  الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                  دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                  اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <v-img width="100" class="mx-14" src="/images/description.png"></v-img>
              </v-card>
            </v-card>
          </v-tab-item>
          <v-tab-item class="tabItemComment">
            <v-card flat class="pa-3 mt-4">
              <v-toolbar
                  dark
                  flat
              >
                <v-toolbar-title>نظرات کاربران</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn color="light-blue lighten-5" light>نظر خود را ثبت کنید </v-btn>
                <template v-slot:extension>
                  <v-tabs
                      v-model="tabComment"
                      align-with-title
                  >
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <span class="mx-4"> مرتب سازی بر اساس</span>
                    <v-tab
                        v-for="item in filterComments"
                        :key="item"
                    >
                      {{ item }}
                    </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>
              <div class="pa-7">
                <v-row class="border-bottom pt-3">
                  <v-col cols="4">
                    <div><strong>حسین سپاهی</strong></div>
                    <div><small>در تاریخ 17 مهر 1399</small></div>
                    <v-alert color="deep-orange accent-1" class="my-3" dense icon="mdi-thumb-down-outline">خرید این محصول را توصیه نمی‌کنم
                    </v-alert>
                    <div class="d-flex align-center"><span class="ml-3">فروشنده : </span>
                      <p class="mb-0">
                        <v-icon>mdi-store</v-icon>
                        <v-btn text color="info" class="px-0">دورمون</v-btn>
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="TitleComment border-bottom py-4 px-3">
                      بسیار عالی
                    </div>
                    <p class="commentText pa-3">
                      فعلا خوشمزه ترین کافی میکس بازار هست اما قیمتش بالا رفته. در شگفت انگیز خوب بود. بدون شکر این مارک
                      از همش بهتره که خییلی قیمتش بالا رفته.. دیگه نمیشه خرید.
                    </p>
                    <div class="pa-3">
                      این نظر برایتان مفید بود ؟
                      <v-btn class="mx-2" outlined>42
                        <v-icon class="mx-1">mdi-thumb-up-outline</v-icon>
                      </v-btn>
                      <v-btn outlined>0
                        <v-icon class="mx-1">mdi-thumb-down-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="border-bottom pt-3">
                  <v-col cols="4">
                    <div><strong>حسین سپاهی</strong></div>
                    <div><small>در تاریخ 17 مهر 1399</small></div>
                    <v-alert color="light-green accent-1" class="my-3" dense icon="mdi-thumb-up-outline">خرید این محصول را
                      توصیه میکنم
                    </v-alert>
                    <div class="d-flex align-center"><span class="ml-3">فروشنده : </span>
                      <p class="mb-0">
                        <v-icon>mdi-store</v-icon>
                        <v-btn text color="info" class="px-0">دورمون</v-btn>
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="TitleComment border-bottom py-4 px-3">
                      بسیار عالی
                    </div>
                    <p class="commentText pa-3">
                      فعلا خوشمزه ترین کافی میکس بازار هست اما قیمتش بالا رفته. در شگفت انگیز خوب بود. بدون شکر این مارک
                      از همش بهتره که خییلی قیمتش بالا رفته.. دیگه نمیشه خرید.
                    </p>
                    <div class="pa-3">
                      این نظر برایتان مفید بود ؟
                      <v-btn class="mx-2" outlined>42
                        <v-icon class="mx-1">mdi-thumb-up-outline</v-icon>
                      </v-btn>
                      <v-btn outlined>0
                        <v-icon class="mx-1">mdi-thumb-down-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="border-bottom pt-3">
                  <v-col cols="4">
                    <div><strong>حسین سپاهی</strong></div>
                    <div><small>در تاریخ 17 مهر 1399</small></div>
                    <v-alert color="light-green accent-1" class="my-3" dense icon="mdi-thumb-up-outline">خرید این محصول را
                      توصیه میکنم
                    </v-alert>
                    <div class="d-flex align-center"><span class="ml-3">فروشنده : </span>
                      <p class="mb-0">
                        <v-icon>mdi-store</v-icon>
                        <v-btn text color="info" class="px-0">دورمون</v-btn>
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="TitleComment border-bottom py-4 px-3">
                      بسیار عالی
                    </div>
                    <p class="commentText pa-3">
                      فعلا خوشمزه ترین کافی میکس بازار هست اما قیمتش بالا رفته. در شگفت انگیز خوب بود. بدون شکر این مارک
                      از همش بهتره که خییلی قیمتش بالا رفته.. دیگه نمیشه خرید.
                    </p>
                    <div class="pa-3">
                      این نظر برایتان مفید بود ؟
                      <v-btn class="mx-2" outlined>42
                        <v-icon class="mx-1">mdi-thumb-up-outline</v-icon>
                      </v-btn>
                      <v-btn outlined>0
                        <v-icon class="mx-1">mdi-thumb-down-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
</template>

<script>
export default {
  name: "myOrders",
  data(){
    return {
      tab : 0,
      itemTabs: [
        {tab: 'نقد و برررسی', icon: 'mdi-message-draw'},
        {tab: 'مشخصات', icon: 'mdi-folder-star'},
        {tab: 'نظرات کاربران', icon: 'mdi-comment-text-multiple'},
        {tab: 'پرسش و پاسخ', icon: 'mdi-help-circle-outline'}
      ],
    }
  }
}
</script>

<style scoped>

</style>