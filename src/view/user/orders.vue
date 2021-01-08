<template>
  <v-card>
     <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="جستجو کنید ..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search">
      <template v-slot:item.status="{ item }">
        <v-chip small :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "نام محصول", value: "name", align: "start" },
        { text: "دسته بندی", value: "category" },
        { text: "نام خریدار (g)", value: "buyer" },
        { text: "آدرس مشتری", value: "address" },
        { text: "همراه مشتری", value: "mobile" },
        { text: "تعداد خرید", value: "count" },
        { text: "هزینه", value: "sale" },
        { text: "وضعیت", value: "status" }
      ],
      desserts: [
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "موفق"
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          buyer: "رسول معتمدی",
          address: "بلوار معلم - بین معلم 40 و 40 پلاک 42",
          mobile: "0915215421",
          count: "2",
          sale: "20000T",
          status: "ناموفق"
        }
      ],
      items : [
    {text:'داشبورد' },
    {text:'سفارشات' , disabled: true}
      ]
    };
  },
  methods: {
    getColor(status) {
      if (status === "موفق" ) return "success";
      else return "error";
    }
  }
};
</script>
<style >
</style>