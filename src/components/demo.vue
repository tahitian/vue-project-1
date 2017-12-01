<template>
  <div id="demo">
    <div>
      hello
    </div>
    <DatePicker type="datetime"   placement="bottom-end" placeholder="开始日期" style="height: 100px; width: 1000px;"></DatePicker>
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
  height:20px;
  background-color: green;
}
#demo>p {
  background-color: green;
}
</style>