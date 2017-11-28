<template>
  <div class="top">
    <div class="top-wrapper">
      <!-- <div class="inline">
        <a href="#">
          <img src="../assets/img/main.jpg">
        </a>
      </div>
      <div class="inline">
        <img src="../assets/img/menu.jpg">
      </div>
      <div class="fr clearfix"> 
        <ul> 
          <li>
            <div class="cp">
              <img src="../assets/img/portrait.jpg" class="_im">
              <div class="_im">
                <span>Wen Zhou</span>
                <a href="#">
                  <img src="../assets/img/down.jpg">
                </a>
              </div>
            </div>
          </li>
          <li>
            <router-link :to= "{name:'f_pay'}" class="p73" replace>
              <img src="../assets/img/info.jpg">
            </router-link>
          </li>
          <li>
            <a href="#" class="p73">
              <img src="../assets/img/set.jpg">
            </a>
          </li>
          <li>
            <router-link :to="{name:'style'}" class="p73">
              <span class="_im">获取帮助</span>
              <img  class="_im" src="../assets/img/help.jpg">
            </router-link>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style>
/** {
    box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
    font-size: 100%;
}
body{
    font-size: 1em;
    min-width: 1024px;
    background-color: #e9eaeb;
    overflow-y: scroll;
}
a {
    text-decoration: none;
}
ul {
    list-style-type: none;
}
.p73 {
    display: inline-block;
    padding: 6px 3px;
}  
.fr {
    float: right;
}
.clearfix {
    zoom: 1;
}
.clearfix:after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    line-height: 0;
    font-size: 0;
    visibility: hidden;
}
.inline {
    display: inline-block;
}*/
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 928px;
  height: 50px;
  background-color: #222222;
  color: #fff;
}
/*.top a {
  color: #fff;
}
.top-wrapper {
  padding: 7px;
}
.top ul li,.content ul li{
  float: left;
}
.top ul li{
  margin-left: 10px;
}
.content{
  margin-top: 50px;
}
._im {
    display: inline-block;
    vertical-align: middle;
}
.cp {
    cursor: pointer;
}*/
</style>