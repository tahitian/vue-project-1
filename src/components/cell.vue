<template>
  <div id="top" class="clearfix">
    <a href="#">
      <img class="vertical-center" style="margin-left: 17px" src="../assets/icons/home/logo.png" /> 
    </a>
    <div class="vertical-line vertical-center" style="margin-left: 9px"></div>
    <a href="#">
      <img class="vertical-center" style="margin-left: 14px" src="../assets/icons/home/menu.png" /> 
    </a>
    <span id="present-module" class="vertical-center w6">{{present_module}}</span>

    <div id="top-fr-wrapper" class="fr">
      <div class="fr wrapper-24">
        <a href="#" class="vertical-center">
          <img src="../assets/icons/home/help.png" class="top-fr-icons" style="margin-right: 20px">
        </a>
        <a href="#">
          <span class="fr vertical-center w3">获取帮助</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'cell',
  data () {
    return {
      present_module: "账户设置"
    }
  }
}
</script>

<style type="text/css">
* {
  padding: 0;
  margin: 0;
}
#top {
  width: 100%;
  height: 50px;
  background-color: #222222;
  line-height: 50px;
  font-size: 0;
  overflow: auto;
  zoom: 1;
}
.clearfix {
    zoom: 1;
}
.clearfix:after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
.vertical-center {
  display: inline-block;
  vertical-align: middle;
}
.vertical-line {
  width: 1px;
  height: 36px;
  background-color: #666666;
}
#present-module {
  font-size: 18px;
  color: #ffffff;
  margin-left: 10px;
}
.w6 {
  font-family: "HiraginoSansGB-W6";
}
.w3 {
  font-family: "HiraginoSansGB-W3";
}
.fr {
  float: right;
}
#top-fr-wrapper {
  height: 50px;
}
#top-fr-wrapper div.wrapper-24 {
  height: 50px;
  line-height: 50px;
  font-size: 0;
}
#top-fr-wrapper div.wrapper-24 a {
  height: 24px;
  line-height: 24px;
}
.top-fr-icons {
  width: 24px;
}
</style>