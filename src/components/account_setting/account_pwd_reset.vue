<template>
  <div id="pwd_new-reset" calss="w6">

    <div id="title">
      <span>密码重置</span>
      <div v-if="show_audit" class="yellow-style">
        <span>更改密码后请牢记并妥善保存密码！</span>
        <img src="../../assets/icons/home/close.png" @click="hideAudit" />
      </div>
    </div>

    
    <div class="horizon"></div>

    <form>
      <div class="input-set">
        <div class="input-unit">
          <div class="label-container">
            <label for="pwd_new-present">当前密码</label>
          </div>
          <input type="text" id="pwd_new-present" v-model="pwd_new_present"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="pwd_new-new">新密码</label>
          </div>
          <input type="text" id="pwd_new-new" v-model="pwd_new_new"></input>
        </div>
        <div class="input-unit">
          <div class="label-container">
            <label for="pwd_new-repeat">确认密码</label>
          </div>
          <input type="text" id="pwd_new-repeat" v-model="pwd_new_repeat"></input>
        </div>
      </div>
      
      <input type="button" value="修改" @click="submitQualInfo" />
    </form>
  </div>
</template>

<script type="text/javascript">
import {ajaxCallPromise} from '@/components/public/index'
import '@/components/public/tool'
import {SERVERCONF,getErrMsg} from '@/components/public/constants'

export default {
  name: 'account_qual_info',
  mounted () {
  },
  data () {
    return {
      show_audit: true,
      pwd_new_present: '',
      pwd_new_new: '',
      pwd_new_repeat: ''
    }
  },
  watch: {
  },
  methods: {
    showInfo(text){
      this.$Message.info({
        content: text,
        duration: 2,
        closable: true
      });
    },
    showErr(text){
      this.$Message.error({
        content: text,
        duration: 2,
        closable: true
      });
    },
    hideAudit(){
      this.show_audit = false;
    },
    submitQualInfo(){
      // if(pwd_new_present == "" || pwd_new == "" || pwd_repeat == ""){
      //     showErr("数据不能为空");
      // }else if(pwd_new != pwd_repeat){
      //     showErr("两次密码不一致");
      // }else if(!isPassword(pwd_new)){
      //     showErr("密码格式错误！必须包含数字，大小字母，长度6-16位");
      // }else{
      //     var data ={
      //         "password": hex_sha1(pwd_new + SYSTEM.SALT),
      //         "pwd_new_present": hex_sha1(pwd_new_present + SYSTEM.SALT)
      //     };
          
      //     var param = {
      //         sinterface : SERVERCONF.USERS.RESETPASS,
      //         data : data
      //     };
      
      //     ajaxCall(param, function(err, data){
      //         if(err){
      //             showErr("原密码有误！");
      //         }else{
      //             showInfo("修改成功！");
      //             $("#inputpwd_new_present").val('');
      //             $("#inputPassword").val('');
      //             $("#inputRePassword").val('');
      //         }
      //     });
      // }
    }
  }
}
</script>

<style type="text/css">
#pwd_new-reset {
  background-color: white;
  margin: 20px 70px 0 70px;
  height: 400px;
  position: relative;
}

#pwd_new-reset>#title {
  background-color: #838b97;
  padding-left: 30px;
  height: 50px;
  line-height: 50px;
  font-size: 0;
}
#pwd_new-reset>#title>span {
  font-size: 16px;
  color: #fff;
  vertical-align: middle;
}
#pwd_new-reset>#title>div {
  display: inline-block;
  height: 34px;
  line-height: 34px;
  vertical-align: middle;
  border-radius: 3px;
  margin-left: 30px;
  padding: 0 14px;

  font-size: 0px;
}
#pwd_new-reset>#title>div.yellow-style {
  background-color: #f4ecd1;
  color: #91792a;
}
#pwd_new-reset>#title>div>* {
  vertical-align: middle;
  font-size: 14px;
  display: inline-block;
}
#pwd_new-reset>#title>div>img {
  width: 14px;
  margin-left: 10px;
  cursor: pointer;
}

#pwd_new-reset div.horizon {
  background-color: #ccc;
  position: absolute;
  bottom: 82px;
  width: 100%;
  height: 1px;
}

#pwd_new-reset .input-set {
  margin-top: 50px;
  position: absolute;
  left: 48%;
  transform: translateX(-50%);
  line-height: 50px;
}
#pwd_new-reset .input-unit {
  height: 50px;
}
#pwd_new-reset .input-unit>* {
  vertical-align: middle;
}
#pwd_new-reset .input-unit .label-container {
  height: 52px;
  display: inline-block;
  width: 100px;
  margin-right: 16px;
}
#pwd_new-reset label {
  float: right;
  font-size: 14px;
}
#pwd_new-reset input[type="text"] {
  display: inline-block;
  width: 250px;
  height: 30px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding-left: 6px;
  border-radius: 3px;
  color: #000;
}

#pwd_new-reset input[type="button"] {
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