<template>
  <div>

    <top />

    <div id="nav">
      <ul>
        <li><div><a>基本信息</a></div></li>
        <li><div><a>账户资质</a></div></li>
        <li><div><a>密码重置</a></div></li>
      </ul>
    </div>

    <router-view></router-view>

  </div>
</template>
<script>
import top from '@/components/top.vue'
export default {
    name: 'account_nav',
    components: {
      top
    }
}
</script>
<style>
* {
  box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  margin: 0;
  padding: 0;
  border: 0;
}
#nav {
  font-size: 0;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
#nav>ul {
  list-style-type: none;
  margin-left: 60px;
} 
#nav>ul>li {
  display: inline-block;
}
#nav>ul>li>div {
  width: 114px;
  height: 50px;
  border-bottom: 4px solid #3a72bf;
  text-align: center;
  line-height: 46px;
  font-size: 0;
  margin-right: 40px;
}
#nav>ul>li>div>a {
  font-family: HiraginoSansGB-W6;
  font-size: 18px;
  vertical-align: middle;
}
.w6 {
  font-family: "HiraginoSansGB-W6";
}
.w3 {
  font-family: "HiraginoSansGB-W3";
}
.px-18 {
  font-size: 18px;
}
</style>