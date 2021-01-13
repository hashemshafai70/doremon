<template>
  <div>
    <v-card class="pa-3 d-flex">
      <table class="dashboardUser">
        <tr>
          <td>
            <small>نام و نام خانوادگی</small>
            <p><strong>محمد سلیمی</strong></p>
          </td>
          <td>
            <small>پست الکترونیک</small>
            <p><strong>palangshargh@gmail.com</strong></p>
          </td>
        </tr>
        <tr>
          <td>
            <small>شماره تلفن همراه</small>
            <p><strong>091012154542</strong></p>
          </td>
          <td>
            <small>کد ملی</small>
            <p><strong>915545845</strong></p>
          </td>
        </tr>
        <tr>
          <td>
            <small>جنسیت</small>
            <p><strong>مرد</strong></p>
          </td>
          <td>
            <small>تاریخ تولد</small>
            <p><strong>1398/05/03</strong></p>
          </td>
        </tr>
      </table>
      <v-row class="d-flex flex-column pa-8" align="center" justify="center">
        <v-img class="mx-9" width="150" src="https://i.pinimg.com/originals/b2/1b/e7/b21be754c7aabc2b3ad7c8ebbca51373.jpg"></v-img>
        <v-btn color="primary" ><v-icon>mdi-pen-plus</v-icon> ویرایش مشخصات</v-btn>
      </v-row>
    </v-card>
    <v-card class="mt-6 pa-5">
      <h4>آخرین سفارش ها</h4>
      <table class="order-last mt-4">
        <thead>
        <tr>
          <th>#</th>
          <th>شماره سفارش</th>
          <th>تاریخ ثبت سفارش</th>
          <th>مبلغ کل</th>
          <th>وضعیت پرداخت</th>
          <th>جزئیات سفارش</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>DRMN-2452415</td>
          <td>1399/07/02</td>
          <td>110,000</td>
          <td><span class="green--text">انجام شده</span></td>
          <td><v-btn text><v-icon>mdi-chevron-left</v-icon></v-btn></td>
        </tr> <tr>
          <td>2</td>
          <td>DRMN-2452415</td>
          <td>1399/07/02</td>
          <td>110,000</td>
          <td><span class="red--text">لغو شده</span></td>
          <td><v-btn text><v-icon>mdi-chevron-left</v-icon></v-btn></td>
        </tr> <tr>
          <td>3</td>
          <td>DRMN-2452415</td>
          <td>1399/07/02</td>
          <td>110,000</td>
          <td><span class="green--text">انجام شده</span></td>
          <td><v-btn text><v-icon>mdi-chevron-left</v-icon></v-btn></td>
        </tr> <tr>
          <td>4</td>
          <td>DRMN-2452415</td>
          <td>1399/07/02</td>
          <td>110,000</td>
          <td><span class="green--text">انجام شده</span></td>
          <td><v-btn text><v-icon>mdi-chevron-left</v-icon></v-btn></td>
        </tr>
        <tr>
          <td colspan="6" style="padding: 0 !important;">
            <v-btn block >مشاهده لیست سفارش ها</v-btn>
          </td>
        </tr>
        </tbody>
      </table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "dashboard.vue",
  data() {
    return {
    }
  }
}
</script>

<style>
table.dashboardUser, table.order-last {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
table.dashboardUser td,table.order-last td,table.order-last th{
  padding: 20px !important;
  border: 1px solid #ddd;
}
table.order-last thead{
  background-color: #418feb;
}
table.order-last td{
  text-align: center;
}
</style>