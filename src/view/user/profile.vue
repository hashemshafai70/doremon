<template>
  <v-sheet
    style="width : 100%"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="px-4">
            <div class="d-flex">
              <div class="mt-4">
                <h3>تبریک میگوییم محمد عزیز</h3>
                <small
                  >شما تا شرکت در قرعه کشی این ماه فقط به 20 امتیاز نیاز
                  دارید</small
                >
              </div>
              <v-img src="../../assets/image/medal.svg"></v-img>
            </div>
            <h3 color="primary">میزان اعتبار شما : 480000 تومان</h3>
            <v-row class="mt-2">
              <v-spacer></v-spacer>
              <v-btn class="mb-4 ml-4" color="primary">مشاهده فروشها</v-btn>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pt-5 pb-6 pa-4 px-12" color="primary" dark>
              <h3>وضعیت</h3>
              <v-row class="my-9">
                <v-col class="d-flex">
                  <v-avatar color="primary lighten-2" class="ml-4">
                    <v-icon>mdi-account-cash</v-icon>
                  </v-avatar>
                  <div>
                    <h3>230000ت</h3>
                    <small>موجودی</small>
                  </div>
                </v-col>
                <v-col class="d-flex">
                  <v-avatar color="success lighten-2" class="ml-4">
                    <v-icon>mdi-account</v-icon>
                  </v-avatar>
                  <div>
                    <h3>85 نفر</h3>
                    <small>مشتری</small>
                  </div>
                </v-col>
                <v-col class="d-flex">
                  <v-avatar color="error lighten-2" class="ml-4">
                    <v-icon>mdi-package-variant</v-icon>
                  </v-avatar>
                  <div>
                    <h3>20</h3>
                    <small>محصولات</small>
                  </div>
                </v-col>
                <v-col class="d-flex">
                  <v-avatar color="info lighten-2" class="ml-4">
                    <v-icon>mdi-scoreboard</v-icon>
                  </v-avatar>
                  <div>
                    <h3>40</h3>
                    <small>امتیاز شما</small>
                  </div>
                </v-col>
              </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="pa-3">
                <h3>سفارشات</h3>
                <h2>30 محصول</h2>
                <chart-bar></chart-bar>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="pa-3">
                <h3>سود</h3>
                <h2>42000ت</h2>
                <apexchart
                  type="line"
                  height="150"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card class="pa-4 d-flex">
                <div>
                  <h4>نمودار کسب درآمد :</h4>
                  <p>درآمداین ماه :</p>
                  <h3>40,000,000 ت</h3>
                  <small>62% از ماه قبل بیشتر درآمد کسب کردید</small>
                </div>
                <apexchart
                  type="donut"
                  :options="chartOptionsDonut"
                  :series="seriesDonut"
                ></apexchart>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card>
                <v-img src="../../assets/image/customers.svg"></v-img>
                <v-card-text>
                  <v-card-title>مشتریان</v-card-title>
                  <v-card-subtitle
                    >مشتریان خود را بیشتر بشناسید</v-card-subtitle
                  >
                </v-card-text>
                <v-card-actions class="d-flex" style="direction : ltr">
                  <v-avatar
                    v-for="item in [1, 2, 3, 4, 5]"
                    :key="item"
                    :style="{ marginLeft: item != 1 ? '-10px' : '' }"
                    style="border:2px solid grey"
                  >
                    <v-img src="../../assets/image/avatar.jpg"></v-img>
                  </v-avatar>
                  <span class="ml-2">+42</span>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-4 ">
            <h4 class="my-4">10 فروشنده برتر</h4>
            <div style="overflow-x:auto;">
              <table class="dashboardSeller">
                <thead>
                  <tr>
                    <th>نام تجاری</th>
                    <th>دسته بندی</th>
                    <th>تعداد مشتریان در ماه</th>
                    <th>فروش</th>
                    <th>درآمد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in [1, 2, 3, 4, 5, 6, 8, 7, 9, 10]"
                    :key="item"
                  >
                    <td class="d-flex">
                      <v-img
                        max-width="30px"
                        src="../../assets/image/logo.png"
                      ></v-img
                      ><span>دورمون</span>
                    </td>
                    <td>سوپر مارکت</td>
                    <td>1100</td>
                    <td>80%</td>
                    <td>4,000,000 ت</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import chartBar from "../../components/chartBar";
export default {
  data() {
    return {
      series: [
        {
          name: "درآمد",
          data: [10, 41, 35, 51, 49, 62]
        }
      ],
      chartOptions: {
        chart: {
          height: 20,
          type: "line",
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },

        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          show: true
        },

        grid: {
          show: false
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Sep"]
        },
        yaxis: {
          show: false
        }
      },
      //donout
      seriesDonut: [44000, 55000, 41000, 10000],
      chartOptionsDonut: {
        chart: {
          type: "donut"
        },
        labels: ["پروتئین", "لبنیات", "خوار و بار", "تنقلات"],
        dataLabels: {
          enabled: true
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ],
        legend: {
          show: false,
          position: "right",
          offsetY: 0,
          height: 0
        }
      }
    };
  },
  components: {
    apexchart: VueApexCharts,
    chartBar
  }
};
</script>
<style>


table.dashboardSeller {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
table.dashboardSeller thead th {
  background-color: #e4e3e3;
}
table.dashboardSeller th,
table.dashboardSeller td {
  padding: 8px;
  text-align: center;
}

table.dashboardSeller tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>