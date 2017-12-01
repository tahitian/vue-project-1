<template>
  <div id="qual-info" calss="w6">

    <div id="title">
      <span>广告主资质信息</span>
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
            <label for="lisence-name">资质名称</label>
          </div>
          <input type="text" name="lisence_name" id="lisence-name" v-model="lisence_name"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="web-name">主站名</label>
          </div>
          <input type="text" name="web_name" id="web-name" v-model="web_name"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="web-url">主站网址</label>
          </div>
          <input type="text" name="web_url" id="web-url" v-model="web_url"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="company-addr">公司地址</label>
          </div>
          <input type="text" name="company_addr" id="company-addr" v-model="company_addr"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="industry-cat">行业分类</label>
          </div>
          <input type="text" name="industry_cat" id="industry-cat" v-model="industry_cat"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="lisence-num">资质编号</label>
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
            <label for="">行业资质</label>
          </div>
        </div>
      </div>
      

      <input type="submit" value="保存" />
    </form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'account_qual_info',
  data () {
    return {
      audit_message: '信息审核中，请耐心等待审核结果',
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
#qual-info {
  background-color: white;
  margin: 20px 70px 0 70px;
  height: 616px;
  position: relative;
}

#qual-info>#title {
  background-color: #838b97;
  padding-left: 30px;
  height: 50px;
  line-height: 50px;
  font-size: 0;
}
#qual-info>#title>span {
  font-size: 16px;
  color: #fff;
  vertical-align: middle;
}
#qual-info>#title>div {
  display: inline-block;
  height: 34px;
  line-height: 34px;
  background-color: #f4ecd1;
  vertical-align: middle;
  border-radius: 3px;
  margin-left: 30px;
  padding: 0 14px;

  font-size: 0px;
  color: #91792a;
}
#qual-info>#title>div>* {
  vertical-align: middle;
  font-size: 14px;
  display: inline-block;
}
#qual-info>#title>div>img {
  width: 14px;
  margin-left: 10px;
  cursor: pointer;
}

#qual-info div.horizon {
  background-color: #ccc;
  position: absolute;
  bottom: 82px;
  width: 100%;
  height: 1px;
}

#qual-info .input-set {
  margin-top: 30px;
  position: absolute;
  /*background-color: green;*/
  left: 48%;
  transform: translateX(-50%);
  line-height: 50px;
}
#qual-info .input-unit {
  height: 50px;
  /*width: 100%;*/
}
#qual-info .input-unit>* {
  vertical-align: middle;
}
#qual-info .input-unit .label-container {
  height: 52px;
  display: inline-block;
  width: 100px;
  margin-right: 16px;
}
#qual-info label {
  float: right;
  font-size: 14px;
}
#qual-info input[type="text"] {
  display: inline-block;
  width: 250px;
  height: 30px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding-left: 6px;
  border-radius: 3px;
}
#qual-info select {
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

#qual-info input[type="submit"] {
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