<template>
  <v-card class="pa-3">
    <h3>اطلاعات شخصی</h3>
    <table class="InfoUserTable mt-4">
      <tr>
        <td>
          <div class="d-flex">
            <div class="d-flex flex-column"><small>نام و نام خانوادگی</small>
              <v-text-field ref="userNameInput" v-show="editUserName" v-model="username"></v-text-field>
              <strong v-show="!editUserName">{{ username }}</strong>
            </div>
            <v-spacer></v-spacer>
           <v-btn text @click="editMethod('editUserName' , 'userNameInput')">
             <v-icon :color="!editUserName ? 'primary' : 'success'">{{!editUserName ? 'mdi-circle-edit-outline' : 'mdi-check-outline'}}</v-icon>
           </v-btn>
          </div>
        </td>
        <td>
          <div class="d-flex">
            <div class="d-flex flex-column"><small>کد ملی</small>
              <v-text-field ref="CodeNationalInput" class="py-0 mb-0" v-show="editNationalCode" v-model="nationalCode"></v-text-field>
              <strong v-show="!editNationalCode">{{ nationalCode }}</strong>
            </div>
            <v-spacer></v-spacer>
            <v-btn text @click="editMethod('editNationalCode' , 'CodeNationalInput' )">
              <v-icon :color="!editNationalCode ? 'primary' : 'success'">{{!editNationalCode ? 'mdi-circle-edit-outline' : 'mdi-check-outline'}}</v-icon>
            </v-btn>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex">
            <div class="d-flex flex-column"><small>شماره تلفن همراه</small>
              <v-text-field ref="numberPhoneInput" class="py-0 mb-0" v-show="editPhoneNumber" v-model="phoneNumber"></v-text-field>
              <strong v-show="!editPhoneNumber">{{ phoneNumber }}</strong>
            </div>
            <v-spacer></v-spacer>
            <v-btn text @click="editMethod('editPhoneNumber' ,'numberPhoneInput' )">
              <v-icon :color="!editPhoneNumber ? 'primary' : 'success'">{{!editPhoneNumber ? 'mdi-circle-edit-outline' : 'mdi-check-outline'}}</v-icon>
            </v-btn>
          </div>
        </td>
        <td>
          <div class="d-flex">
            <div class="d-flex flex-column"><small>پست الکترونیک</small>
              <v-text-field ref="mailInput" class="py-0 mb-0" v-show="editEmail" v-model="emailUser"></v-text-field>
              <strong v-show="!editEmail">{{ emailUser }}</strong>
            </div>
            <v-spacer></v-spacer>
            <v-btn text @click="editMethod('editEmail' , 'mailInput')">
              <v-icon :color="!editEmail ? 'primary' : 'success'">{{!editEmail ? 'mdi-circle-edit-outline' : 'mdi-check-outline'}}</v-icon>
            </v-btn>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex">
          <div class="d-flex flex-column"><small>تاریخ تولد</small>
            <v-text-field ref="dateBirthInput" class="py-0 mb-0" v-show="editDateBirth" v-model="dateBirth"></v-text-field>
            <strong v-show="!editDateBirth">{{ dateBirth }}</strong>
          </div>
          <v-spacer></v-spacer>
          <v-btn text @click="editMethod('editDateBirth' , 'dateBirthInput')">
            <v-icon :color="!editDateBirth ? 'primary' : 'success'">{{!editDateBirth ? 'mdi-circle-edit-outline' : 'mdi-check-outline'}}</v-icon>
          </v-btn>
        </div>
        </td>
        <td> <div class="d-flex">
          <div class="d-flex flex-column"><small>رمز عبور</small>
              <v-text-field v-show="editPassword" ref="passwordInp" label="پسورد فعلی" class="py-0 mb-0 mt-4" v-model="passwordCurrent"></v-text-field>
              <v-text-field v-show="editPassword" label="پسورد جدید" class="py-0 mb-0" v-model="passwordNew"></v-text-field>
              <v-text-field v-show="editPassword" label="تایید پسورد جدید" class="py-0 mb-0" v-model="confirmPasswordNew"></v-text-field>
            <strong v-show="!editPassword">****</strong>
          </div>
          <v-spacer></v-spacer>
          <v-btn text @click="editMethod('editPassword' , 'passwordInp' )">
            <v-icon :color="!editPassword ? 'primary' : 'success'">{{!editPassword ? 'mdi-circle-edit-outline' : 'mdi-check-outline'}}</v-icon>
          </v-btn>
        </div></td>
      </tr>
    </table>
    <div class="d-flex">
      <div></div>
      <v-spacer></v-spacer>
      <v-btn color="success" class="mt-4 px-16">تأیید</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "myInformation",
  data(){
    return {
      editUserName : false,
      editNationalCode : false,
      editPhoneNumber : false,
      editEmail : false,
      editPassword : false,
      editDateBirth : false,
      username : 'محمد رضایی',
      nationalCode :'921723296',
      phoneNumber : '09394840524',
      emailUser : 'mohammadReazai@gmail.com',
      dateBirth : '-',
      passwordCurrent : '',
      passwordNew : '',
      confirmPasswordNew : '',
    }
  },
  methods:{
    editMethod(booleanProperty , ref ){
      this[booleanProperty] = !this[booleanProperty] ;
      this.$nextTick(function(){
        this.$refs[ref].focus()
      })
    },
  }
}
</script>

<style scoped>
.InfoUserTable td {
  padding: 20px !important;
  border: 1px solid #ccc;
}
.InfoUserTable td:first-of-type{
  width: 50% !important;
}
</style>