<template>
  <v-sheet min-height="100vh">
    <v-container style="min-height:100vh" class="pa-0" fluid>
      <v-row style="min-height:102vh">
        <v-col
          min-height="100%"
          cols="8"
          class="d-flex flex-column justify-space-between align-center pa-0"
        >
          <div style="width:90% ; margin-left:auto;margin-right:auto;">
            <div class="d-flex align-center mt-5">
              <v-img
                max-height="50"
                max-width="50"
                src="../../assets/image/logo.png"
              ></v-img>
              دورمون
            </div>
          </div>
          <div v-if="!verify" style="max-width:400px;">
            <h2 class="">ورود یا ثبت نام</h2>
            <p class="mt-5">
              برای ورود یا ثبت نام ، شماره تماس خود را وارد کنید
            </p>
            <v-form ref="formLogin" @submit.prevent="requestLogin">
              <v-text-field
                style="direction:ltr"
                class="pl-4 mt-4"
                prefix="+98-"
                label="شماره تماس"
                placeholder="*****"
                v-model="numberEnter"
                :rules="rules"
                :error-messages="errorSendMessage"
              ></v-text-field>
              <v-btn class="mt-5" block color="primary" rounded type="submit">
                <template v-if="!loadingLogin">
                  ادامه
                </template>
                <template v-else>
                  <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </template>
              </v-btn>
            </v-form>
          </div>
          <div v-else-if="verify" style="max-width:400px;">
            <div class="d-flex justify-space-between">
              <h2 style="direction:ltr" class="">{{ numberUser }}</h2>
              <v-chip small @click="EditPhone">ویرایش شماره </v-chip>
            </div>
            <p class="mt-5">
              کد فعال‌سازی از طریق پیامک به شماره‌ی شما ارسال شد. لطفا کد را
              وارد کنید.
            </p>
            <v-form ref="verifyForm" @submit.prevent="verificationSms">
              <PincodeInput
                class="PincodeInput"
                :class="valdateCode ? 'valideCode' : 'notValidCode'"
                v-model="code"
                placeholder="0"
              />
              <small class="red--text" v-if="errorSuccessCode.length > 0">{{
                errorSuccessCode[0]
              }}</small>
              <v-btn class="mt-5" text @click="SendCode"
                ><p class="mb-0">
                  کد را در یافت نکردید ؟
                  <span class="timedecoration"
                    >ارسال دوباره کد {{ time }}
                  </span>
                </p></v-btn
              >
              <v-btn class="mt-5" block color="primary" rounded type="submit">
                <template v-if="!loadingSms">
                  تأیید
                </template>
                <template v-else>
                  <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </template>
              </v-btn>
            </v-form>
          </div>
          <v-divider class="mt-16"></v-divider>
        </v-col>
        <v-col
          min-height="100%"
          cols="4"
          class="d-flex flex-column justify-center align-center pa-0"
        >
          <v-img
            src="https://www.treehugger.com/thmb/DH3xHLXHmadnv4-nh0moOd2YFKo=/1000x1000/smart/filters:no_upscale()/ethicalclothesshoppingapp-45d59f649d984b2e943056ee92ef2e76.jpg"
          >
            <v-sheet
              class="pa-8 d-flex flex-column justify-space-between"
              dark
              width="100%"
              height="100%"
              color="rgba(0,0,0,0.6)"
            >
              <div class="d-flex">
                <v-spacer></v-spacer
                ><v-btn to="/" outlined
                  ><v-icon class="ml-2" small>mdi-close</v-icon>بستن</v-btn
                >
              </div>
              <div class="mt-5">
                <h1 class="my-5">فروشگاه اینترنتی دورمون</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda sapiente voluptatem architecto excepturi temporibus
                  nam aut at, tempore laudantium accusamus enim optio atque
                  consequuntur, doloremque nostrum. Veritatis suscipit quasi
                  perspiciatis.
                </p>
              </div>
              <p class="text-center mb-0">09151234567</p>
            </v-sheet>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import PincodeInput from "vue-pincode-input";
import Axios from "../../service";
import store from "../../store";
export default {
  data() {
    return {
      code: "",
      loadingSms: false,
      loadingLogin: false,
      numberEnter: "",
      verify: false,
      time: "",
      interval1: "",
      valdateCode: false,
      errorSendMessage: [],
      errorSuccessCode: [],
      rules: [
        v => !!v || "فیلد موبایل الزامی است",
        v => /\d/.test(v) || "فقط رقم وارد کنید",
        v => (v && v.length == 10) || "شماره موبایل باید 10 رقم باشد",
        v =>
          /9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/.test(v) ||
          "َشماره موبایل صحیح وارد کنید"
      ]
    };
  },
  beforeDestroy() {
    clearInterval(this.interval1);
  },
  computed: {
    numberUser() {
      return `+98${this.numberEnter}`;
    }
  },
  methods: {
    SendCode(){
         Axios.post("/user/sms/send", {
          mobile: `0${this.numberEnter}`,
          id: null
        })
          .then(response => {
            if (response.data.status) {
              console.log(response);
              this.verify = true;
              clearInterval(this.interval1);
              this.startTimer(120);
            } else {
              this.errorSendMessage.push(response.data.message);
            }
          })
          .catch(response => {
            console.log(response);
            this.errorSendMessage.push("خطایی در برقراری ارتباط رخ داده است");
          })
          .finally(()=>  this.loadingLogin = false );
    },
    requestLogin() {
      if (this.$refs.formLogin.validate()) {
        this.loadingLogin = true;
        this.SendCode()
      }
    },
    EditPhone() {
      this.verify = false;
      clearInterval(this.interval1);
    },
    startTimer(duration) {
      var timer = duration,
        minutes,
        seconds;
      this.interval1 = setInterval(
        function() {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          this.time = minutes + ":" + seconds;
          if (--timer < 0) {
            this.time = duration;
            clearInterval(this.interval1);
          }
        }.bind(this),
        1000
      );
    },
  
    verificationSms() {
      if (this.valdateCode) {
        this.loadingSms = true;
        Axios.post("user/login", {
          mobile: `0${this.numberEnter}`,
          verify_code: this.code
        }).then(({ data }) => {
          console.log(data);
          if (data.status) {
            this.valdateCode = true;
            store.dispatch('setUser' , {userToken : data.token })
            this.$router.push("/");
          } else {
            this.valdateCode = false;
            this.errorSuccessCode.push(data.message);
          }
        }).catch(() => {
            this.errorSuccessCode.push('خطایی در برقراری ارتیاط رخ داده است');
        }).finally(() => this.loadingSms = false);
      } else {
        this.errorSuccessCode.push("کد ارسال شده را وارد کنید");
      }
    }
  },
  watch: {
    code() {
      this.errorSuccessCode = [];
      this.valdateCode = false;
      if (this.code.length === 4) {
        //send Request
        this.valdateCode = true;
        this.verificationSms();
      }
    },
    numberEnter() {
      this.errorSendMessage = [];
    }
  },
  components: {
    PincodeInput
  }
};
</script>
<style >
.PincodeInput {
  margin-left: auto;
  margin-right: auto;
  display: block !important;
  text-align: center;
  direction: ltr;
}
.timedecoration {
  text-decoration: 1px solid rgb(6, 6, 58);
}
.valideCode > input {
  border: 1px solid rgb(22, 150, 22);
}
.notValidCode > input {
  border: 1px solid red;
}
</style>