<template>
  <v-card class="d-flex" height="80vh">
    <div class="chat-list-wraper ">
      <div class="header-chat-list d-flex justify-center pa-3">
        <div class="d-flex align-center">
          <img class="ml-2" :src="user.src" />
          <h4>{{ user.name }}</h4>
        </div>
      </div>
      <div class="search-chat">
        <input
          v-model="searchChat"
          ref="searchChatRef"
          placeholder="جستجو کنید"
        />
      </div>
      <div class="chat-lists">
        <perfect-scrollbar>
          <v-card
            dark
            link
            class="chat-view d-flex"
            v-for="item in filterListsItem"
            :key="item.id"
            :class="item.selected ? 'selectedChanel' : 'chanelUnselected'"
            @click="changeSelectChanel(item.id)"
          >
            <img class="avatar-chat" :src="item.src" />
            <div class="mb-0">
              <strong>{{ item.name }}</strong>
              <p class="text-truncate mb-0">
                {{ item.lastText }}
              </p>
            </div>
          </v-card>
        </perfect-scrollbar>
      </div>
    </div>
    <div class="chat-show-wraper">
      <div class="w-100 chat-show-header">
        <div class="d-flex ">
          <img :src="imgCustomer" class="chat-show-header-img ml-2" alt="" />
          <span>{{ nameCustomer }}</span>
        </div>
        <div class="text-center">
          {{ messages.titleRequest }}
        </div>
        <v-btn text @click="searchFromItem">
          <v-icon>{{
            statusSearch == "list" ? "mdi-magnify" : "mdi-close"
          }}</v-icon>
        </v-btn>
      </div>

      <div class="chat-show-wrap-items">
        <perfect-scrollbar ref="chatShowWrapItems">
          <div
            class="chat-show-item "
            :class="message.mymessage ? 'my-item' : 'outher-item'"
            v-for="message in messages.texts"
            :key="message.id"
          >
            <div class="d-flex">
              <img
                class="chat-show-item-img mx-2"
                :src="message.mymessage ? user.src : imgCustomer"
                alt=""
              />
              <div class="chat-show-item-message">
                <p v-html="message.text"></p>
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
          <v-btn @click="sendMesssage" text>
            <v-icon>mdi-send</v-icon>
          </v-btn>
          <VueEmoji width="100%" height="40" @input="onInput" :value="msg2" />
          <v-btn text @click="attachFile">
            <v-icon>mdi-paperclip</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
import VueEmoji from "emoji-vue";
export default {
  data() {
    return {
      msg2: "",
      user: {
        src: "/images/avatar.jpg",
        name: "محمد رسولی"
      },
      imgtoUpload: "",
      message: "",
      statusSearch: "list",
      searchChat: "",
      showEmoji: false,
      chanelStore: null,
      channals: [
        {
          id: 1,
          src: "/images/avatar-1.jpg",
          name: "علی سهرابی",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: true
        },
        {
          id: 2,
          src: "/images/avatar-2.png",
          name: "امین مهرائین",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 3,
          src: "/images/avatar.jpg",
          name: "حسین صبوری",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 4,
          src: "/images/avatar-1.jpg",
          name: "علی سهرابی",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 5,
          src: "/images/avatar-2.png",
          name: "امین مهرائین",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 6,
          src: "/images/avatar.jpg",
          name: "حسین صبوری",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 7,
          src: "/images/avatar-1.jpg",
          name: "علی سهرابی",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 8,
          src: "/images/avatar-2.png",
          name: "امین مهرائین",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 9,
          src: "/images/avatar.jpg",
          name: "حسین صبوری",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 10,
          src: "/images/avatar-1.jpg",
          name: "علی سهرابی",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 11,
          src: "/images/avatar-2.png",
          name: "امین مهرائین",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        },
        {
          id: 12,
          src: "/images/avatar.jpg",
          name: "حسین صبوری",
          lastText: "لورم ایپسوم نتا دشیئب ش سیببیسوئب سیب یبسیب",
          selected: false
        }
      ],
      messages: {
        titleRequest: "خرید خوار و بار",
        channalsId: 1,
        texts: [
          {
            id: 1,
            mymessage: true,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 2,
            mymessage: false,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 3,
            mymessage: true,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 4,
            mymessage: false,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 5,
            mymessage: true,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 6,
            mymessage: false,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 7,
            mymessage: true,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 8,
            mymessage: false,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 9,
            mymessage: true,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 10,
            mymessage: false,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 11,
            mymessage: true,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 12,
            mymessage: false,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          },
          {
            id: 13,
            mymessage: false,
            text: `<img style='width : 100px' src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png' />`
          }
        ]
      }
    };
  },
  components: {
    VueEmoji
  },
  computed: {
    imgCustomer() {
      return this.channals.filter(item => {
        if (item.selected) {
          return item;
        }
      })[0].src;
    },
    nameCustomer() {
      const name = this.channals.filter(item => {
        if (item.selected) {
          return item;
        }
      })[0].name;
      return name;
    },
    filterListsItem() {
      if (this.statusSearch == "list") {
        return this.channals.filter(item => {
          if (item.name.search(this.searchChat) != -1) {
            return item;
          }
        });
      } else if (this.statusSearch == "item") {
        return this.channals;
      } else {
        return this.channals;
      }
    }
  },
  mounted() {
    // const container = document.querySelector(".chat-show-wrap-items");
    // container.scrollTop = container.scrollHeight;

    console.log(this.$refs.chatShowWrapItems, "scrollheight");
    this.$refs.chatShowWrapItems.$el.scollTop = this.$refs.chatShowWrapItems.$el.scrollHeight;
    this.$refs.chatShowWrapItems.update();
    // this.$refs.ps.update();
    // content.scrollTop = content.scrollHeight;
  },
  methods: {
    attachFile() {
      this.$refs.uploadFileChat.click();
    },
    onInput(event) {
      console.log(event);
      this.msg2 = event.data;
    },
    sendMesssage() {
      this.messages.texts.push({
        id: this.messages.texts[this.messages.texts.length - 1].id + 1,
        mymessage: true,
        text: this.msg2
      });
      console.log( this.$refs.chatShowWrapItems);
      this.$refs.chatShowWrapItems.$el.scollTop = 400;
      this.$refs.chatShowWrapItems.update();
      this.msg2 = "";
    },
    uploadedFile(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.messages.texts.push({
            id: this.messages.texts[this.messages.texts.length - 1].id + 1,
            mymessage: true,
            text: `<img style="width:100px" src="${event.target.result}"/>`
          });
          // rebuild cropperjs with the updated source
        };
        reader.readAsDataURL(file);
        console.log(this.imgtoUpload);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    changeSelectChanel(id) {
      this.searchChat = "";
      this.channals.map((item, i) => {
        if (item.selected) {
          item.selected = false;
          this.channals[i].selected = false;
        }
        if (item.id == id) {
          this.channals[i].selected = true;
        }
      });
    },
    searchFromItem() {
      if (this.statusSearch == "list") {
        this.chanelStore = this.channals;
        const newChanel = this.channals.filter(item => {
          if (item.selected) {
            return item;
          }
        });
        this.channals = newChanel;
        this.statusSearch = "item";
        this.$refs.searchChatRef.focus();
      } else {
        this.channals = this.chanelStore;
        this.chanelStore = null;
        this.statusSearch = "list";
        this.$refs.searchChatRef.blur();
      }
    }
  },
  watch: {}
};
</script>
<style scoped>
.uploadFileChat {
  display: none;
}
.chat-send-message {
  position: relative;
}
.emoji-vue-wraper {
  width: 100% !important;
}
.chat-list-wraper {
  background-color: #43435e;
}
.selectedChanel {
  background-color: #484646 !important;
}
.chanelUnselected {
  background-color: inherit !important;
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
.chat-show-item-message {
  text-align: right;
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
.search-chat input:focus {
  border: 4px solid #000 !important;
}
.chat-show-wrap-items {
  height: calc(100% - 120px);
  /* overflow-y: auto; */
  padding: 15px;
  padding-bottom: 0;
  padding-left: 0px;
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

.chat-show-item.my-item .chat-show-item-message {
  background-color: #418feb;
  box-shadow: 1px 2px 10px 3px #a5a3a3;
  padding: 10px;
  border-radius: 15px 0 15px 15px;
}
.chat-show-item.my-item .timeSendmessage {
  text-align: right;
  padding-right: 40px;
}
.chat-show-item.outher-item .chat-show-item-message {
  background-color: rgb(230, 230, 238);
  box-shadow: 1px 2px 10px 3px #a5a3a3;
  padding: 10px;
  border-radius: 0px 15px 15px 15px;
}
.chat-show-item.outher-item .timeSendmessage {
  text-align: left;
  margin-right: 18px;
  padding-left: 40px;
}
.chat-show-item.outher-item {
  margin-right: auto !important;
  margin-left: 12px !important;
  direction: ltr;
}
.chat-lists .chat-view {
  border-bottom: 1px solid rgb(67, 68, 105);
  padding: 15px 10px;
}
.chat-show-header-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>