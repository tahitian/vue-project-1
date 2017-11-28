<template>
  <div class="fr" style="background-color: green; height:100px; width: 100px; line-height: 100px; font-size:0">
    <div class="vertical-center" style="width: 40px; height: 40px; background-color: red" />
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
.fr {
  float: right;
}
</style>