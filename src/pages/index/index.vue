<template>
  <div>
    <form id="form1" method="post" action="https://www.wjx.cn/joinnew/processjq.ashx?curid=17141631" style="overflow:hidden;">



      <div id="divLoadAnswer" style="display: none; font-size: 14px;line-height:24px;padding:6px 8px;background-color: #fff9f0;">

      </div>

      <div id="toptitle" style="margin-top: 0px;">
        <h1 class="htitle" id="htitle">
          员工满意度调查</h1>
      </div>





      <div id="divBackgroundWrap"></div>
      <div id="divMaxTime" style="display: none; background: #FFEAEA; color: #FF5760; font-size: 16px; height: 40px; left: 0; line-height: 40px; position: fixed; text-align: center; top: 0; width: 100%; z-index: 100;">
        <span id="spanTimeTip"></span>&nbsp;<span id="spanMaxTime"></span>
      </div>



      <div id="divContent" class="divContent">

        <div class="checkInMode__head clearfix" id="divCheckInMode" style="display: none;">
          <div class="wjxCountDown__wrap game_time">
            <div class="countDown__hold">
              <div class="round round1"></div>
            </div>
            <div class="countDown__hold">
              <div class="round round2"></div>
            </div>
            <div class="countDown__bg"></div>
            <div class="CountDown__frame"></div>
            <div class="countDown__time">
              <div class="countDown__time--num" id="divCGMaxTime">10</div>
              <div class="countDown__time--unit">秒</div>
            </div>
          </div>
          <div class="icon decoration-icon pull-left"></div>
          <div class="schedule-wrap pull-right">
            <div id="schedule">1</div>
            / <span id="cgtotal">5</span>题
          </div>
        </div>

        <div id="divDesc" class="formfield">
                <span class="description">
                    尊敬的同事：<br>
&nbsp; &nbsp; &nbsp; 您好！感谢您在百忙之中填写问卷，请您根据自己的实际感受和看法如实填写，本问卷采用匿名形式，所有数据仅供了解整体员工满意度情况，不针对个别数据进行研究。</span>
        </div>







        <div id="divQuestion">
          <fieldset class="fieldset" style="" id="fieldset1"><div class="cutfield" id="divCut1" qtopic="1" topic="c1"><div style="margin:7px 12px;"><b>一、您的基本情况</b></div></div><div class="field ui-field-contain" id="div1" req="1" topic="1" data-role="fieldcontain" type="3"><div class="field-label">1、	您的婚姻情况<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q1_1" name="q1" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q1_1">A 未婚</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q1_2" name="q1" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q1_2">B 已婚未生育</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q1_3" name="q1" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q1_3">C 已婚已生育</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div2" req="1" topic="2" style="display:none;" relation="1,1" data-role="fieldcontain" type="3"><div class="field-label">你预计什么时候结婚（关联逻辑：此题针对第一题中选择“未婚”的人群）<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q2_1" name="q2" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q2_1">一年内</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q2_2" name="q2" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q2_2">三年内</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q2_3" name="q2" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q2_3">五年内</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div3" req="1" topic="3" style="display:none;" relation="1,2" data-role="fieldcontain" type="3"><div class="field-label">你预计什么要小孩（关联逻辑：此题针对第一题中选择“已婚未生育”的人群）<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q3_1" name="q3" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q3_1">一年内</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q3_2" name="q3" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q3_2">两年内</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q3_3" name="q3" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q3_3">三年内</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div4" req="1" topic="4" style="display:none;" relation="1,3" data-role="fieldcontain" type="3"><div class="field-label">你有几个小孩（关联逻辑：此题针对第一题中选择“已婚已生育”的人群）<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q4_1" name="q4" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q4_1">1个</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q4_2" name="q4" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q4_2">2个</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q4_3" name="q4" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q4_3">3个</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div5" req="1" topic="5" data-role="fieldcontain" type="3"><div class="field-label">2、	您的年龄：<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q5_1" name="q5" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q5_1">A 25岁以下</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q5_2" name="q5" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q5_2">B 26-35岁</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q5_3" name="q5" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q5_3">C 36-45岁</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q5_4" name="q5" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q5_4">D 45岁以上</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div6" req="1" topic="6" data-role="fieldcontain" type="3"><div class="field-label">3、	您的最高学历：<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q6_1" name="q6" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q6_1">A高中/中专及以下</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q6_2" name="q6" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q6_2">B大专</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q6_3" name="q6" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q6_3">C本科</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q6_4" name="q6" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q6_4">D硕士及以上</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div7" req="1" topic="7" hasjump="1" data-role="fieldcontain" type="3"><div class="field-label">4、	您的工作年限：（跳题逻辑：选择A项，直接跳转到问卷末尾，因为本次调查不针对0到3个月的员工。）<span class="req">*</span></div><div class="ui-controlgroup"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q7_1" name="q7" jumpto="1" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q7_1">A 0-3个月</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q7_2" name="q7" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q7_2">B 3-6个月</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q7_3" name="q7" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q7_3">C6个月-1年</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q7_4" name="q7" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q7_4">D1-2年</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q7_5" name="q7" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q7_5">E 2年以上</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div8" req="1" topic="8" data-role="fieldcontain" type="3"><div class="field-label">5、您的工作类型： <span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q8_1" name="q8" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q8_1">A．销售类</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q8_2" name="q8" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q8_2">B．支持辅助类</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q8_3" name="q8" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q8_3">C. 管理类</div></div></div><div class="errorMessage"></div></div><div class="cutfield" id="divCut2" qtopic="9" topic="c2"><div style="margin:7px 12px;">二、对工作本身的满意度</div></div><div class="field ui-field-contain" id="div9" req="1" topic="9" data-role="fieldcontain" type="3"><div class="field-label">1、您对本人的工作岗位是否感到满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q9_1" name="q9" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q9_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q9_2" name="q9" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q9_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q9_3" name="q9" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q9_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q9_4" name="q9" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q9_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q9_5" name="q9" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q9_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div10" req="1" topic="10" data-role="fieldcontain" type="3"><div class="field-label">2、您对您与工作的匹配程度是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q10_1" name="q10" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q10_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q10_2" name="q10" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q10_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q10_3" name="q10" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q10_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q10_4" name="q10" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q10_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q10_5" name="q10" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q10_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="cutfield" id="divCut3" qtopic="11" topic="c3"><div style="margin:7px 12px;">三、对工作回报与发展的满意度</div></div><div class="field ui-field-contain" id="div11" req="1" topic="11" data-role="fieldcontain" type="3"><div class="field-label">1、您对您的目前的薪资水平是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q11_1" name="q11" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q11_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q11_2" name="q11" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q11_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q11_3" name="q11" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q11_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q11_4" name="q11" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q11_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q11_5" name="q11" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q11_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div12" req="1" topic="12" data-role="fieldcontain" type="3"><div class="field-label">2、您对公司报酬、奖励的公平性是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q12_1" name="q12" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q12_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q12_2" name="q12" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q12_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q12_3" name="q12" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q12_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q12_4" name="q12" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q12_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q12_5" name="q12" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q12_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="cutfield" id="divCut4" qtopic="13" topic="c4"><div style="margin:7px 12px;">四、对领导管理的满意度</div></div><div class="field ui-field-contain" id="div13" req="1" topic="13" data-role="fieldcontain" type="3"><div class="field-label">1、您对公司高层领导管理者的管理能力与水平是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q13_1" name="q13" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q13_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q13_2" name="q13" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q13_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q13_3" name="q13" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q13_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q13_4" name="q13" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q13_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q13_5" name="q13" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q13_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div14" req="1" topic="14" data-role="fieldcontain" type="3"><div class="field-label">2、您对直接上级的管理能力与业务水平是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q14_1" name="q14" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q14_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q14_2" name="q14" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q14_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q14_3" name="q14" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q14_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q14_4" name="q14" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q14_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q14_5" name="q14" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q14_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="cutfield" id="divCut5" qtopic="15" topic="c5"><div style="margin:7px 12px;">五、对工作环境与背景的满意度</div></div><div class="field ui-field-contain" id="div15" req="1" topic="15" data-role="fieldcontain" type="3"><div class="field-label">1、您认为工作环境、设施设备的健康和安全预防措施是否足够且让人满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q15_1" name="q15" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q15_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q15_2" name="q15" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q15_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q15_3" name="q15" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q15_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q15_4" name="q15" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q15_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q15_5" name="q15" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q15_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div16" req="1" topic="16" data-role="fieldcontain" type="3"><div class="field-label">2、您对公司提供的工作中需要的资源(材料、设施、工具)是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q16_1" name="q16" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q16_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q16_2" name="q16" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q16_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q16_3" name="q16" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q16_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q16_4" name="q16" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q16_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q16_5" name="q16" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q16_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="cutfield" id="divCut6" qtopic="17" topic="c6"><div style="margin:7px 12px;">六、对工作关系的满意度</div></div><div class="field ui-field-contain" id="div17" req="1" topic="17" data-role="fieldcontain" type="3"><div class="field-label">1、您对同事之间的沟通与配合是否满意？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q17_1" name="q17" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q17_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q17_2" name="q17" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q17_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q17_3" name="q17" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q17_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q17_4" name="q17" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q17_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q17_5" name="q17" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q17_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div18" req="1" topic="18" data-role="fieldcontain" type="3"><div class="field-label">2、您对您和周围同事的工作责任感及主动性满意吗？<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q18_1" name="q18" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q18_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q18_2" name="q18" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q18_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q18_3" name="q18" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q18_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q18_4" name="q18" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q18_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q18_5" name="q18" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q18_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="cutfield" id="divCut7" qtopic="19" topic="c7"><div style="margin:7px 12px;">七、对企业整体的满意度</div></div><div class="field ui-field-contain" id="div19" req="1" topic="19" data-role="fieldcontain" type="3"><div class="field-label">1、您对公司的历史、公司文化是否满意<span class="req">*</span></div><div class="ui-controlgroup two_column"><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="1" id="q19_1" name="q19" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q19_1">A 很满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="2" id="q19_2" name="q19" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q19_2">B 满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="3" id="q19_3" name="q19" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q19_3">C 一般</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="4" id="q19_4" name="q19" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q19_4">D 不满意</div></div><div class="ui-radio"><span class="jqradiowrapper"><input type="radio" value="5" id="q19_5" name="q19" style="display:none;"><a class="jqradio" href="javascript:;"></a></span><div class="label" for="q19_5">E 极不满意</div></div></div><div class="errorMessage"></div></div><div class="field ui-field-contain" id="div20" topic="20" data-role="fieldcontain" type="2"><div class="field-label">2、您对公司目前还有哪些建议和意见：</div><div class="beginner_problem"><textarea rows="4" style="max-height:100px;" id="q20" name="q20" value=""></textarea></div><div class="errorMessage"></div></div></fieldset>
        </div>
        <div id="divMatrixRel" style="position: absolute; display: none; width: 80%; margin: 0 10%;" class="ui-input-text">
          <input type="text" placeholder="请注明..." id="matrixinput" style="min-height: 2em; width: 100%; padding: 0.3em 0.6em;">
        </div>
        <div id="divMatrixHeader" class="divMatrixHeader" style="position: absolute; display: none; font-size: 12px; color: #333">
        </div>
        <div class="shopcart" id="shopcart" style="display: none;">
        </div>

        <div class="footer">
          <div class="ValError" id="ValError">
          </div>


          <div id="captchaOut">
            <div id="captchaWrap">
              <span id="captchaTit" style="display:none;color:#42B917;"></span>
              <div id="captcha" style="margin: 0px auto 25px; padding-left: 27px; display: none;"><div id="SM_BTN_WRAPPER_1" class="sm-btn-wrapper"><div id="SM_BTN_1" class="sm-btn sm-btn-default" style="width: 300px; height: 42px; line-height: 42px;">
                <div class="sm-ico">
                  <div class="right-tick">
                    <div class="right-tick-left"></div>
                    <div class="right-tick-right"></div>
                  </div>
                  <div class="wrong-cross">
                    <div class="wrong-cross-left"></div>
                    <div class="wrong-cross-right"></div>
                  </div>
                  <div class="shield">
                    <svg width="12px" height="14px" viewBox="0 0 200 255">
                      <g id="Page3" stroke="#eeeeee" strokewidth="1" fill="none" fillrule="evenodd">
                        <g id="Group3" fill="#ffffff" fillrule="nonzero">
                          <path d="M192.215987,31.5402031 C190.026012,31.619176 187.868479,31.6497744 185.757709,31.6497744 L185.748648,31.6497744 C130.221833,31.6497744 105.760339,6.2755772 105.556627,6.05672609 L100.008184,0 L94.4518488,6.05672609 C94.2095573,6.32191195 68.3980713,33.5987437 7.78430533,31.5402029 L2.8561292e-07,31.2753086 L0,146.302981 C0,176.418758 10.0841737,220.345176 97.2848165,253.952079 L100.000584,255 L102.715183,253.952079 C189.915826,220.345176 200,176.418467 200,146.302981 L200,31.2753086 L192.215987,31.5402031 Z" id="Shape3"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="sm-ico-wave"></div>
                  <div class="out-silder-circle"></div>
                </div>
                <span id="SM_TXT_1" class="sm-txt">点击按钮开始智能验证</span>
                <div id="rectMask" style="width: 302px; height: 44px; line-height: 44px;">
                  <div class="rect-top" id="rectTop" style="width: 300px; height: 21px; line-height: 42px;"></div>
                  <div class="rect-bottom" id="rectBottom" style="width: 300px; height: 21px; line-height: 42px; top: 22px;"></div>
                </div>
              </div>
                <div id="sm-btn-bg" style="width: 300px; height: 42px; line-height: 42px;">
                </div></div></div>
            </div>
          </div>

          <div id="divSubmit" style="padding: 0px 20px 10px;">
            <div class="voteDiv">

              <div>
                <div id="ctlNext" class="button blue" @click="printPDF">提交答卷</div>

                <a href="javascript:;" class="button white ctBack" style="display:none" onclick="location.href=getTpMainUrl()">
                  返回</a>
              </div>
            </div>

            <div style="margin: 0px 0 10px; padding-top: 10px;" id="reportfooter">
              <a href="/urlreport.aspx?url=17141631" style="float: right; color: #666; font-size: 14px;" class="reportto" rel="nofollow">
                举报</a>
              <div style="clear: both;">
              </div>

            </div>
          </div>

          <a href="javascript:;" id="cgstartbutton" style="display: none;"></a>

          <div id="divSearch" style="background: #020d15; color: #7c7c7c; font-size: 18px; height: 50px; left: 0; line-height: 50px; position: fixed; text-align: center; bottom: 0; width: 100%; z-index: 100; display: none;">
          </div>

        </div>

      </div>

      <div id="divPowerBy" style="margin: 0 auto;" class="logofooter"><div class="wjfooter"><span id="spanPower"><a href="https://www.wjx.cn/mobile/index.aspx" target="_blank" title="问卷星_不止问卷调查/在线考试">问卷星</a>&nbsp;提供技术支持</span></div></div>

      <div class="result" id="outdiv">
        <div class="indiv" id="indiv">
          <i class="icon_close"></i>
          <div id="preView_wrap">
            <img class="imgresult" id="bigimg" src="" alt="">
          </div>
        </div>
      </div>


      <input type="hidden" value="2021/5/7 16:40:18" id="starttime" name="starttime">
      <input type="hidden" value="directphone" id="source" name="source">
    </form>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance} from 'vue'
import {foobar} from '../jsx/html2Pdf'
export default defineComponent({
	name:'index',
	components: {
    foobar
	},
  setup(){
    const instance = getCurrentInstance()
	  const printPDF =()=> {
      if(import.meta.env.MODE == "development") {
        instance.ctx.getPdf(document.querySelector('#form1'))
      } else {
        instance.appContext.config.globalProperties.getPdf(document.querySelector('.pdfDom'))
      }
    }
	  return{
      printPDF
    }
  }
})
</script>
<style lang="less">
  @import "https://image.wjx.com/joinnew/css/jqmobo.css?v=1566";
</style>
