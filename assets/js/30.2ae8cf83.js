(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{383:function(t,s,a){"use strict";a.r(s);var l=a(25),o=Object(l.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pytorch-小笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytorch-小笔记"}},[t._v("#")]),t._v(" PyTorch 小笔记")]),t._v(" "),a("h2",{attrs:{id:"基本流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[t._v("#")]),t._v(" 基本流程")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[a("code",[a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#000000"}},[t._v("model ")]),a("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),a("span",{staticStyle:{color:"#000000"}},[t._v(" SomeNetwork()            ")]),a("span",{staticStyle:{color:"#6A737D"}},[t._v("## Your own model")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#6A737D"}},[t._v("## Get `inputs` and `labels` from your dataset")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#000000"}},[t._v("preds ")]),a("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),a("span",{staticStyle:{color:"#000000"}},[t._v(" model(inputs)            ")]),a("span",{staticStyle:{color:"#6A737D"}},[t._v("## Forward pass")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#000000"}},[t._v("loss ")]),a("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),a("span",{staticStyle:{color:"#000000"}},[t._v(" loss_func(preds, labels)  ")]),a("span",{staticStyle:{color:"#6A737D"}},[t._v("## Compute loss")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#000000"}},[t._v("loss.backward()                  ")]),a("span",{staticStyle:{color:"#6A737D"}},[t._v("## Backward pass")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#000000"}},[t._v("optimizer.step()                 ")]),a("span",{staticStyle:{color:"#6A737D"}},[t._v("## Update model weights")])])])])]),a("h2",{attrs:{id:"nan-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan-problems"}},[t._v("#")]),t._v(" "),a("code",[t._v("NaN")]),t._v(" problems")]),t._v(" "),a("p",[t._v("只需一句")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[a("code",[a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#000000"}},[t._v("torch.autograd.set_detect_anomaly(")]),a("span",{staticStyle:{color:"#005CC5"}},[t._v("True")]),a("span",{staticStyle:{color:"#000000"}},[t._v(")")])])])])]),a("p",[t._v("PyTorch 会自动检查是否出现 "),a("code",[t._v("NaN")]),t._v(" 值，并且打印出详细的信息（会影响性能，所以仅在排查问题时使用）")])])}),[],!1,null,null,null);s.default=o.exports}}]);