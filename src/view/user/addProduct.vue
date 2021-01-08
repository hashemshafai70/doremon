<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="pa-5">
        <h3 class="mb-4">مشخصات محصول را وارد کنید :</h3>
        <v-autocomplete
          label="دسته بندی"
          v-model="values"
          :items="items"
          dense
          chips
          small-chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-title>
               نتیجه ای پیدا نشد
              </v-list-item-title>
            </v-list-item>
          </template>
          </v-autocomplete
        >
        <v-combobox
          append-icon="mdi-rename-box"
          v-model="nameProduct"
          :items="namesProducts"
          :search-input.sync="search"
          hide-selected
          label="نام محصول"
          small-chips
        >
          <template v-slot:no-data>
            <v-card max-width="350px" elevation="0" class="pa-3">
              <p>
                نتیجه ای برای کلمه "<strong>{{ search }}</strong
                >" پیدا نشد . <kbd>enter</kbd> را فشار دهید تا جدیدا آن را اضافه
                کنید
              </p>
            </v-card>
          </template>
        </v-combobox>
        <v-text-field append-icon="mdi-watermark" label="برند"></v-text-field>
        <v-text-field type="number" label="تعداد"></v-text-field>
        <v-text-field
          type="number"
          label="  میزان تخیف (درصد) "
          v-model="discount"
        ></v-text-field>
        <v-textarea
          filled
          label="توضیحات"
          prepend-inner-icon="mdi-comment"
        ></v-textarea>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card class="pa-4">
        <div class="d-flex justify-center flex-column align-center">
          <v-img
            max-width="100px"
            @click="$refs.input.click()"
            src="../../assets/image/newProduct.jpg"
            alt="Cropped Image"
          ></v-img>
          <p>تصاویر مربوط به محصول را آپلود کنید</p>
        </div>
        <input
          class="display-none"
          ref="input"
          type="file"
          name="image"
          accept="image/*"
          @change="setImage"
        />

        <v-sheet
          class="pa-5 d-flex flex-wrap align-center"
          v-if="imagesUploaded.length > 0"
          color="grey lighten-1"
        >
          <div
            v-for="item in imagesUploaded"
            :key="item.id"
            class="ma-3"
            :class="item.selected && item.selected == true ? 'outlined' : ''"
          >
            <v-hover v-slot="{ hover }">
              <v-img
                max-width="205px"
                :src="item.src"
                alt="Cropped Image"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal white--text"
                    style="height: 100%;"
                  >
                    <v-avatar
                      size="35"
                      class="mx-1"
                      color="white"
                      dark
                      @click="trashimg(item.id)"
                    >
                      <v-icon color="red">
                        mdi-delete-empty
                      </v-icon>
                    </v-avatar>
                    <v-avatar
                      size="35"
                      class="mx-1"
                      color="white"
                      dark
                      @click="selectPrimary(item.id)"
                    >
                      <v-icon color="blue">
                        mdi-check-box-multiple-outline
                      </v-icon>
                    </v-avatar>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </div>
        </v-sheet>
        <v-dialog max-width="600" v-model="croperDialog">
          <v-card class="pa-5">
            <vue-cropper
              ref="cropper"
              :aspect-ratio="16 / 9"
              :src="imgSrc"
              preview=".preview"
            />
            <v-card-actions>
              <v-btn color="success" @click.prevent="cropImage">ذخیره</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
      <div class="justify-end d-flex mt-5">
        <v-btn color="success" @click="sendProductToDatabase">ثبت محصول</v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  data: () => ({
    items: ["لبنیات", "پروتئین", "خوار و بار", "محصولات آرایشی"],
    namesProducts: ["شامپو", "پفک", "چیپس", "نوشابه"],
    nameProduct: "",
    values: "",
    discount: 0,
    search: null,
    croperDialog: false,
    // cropImg: "",
    imgSrc: "",
    imagesUploaded: [],
    id: 0
  }),
  methods: {
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    sendProductToDatabase() {
      this.outlined = !this.outlined;
      const fileConverted = this.dataURLtoFile(
        this.imagesUploaded[0].src,
        "mohammad"
      );
      console.log(fileConverted);
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
      this.imagesUploaded.push({
        id: this.generateId(),
        src: this.$refs.cropper.getCroppedCanvas().toDataURL()
      });
      this.croperDialog = false;
    },
    trashimg(ImgId) {
      this.imagesUploaded.map((item, index) => {
        if (item.id == ImgId) {
          this.imagesUploaded.splice(index, 1);
        }
      });
    },
    selectPrimary(ImgId) {
      this.imagesUploaded.map((item, index) => {
        if (ImgId == item.id) {
          this.imagesUploaded[index].selected = true;
        } else {
          if (item.selected) this.imagesUploaded[index].selected = false;
        }
      });
      this.$forceUpdate();
    },
    generateId() {
      return this.id++;
    }
  },
  components: { VueCropper },
  watch: {}
};
</script>
<style>
.v-autocomplete .v-label {
  top: 0;
}
.v-avatar {
  cursor: pointer;
}
.outlined {
    border: 4px solid black;
    position: relative;
}
.outlined::after{
  content : 'تصویر اصلی';
  font-size: 14px;
  position: absolute;
  top: -25px ;
  color: rgb(2, 2, 66);
  right: 0;
}
</style>