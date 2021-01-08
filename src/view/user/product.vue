<template>
    <v-card class="mt-4 pa-5">
     <v-row justify="space-between" align="center" class="px-8">
         <v-breadcrumbs :items="items"></v-breadcrumbs>
        <v-btn to="/profile/addProduct" color="success">اضافه کردن محصول <v-icon>mdi-plus</v-icon></v-btn>
     </v-row>
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
      <!-- <template v-slot:item.status="{ item }">
        <v-chip small :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template> -->
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
        { text: "برند", value: "brand" },
        { text: "موجودی (تعداد)", value: "Inventory" },
        { text: "میزان تخفیف", value: "discount" },
        { text: "تعداد دیدگاه ها", value: "vote" },
        { text: "گارانتی", value: "garnty" },
        { text: "تعداد خریدها", value: "saleNumber" },
      ],
      desserts: [
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
        {
          name: "دوغ پادراتوس",
          category: "لبنیات",
          brand: "هراز",
          Inventory: 12,
          discount: "20%",
          vote: 20,
          garnty: 2,
          saleNumber: 20
        },
      ],
      items : [
        {text:'داشبورد' },
        {text:'محصولات' , disabled: true}
      ]
    };
  },
  methods: {
    getColor(status) {
      if (status === "موفق" ) return "success";
      else return "error";
    }
  },
}
</script>