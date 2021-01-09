<template>
  <v-card class="d-flex" height="80vh">
    <div class="chat-list-wraper ">
      <div class="header-chat-list d-flex justify-center pa-3">
        <div class="d-flex align-center">
          <img class="ml-2" src="../../assets/image/avatar.jpg" />
          <h4>محمد رسولی</h4>
        </div>
      </div>
      <div class="search-chat">
        <input placeholder="جستجو کنید" />
      </div>
      <div class="chat-lists">
        <perfect-scrollbar>
          <v-card
            dark
            link
            class="chat-view d-flex"
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
            :key="item"
          >
            <img class="avatar-chat" src="../../assets/image/avatar-1.jpg" />
            <div class="mb-0">
              <strong>علی سهرابی</strong>
              <p class="text-truncate mb-0">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
          </v-card>
        </perfect-scrollbar>
      </div>
    </div>
    <div class="chat-show-wraper">
      <div class="w-100 chat-show-header">
        <div class="d-flex ">
          <img src="" class="chat-show-header-img ml-2" alt="" />
          <span>علی سهرابی</span>
        </div>
        <div class="text-center">
          خرید خوار بار
        </div>
        <v-btn text>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <div class="chat-show-wrap-items">
        <perfect-scrollbar>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item my-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
          <div class="chat-show-item outher-item">
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                src="../../assets/image/avatar-1.jpg"
                alt=""
              />
              <div class="chat-show-item-message">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div class="timeSendmessage mt-1">
              <small class="d-inline-block">10 :12 </small>
            </div>
          </div>
        </perfect-scrollbar>
      </div>

      <div class="chat-send-message pa-3">
      
        <input
          type="file"
          class="uploadFileChat"
          ref="uploadFileChat"
          @change="uploadedFile"
          accept="image/*"
        />
         <div class="d-flex">
             <v-btn @click="sendMesssage"  text>
                  <v-icon>mdi-send</v-icon>
              </v-btn>
              <VueEmoji ref="emoji" @input="onInput" width="100%" height="35" />
              <v-btn text @click="attachFile">
                  <v-icon>mdi-paperclip</v-icon>
              </v-btn>
         </div>
      </div>
    </div>
  </v-card>
</template>
<script>
import VueEmoji from 'emoji-vue'
export default {
  data() {
    return {
      message: "",
      showEmoji : false
    };
  },

  methods: {
    attachFile() {
      this.$refs.uploadFileChat.click();
    },
    onInput(event) {
          //event.data contains the value of the textarea
      },
    sendMesssage() {},
    uploadedFile() {}
  },
  components: {
    VueEmoji
  },
  computed: {

  }
};
</script>
<style scoped>
.emoji-vue-wraper{
    width: 100%;
}
.emoji-menu{
    top: auto !important;
    bottom: 0 !important;
    transform: none !important;
}
.uploadFileChat {
  display: none;
}
.chat-send-message{
    position: relative;
}
.wraperEmoji{
    position: absolute;
    left: 20px;
    bottom: 80px;
    width: 250px;
    height: 250px;
    padding:15px ;
}
.chat-list-wraper {
  background-color: #43435e;
}
.ps {
  height: 100%;
}
.chat-list-wraper {
  width: 250px;
  color: white;
}
.chat-show-wraper {
  width: calc(100% - 250px);
}
.chat-show-header {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(214 214 214);
}
.chat-list-wraper * {
  font-weight: lighter;
}
.header-chat-list img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.text-truncate {
  width: 100% !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.chat-lists {
  height: calc(100% - 100px);
}
.chat-lists .avatar-chat {
  width: 35px;
  height: 35px;
  border-radius: 50% !important;
  margin-left: 8px;
  display: inline-block;
}
.chat-view > div {
  width: calc(100% - 40px);
}
.search-chat input {
  width: 100%;
  background-color: rgb(214 214 214);
  padding: 5px;
  outline: none;
}
.chat-show-wrap-items {
  height: calc(100% - 120px);
  /* overflow-y: auto; */
  padding: 15px;
}
.chat-view p {
  font-size: 14px;
  font-weight: lighter;
}
.chat-show-item {
  max-width: 300px;
}
.chat-show-item-img {
  width: 25px;
  height: 25px;
  border-radius: 50% !important;
  margin-left: 8px;
  display: inline-block;
}
.d-inline-block {
  display: inline-block;
}
.v-card {
  background-color: inherit !important;
}
.chat-show-item.my-item .chat-show-item-message {
  background-color: #418feb;
  box-shadow: 1px 2px 10px 3px #a5a3a3;
  padding: 10px;
  border-radius: 15px 0 15px 15px;
}
.chat-show-item.my-item .timeSendmessage {
  text-align: left;
}
.chat-show-item.outher-item .chat-show-item-message {
  background-color: rgb(230, 230, 238);
  box-shadow: 1px 2px 10px 3px #a5a3a3;
  padding: 10px;
  border-radius: 0px 15px 15px 15px;
}
.chat-show-item.outher-item .timeSendmessage {
  text-align: right;
  margin-right: 18px;
}
.chat-show-item.outher-item {
  margin-right: auto !important;
  margin-left: 0 !important;
  direction: ltr;
}
.chat-lists .chat-view {
  border-bottom: 1px solid rgb(148, 148, 148);
  padding: 15px 10px;
}
</style>