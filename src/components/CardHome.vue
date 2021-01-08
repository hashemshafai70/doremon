<template>
  <v-col cols="12" :md="grid ? 4 : 12">
    <v-card class="mx-auto" link>
      <v-hover v-slot="{ hover }">
        <v-img
         position="relative"
          @click.stop="dialogShow(mydata.id)"
          :src="mydata.img"
          :height="grid ? '150px' : '300px'"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
              style="height: 100%;"
            >
             بیش از 500 فروشگاه
             
            </div>
          </v-expand-transition>
        </v-img>
      </v-hover>
      <v-card-title @click.stop="dialogShow(mydata.id)">
        {{ mydata.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ mydata.subtitle }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="info lighten-2" text @click.stop="dialogShow(mydata.id)">
          شروع خرید
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "CardHome",
  data() {
    return {
      show: false
    };
  },
  props: {
    mydata: {
      required: true,
      type: Object
    },
    grid: {
      type: Boolean,
      default:true
    }
  },
  methods: {
    dialogShow(id) {
      this.$emit("showDialog", { show: true, id });
    }
  }
};
</script>
<style scoped>

</style>