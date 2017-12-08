<!-- <template>
    <div>
        <Upload
            :before-upload="handleUpload"
            action="/v3/settings/account/license">
            <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
        </Upload>
        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
    </div>
</template>
<script>
import {ajaxCallPromise} from '@/components/public/index'

export default {
    data () {
        return {
            file: null,
            loadingStatus: false
        }
    },
    methods: {
        handleUpload (file) {
            this.file = file;
            return false;
        },
        upload () {
            this.loadingStatus = true;
            let param = {
              sinterface: {
                method: 'POST',
                path: '/v3/settings/account/license'
              },
              data: {
                'upload-file': this.file
              }
            }
            ajaxCallPromise(param).then( res => {
              console.log(res.url);
                this.file = null;
                this.loadingStatus = false;
                this.$Message.success('Success')
            }).catch( err => {
              let msg = getErrMsg(err);
              _self.$Message.error({
                  content: msg,
                  duration: 2,
                  closable:true
              });               
            })
            // setTimeout(() => {
            //     this.file = null;
            //     this.loadingStatus = false;
            //     this.$Message.success('Success')
            // }, 1500);
        }
    }
}
</script> -->
<template>
    <div>
      <select v-model="option_value">
        <option value="1">hello</option>
        <option value="2">world</option>
      </select>
    </div>
</template>
<script>

export default {
    data () {
        return {
            option_value: 1,
        }
    },
    methods: {
    }
}
</script>