<template>
  <v-row>
    <v-col col="12" md="4">
      <v-card class="pa-5">
        <h3>مشخصات عمومی</h3>
        <v-text-field
          prepend-icon="mdi-account-question-outline"
          label="نام و نام خانوادگی"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-human-male-female"
          label="جنسیت"
        ></v-text-field>
        <v-text-field prepend-icon="mdi-email" label="ایمیل"></v-text-field>
        <v-text-field
          prepend-icon="mdi-cellphone"
          label="شماره همراه"
        ></v-text-field>
        <v-text-field
          id="my-custom-input"
          v-model="date"
          clearable
          prepend-icon="mdi-calendar-clock"
          label="تاریخ تولد"
        ></v-text-field>
        <date-picker
          :disable="checkDate"
          element="my-custom-input"
          v-model="date"
        ></date-picker>
        <v-select
          prepend-icon="mdi-gender-male-female"
          label="وضعیت تأهل"
          :items="['مجرد', 'متأهل']"
        ></v-select>
      </v-card>
      <v-card class="mt-7 pa-5">
        <h3>تغییر رمز عبور</h3>
        <v-text-field
          prepend-icon="mdi-lock-minus-outline"
          label="رمز عبور فعلی"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock-plus"
          label="رمز عبور جدید"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock-open-check"
          label="تایید رمز عبور جدید"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card class="pa-5">
        <h3>مشخصات دیگر</h3>
        <v-select
          prepend-icon="mdi-map"
          :items="states"
          label="استان محل سکونت"
        ></v-select>
        <v-select
          prepend-icon="mdi-map"
          :items="citys"
          label="شهر محل سکونت"
        ></v-select>
        <v-textarea
          prepend-inner-icon="mdi-city"
          placeholder="آدرس محل سکونت خود را بنویسید"
          label="آدرس"
        ></v-textarea>
        <v-textarea
          prepend-inner-icon="mdi-comment"
          placeholder="از خودتان بنویسید"
          label="درباره من"
        ></v-textarea>
      </v-card>
      <v-card class="pa-5 mt-7">
        <h3 class="my-4">فایل ها ، تصاویر و مدارک</h3>
        <div class="mt-3 d-flex">
          <v-avatar
            size="150"
            rounded="true"
            class="ml-4"
            @click="AvatarClicked"
          >
            <v-img :src="imagesUploaded"></v-img>
          </v-avatar>
          <input
            type="file"
            ref="avatarFileHiddenInput"
            accept="image/*"
            class="avatarFileHiddenInput"
            @change="setImage"
          />
          <v-file-input
            accept="application/pdf"
            label="آپلود مدارک"
          ></v-file-input>
        </div>
      </v-card>
      <v-dialog max-width="600" v-model="croperDialog">
        <v-card class="pa-5">
          <vue-cropper
            ref="cropper"
            :aspect-ratio="1"
            :src="imgSrc"
            preview=".preview"
          >
          </vue-cropper>
          <v-card-actions>
            <v-btn color="success" @click.prevent="cropImage">ذخیره</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col cols="12" class="mt-4 d-flex"> 
      <v-spacer></v-spacer>
      <v-btn class="px-12" color="success" >تایید</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  data() {
    return {
      date: "",
      citys: ["مشهد", "تهران", "تبریز", "کرمان", "اصفهان", "شیراز"],
      states: [
        "تهران",
        "خراسان رضوی",
        "کرمان",
        "اصفهان",
        "فارس",
        "آذربایجان شرقی"
      ],
      imgSrc: "",
      croperDialog: false,
      imagesUploaded:
        "https://img1.pnghut.com/25/22/7/SgbBsQg6QY/neck-personal-assistant-facial-hair-sexism-nose.jpg"
    };
  },
  methods: {
    AvatarClicked() {
      this.$refs.avatarFileHiddenInput.click();
    },
    checkDate(formatted, dateMoment) {
      console.log();
      const dtNow = new Date();
      const yearNow = dtNow.toLocaleDateString("fa-IR", { year: "numeric" });
      const yearPersian = Number(this.NumberToEnglishFormat(yearNow));
      if (Number(dateMoment.jYear()) > yearPersian - 10) {
        return true;
      }
    },
    NumberToEnglishFormat(str) {
      var persianNumbers = [
          /۰/g,
          /۱/g,
          /۲/g,
          /۳/g,
          /۴/g,
          /۵/g,
          /۶/g,
          /۷/g,
          /۸/g,
          /۹/g
        ],
        arabicNumbers = [
          /٠/g,
          /١/g,
          /٢/g,
          /٣/g,
          /٤/g,
          /٥/g,
          /٦/g,
          /٧/g,
          /٨/g,
          /٩/g
        ];

      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        this.croperDialog = true;
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      this.imagesUploaded = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.croperDialog = false;
    }
  },
  components: { VueCropper }
};
</script>
<style>
.avatarFileHiddenInput {
  display: none;
}
</style>