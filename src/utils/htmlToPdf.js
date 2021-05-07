import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
	install (app,options) {
		/**
     * 兼容 vue 2.x/3.x
		 * app 3.0 不能访问 prototype
		 * config 是一个包含了 app 应用全局配置的对象。你可以在应用挂载前修改其以下 property
		 * app.config = {...}
		 * https://www.vue3js.cn/docs/zh/api/application-config.html#globalproperties
		 */

    if(parseInt(app.version) >= 3.0) {
      app.config.globalProperties.getPdf = getPdf
    } else {
      app.prototype.getPdf = getPdf
    }
		function getPdf() {
      var title = this.htmlTitle || 'download'
      if (!document.querySelector('.pdfDom')) {
        throw Error('无法获取到`.pdfDom`元素!')
        return false
      }
      var pdfDom = document.querySelector('.pdfDom')
      var width = pdfDom.clientWidth; //dom宽
      var height = pdfDom.clientHeight; //dom高
      var scale = 2; //放大倍数
      var opts = {
        dpi: window.devicePixelRatio * 2,
        scale: scale,
        width: width,
        height: height,
        useCORS: true,
        // allowTaint: true
      };
      var canvas = document.createElement("canvas")//创建一个canvas节点
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      var context = canvas.getContext("2d")

      context.scale(2, 2) // 增强图片清晰度

      html2Canvas(pdfDom, opts).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        // a4纸的尺寸[595.28,841.89]，html 页面生成的 canvas 在pdf中图片的宽高
        let imgWidth = 595.28
        let imgHeight = (imgWidth / contentWidth) * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)//0-1清晰度
        let PDF = new JsPDF('p', 'pt', 'a4') // 下载尺寸 a4 纸 比例
        // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          // PDF.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
          PDF.addImage(pageData, 'PNG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'PNG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            // 避免添加空白页
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      })
    }
	}
}
