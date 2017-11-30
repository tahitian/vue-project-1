<template>
  <div id="basic-info" >
    <div id="title" calss="w6">
      <span>广告主基本信息</span>
      <div>
        <span>{{audit_message}}</span>
      </div>
    </div>
    <div class="vertical-line"></div>
    <div class="horizon"></div>
    <form>
      <div class="label-set-1">
        <label for="advertiser-name">广告主名</label>
        <label for="advertiser-name">公司名称</label>
        <label for="advertiser-name">公司电话</label>
        <label for="advertiser-name">公司地址</label>
        <label for="advertiser-name">营业执照类型</label>
        <label for="advertiser-name">营业执照编号</label>
        <label for="advertiser-name">营业执照有效期</label>
        <label for="advertiser-name">公司营业执照</label>
      </div>
      <div class="input-set-1">
        <input type="text" name="advertiser_name" id="advertiser-name" v-model="advertiser_name"></input>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'account_basic_info',
  data () {
    return {
      audit_message: '用户信息通过审核',
      advertiser_name: '周文'
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
  height: 35px;
  line-height: 35px;
  background-color: #daecd1;
  vertical-align: middle;
  border-radius: 3px;
  margin-left: 30px;
  padding: 0 18px;

  font-size: 14px;
  color: #31780d;
}
#basic-info div.vertical-line {
  background-color: #ccc;
  position: absolute;
  left: 663px;
  top: 80px;
  width: 1px;
  height: 443px;
}
#basic-info div.horizon {
  background-color: #ccc;
  position: absolute;
  bottom: 82px;
  width: 100%;
  height: 1px;
}
#basic-info form>div {
  display: inline-block;
  height: 500px;
  line-height: 52px;
  background-color: green;
  vertical-align: top;
}
#basic-info form div.label-set-1 {
  width: 180px;
  /*height: 500px;
  line-height: 52px;*/
  padding-top: 35px;
}
#basic-info label {
  float: right;
  clear: both;
  font-size: 14px;
}
#basic-info input[type="text"] {
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  font-size: 14px;
}
</style>