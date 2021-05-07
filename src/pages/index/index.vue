<template>
  <foobar msg="htmlToPdf"/>
</template>

<script>
import {defineComponent} from 'vue'
import {foobar} from '../jsx/html2Pdf'
export default defineComponent({
	name:'index',
	components: {
    foobar
	}
})
</script>
<style lang="less">
  @import "../jsx/html2Pdf.less";
</style>
