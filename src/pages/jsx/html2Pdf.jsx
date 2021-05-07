import {defineComponent, ref, getCurrentInstance} from 'vue'
export const foobar = defineComponent({
  props: {
    msg: String,
    default: ''
  },
  setup(context) {
    const count = ref(0)
    const noticeT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const notice =  [1, 2, 3, 4, 5, 6, 7, 8]
    const instance = getCurrentInstance()
    // issues https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance
    const printHtml = () => {
      count.value++;
      if(import.meta.env.MODE == "development") {
        instance.ctx.getPdf(document.querySelector('.pdfDom'))
      } else {
        instance.appContext.config.globalProperties.getPdf(document.querySelector('.pdfDom'))
      }
    };
    return () => (
      <>
        {
          noticeT.map((item) => {
            return (
              <div className={'mod_row_box'} data-istyle="4">
                <div className={'mod_hd'}>
                  <h2 className="mod_title">今日热门{item}</h2>
                  <div className="mod_page_small">
                    <button className="btn_prev disabled" title="上一页">
                      <svg className="svg_icon svg_icon_prev" viewBox="0 0 6 10" width="6"
                           height="10">
                        <path d="M1.4 4.7L5 1M1.3 5.3L5 9" fill="none" stroke="currentColor"
                              stroke-width="1.4" stroke-linecap="round"></path>
                      </svg>
                    </button>
                    <span className="page_num" data-info="8 23" data-count="4"
                          data-page="1">1/4</span>
                    <button className="btn_next" wind-click="100" _stat="new_vs_hot_today:通栏功能区:下一页"
                            title="下一页">
                      <svg className="svg_icon svg_icon_next" viewBox="0 0 6 10" width="6"
                           height="10">
                        <path d="M4.6 4.7L1 1M4.7 5.3L1 9" fill="none" stroke="currentColor"
                              stroke-width="1.4" stroke-linecap="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={'mod_bd cf _quickopen _quickopen_duration'}>
                  <div
                    className={'mod_figure mod_figure_h_default mod_figure_h_default_1row mod_figure_h_default mod_figure_scroll'}>
                    {
                      notice.map(() => {
                        return (
                          <div className="list_item">
                            <a href="javascript:;" className={'figure'}>
                              <img loading="lazy"
                                   className="figure_pic"
                                   src='https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'
                                   crossOrigin={'anonymous'}
                                   alt="习近平在南宁考察调研"
                              />
                              <div className="figure_caption">00:39</div>
                            </a>
                            <div></div>
                            <div className="figure_detail figure_detail_two_row">
                              <p
                                className={''} style={'color: #111;font-size:14px'}>习近平在南宁考察调研</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className={'footer-btn'} style={'position: fixed;top:70%;right:20px;z-index:999'}>
          <button className={'jsx-for-vue download-pdf el-button el-button--primary'}
                  onClick={printHtml}>导出页面为PDF
          </button>
        </div>
      </>
    )
  }
})
