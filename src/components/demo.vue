<template>
  <div id="demo">
    <div></div>
    <div></div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      msg: 'Hello, World!'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/*.clearfix {
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
}*/

#demo>div {
  display: inline-block;
  height: 100px;
  width: 100px;
  background-color: green;
}
</style>