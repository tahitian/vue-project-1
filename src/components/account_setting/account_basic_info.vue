<template>
  <div id="basic-info" calss="w6">

    <div id="title">
      <span>广告主基本信息</span>
      <div>
        <span>{{audit_message}}</span>
        <img src="../../assets/icons/home/close.png" />
      </div>
    </div>

    
    <div class="horizon"></div>

    <form>

      <div class="input-set">
        <div class="input-unit">
          <div class="label-container">
            <label for="advertiser-name">广告主名</label>
          </div>
          <input type="text" name="advertiser_name" id="advertiser-name" v-model="advertiser_name"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="company-name">公司名称</label>
          </div>         
          <input type="text" name="company_name" id="company-name" v-model="company_name"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="company-num">公司电话</label>
          </div>
          <input type="text" name="company_num" id="company-num" v-model="company_num"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="company-addr">公司地址</label>
          </div>
          <input type="text" name="company_addr" id="company-addr" v-model="company_addr"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="advertiser-name">营业执照类型</label>
          </div>
          <select name="lisence_type" >
            <option v-for="ls_type in ls_type_set">{{ls_type}}</option>
          </select>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="advertiser-name">营业执照编号</label>
          </div>
          <input type="text" name="lisence_num" id="lisence-num" v-model="lisence_num"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="">营业执照有效期</label>
          </div>
          <DatePicker type="daterange" class="date-picker">
          </DatePicker>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="advertiser-name">公司营业执照</label>
          </div>
        </div>
      </div>

      <div class="vertical-line"></div>

      <div class="input-set">
        <div class="input-unit">
          <div class="label-container">
            <label for="contact-name">联系人姓名</label>
          </div>
          <input type="text" name="contact_name" id="contact-name" v-model="contact_name"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="contact-num">联系人电话</label>
          </div>         
          <input type="text" name="contact_num" id="contact-num" v-model="contact_num"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="contact-email">联系人邮箱</label>
          </div>
          <input type="text" name="contact_email" id="contact-email" v-model="contact_email"></input>
        </div>
      </div>

      <input type="submit" value="保存" />
    </form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'account_basic_info',
  data () {
    return {
      audit_message: '用户信息通过审核',
      advertiser_name: '周文',
      company_name: '周文',
      company_num: '周文',
      company_addr: '周文',
      lisence_type: '周文',
      lisence_num: '周文',
      contact_name: '周文',
      contact_num: '周文',
      contact_email: '周文',
      ls_type_set: [
        '大陆个体工商类客户',
        '大陆企业单位类客户',
        '大陆事业单位类客户',
        '民办企业类客户',
        '社会团体类客户',
        '学校类客户',
        '国外主体类客户',
        '香港主体类客户',
        '台湾主体类客户',
        '澳门主体类客户'
      ]
    }
  }
}
</script>

<style type="text/css">
#basic-info {
  background-color: white;
  margin: 20px 70px 0 70px;
  height: 635px;
  position: relative;
}

#basic-info>#title {
  background-color: #838b97;
  padding-left: 30px;
  height: 50px;
  line-height: 50px;
  font-size: 0;
}
#basic-info>#title>span {
  font-size: 16px;
  color: #fff;
  vertical-align: middle;
}
#basic-info>#title>div {
  display: inline-block;
  height: 34px;
  line-height: 34px;
  background-color: #daecd1;
  vertical-align: middle;
  border-radius: 3px;
  margin-left: 30px;
  padding: 0 14px;

  font-size: 0px;
  color: #31780d;
}
#basic-info>#title>div>* {
  vertical-align: middle;
  font-size: 14px;
  display: inline-block;
}
#basic-info>#title>div>img {
  width: 14px;
  margin-left: 10px;
  cursor: pointer;
}

#basic-info div.horizon {
  background-color: #ccc;
  position: absolute;
  bottom: 82px;
  width: 100%;
  height: 1px;
}

#basic-info .input-set {
  float: left;
  padding-top: 35px;
  font-size: 0;
  line-height: 52px;
}
#basic-info .input-unit {
  height: 52px;
  /*width: 100%;*/
}
#basic-info .input-unit>* {
  vertical-align: middle;
}
#basic-info .input-unit .label-container {
  height: 52px;
  display: inline-block;
  width: 220px;
  margin-right: 16px;
}
#basic-info label {
  float: right;
  font-size: 14px;
}
#basic-info input[type="text"] {
  display: inline-block;
  width: 250px;
  height: 30px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding-left: 6px;
  border-radius: 3px;
}
#basic-info select {
  display: inline-block;
  width: 250px;
  height: 30px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding-left: 2px;
  border-radius: 3px;
}
#basic-info .date-picker {
  font-size: 14px;
}
#basic-info .date-picker input {
  display: inline-block;
  border: 1px solid #ccc;
  height: 30px;
  font-size: 14px;
  color: #000;
}

#basic-info div.vertical-line {
  float: left;
  background-color: #ccc;
  margin-top: 30px;
  margin-left: 150px;
  width: 1px;
  height: 443px;
}

#basic-info input[type="submit"] {
  width: 100px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background-color: #3a72bf;
  border-radius: 3px;
  position: absolute;
  bottom: 20px;
  right: 20px;
}


</style>