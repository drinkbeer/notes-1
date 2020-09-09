(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{383:function(t,v,_){"use strict";_.r(v);var a=_(25),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" ？")]),t._v(" "),_("p",[t._v("!> 🚧...")]),t._v(" "),_("ul",[_("li",[t._v("first-order logic?")]),t._v(" "),_("li",[t._v("a single rule of inference, called resolution?")]),t._v(" "),_("li",[t._v("clausal form? a restricted clausal form called Horn clause logic")]),t._v(" "),_("li",[t._v("Gödel's incompleteness theorems? 要么自相矛盾，要么不完备")]),t._v(" "),_("li",[t._v("证明论？模型论？类型论（似乎不再是数理逻辑了）？")])]),t._v(" "),_("h2",{attrs:{id:"数理逻辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数理逻辑"}},[t._v("#")]),t._v(" 数理逻辑")]),t._v(" "),_("ul",[_("li",[t._v("accent"),_("strong",[t._v("well-formed formula")]),t._v(" (abbr. "),_("strong",[t._v("wff")]),t._v("), a finite sequence of symbols from a given alphabet that is part of a formal language (well-formed 又有什么要求🤔)")]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("atomic formula")]),t._v(" (aka "),_("strong",[t._v("atom")]),t._v(")，不含逻辑连接词的，或者说不含 sub-formulas 的 wff")]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("文字")]),t._v("，accent"),_("strong",[t._v("literal")]),t._v("，an "),_("strong",[t._v("atom")]),t._v(" or its negation")]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("子句")]),t._v("，accent"),_("strong",[t._v("clause")]),t._v("，an expression formed from a finite collection of "),_("strong",[t._v("literal")]),t._v("s\n"),_("ul",[_("li",[t._v("accent"),_("strong",[t._v("Horn clause")]),t._v("，是文字 (literal) 的析取 (disjunction)，并且最多只有一个肯定文字\n"),_("ul",[_("li",[t._v("A Horn clause with exactly one positive literal is a "),_("strong",[t._v("definite clause")])]),t._v(" "),_("li",[t._v("A Horn clause without a positive literal is called a "),_("strong",[t._v("goal clause")])]),t._v(" "),_("li",[t._v("注意 Horn clauses 的合取是合取范式")])])])])]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("句子")]),t._v("，accent"),_("strong",[t._v("sentence")]),t._v("，没有自由变量的公式🤔")]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("theory")]),t._v("，一组句子🤔")]),t._v(" "),_("li",[t._v("A set of Horn clauses is called a "),_("strong",[t._v("logic program")]),t._v(" [1]")])]),t._v(" "),_("ul",[_("li",[t._v("Boolean logic")]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("合取范式")]),t._v("，accent"),_("strong",[t._v("conjunctive normal form")]),t._v(" ("),_("strong",[t._v("CNF")]),t._v(") or accent"),_("strong",[t._v("clausal normal form")]),t._v("，是若干个子句 (clause) 的合取 (conjunction)，其中子句为文字 (literal) 的析取，也即 "),_("strong",[t._v("AND of ORs")]),t._v(" "),_("ul",[_("li",[t._v("所有文字的合取当然是 CNF 的，每个文字都看作一个子句")]),t._v(" "),_("li",[t._v("所有文字的析取也是 CNF 的（注意：同时也是 DNF 的），看作只有一个子句（🤔这种情况很反直觉，至于为什么会定义这种标准形式，说是在自动定理证明中有用）")])])]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("析取范式")]),t._v("，accent"),_("strong",[t._v("disjunctive normal form")]),t._v(" ("),_("strong",[t._v("DNF")]),t._v(")，即 "),_("strong",[t._v("OR of ANDs")])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("演绎")]),t._v("，"),_("strong",[t._v("deduction")]),t._v("，从一般到特殊，从一般性规律出发来探讨具体事物")]),t._v(" "),_("li",[_("strong",[t._v("归纳")]),t._v("，"),_("strong",[t._v("induction")]),t._v("，从特殊到一般，从个别事物出发概括出一般性规律")]),t._v(" "),_("li",[t._v("accent"),_("strong",[t._v("归结")]),t._v("，accent"),_("strong",[t._v("resolution")]),t._v("，")])]),t._v(" "),_("h2",{attrs:{id:"规则学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#规则学习"}},[t._v("#")]),t._v(" 规则学习")]),t._v(" "),_("h3",{attrs:{id:"命题规则学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命题规则学习"}},[t._v("#")]),t._v(" 命题规则学习")]),t._v(" "),_("ul",[_("li",[t._v("序贯覆盖")]),t._v(" "),_("li",[t._v("剪枝优化")])]),t._v(" "),_("h3",{attrs:{id:"一阶规则学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一阶规则学习"}},[t._v("#")]),t._v(" 一阶规则学习")]),t._v(" "),_("p",[t._v("FOIL (First-Order Inductive Learner)")]),t._v(" "),_("p",[t._v("序贯覆盖，自顶向下（从一般到特殊）")]),t._v(" "),_("p",[t._v("本质只是把命题规则学习的过程稍加改变使其能应用在一阶规则上")]),t._v(" "),_("h3",{attrs:{id:"归纳逻辑程序设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#归纳逻辑程序设计"}},[t._v("#")]),t._v(" 归纳逻辑程序设计")]),t._v(" "),_("p",[t._v("ILP (Inductive Logic Programming)")]),t._v(" "),_("p",[t._v("自底向上")]),t._v(" "),_("h4",{attrs:{id:"最小一般泛化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最小一般泛化"}},[t._v("#")]),t._v(" 最小一般泛化")]),t._v(" "),_("p",[t._v("LGG (Least General Generalization)，从名字就能看出来，给定若干规则，希望总结成一条相对泛化的规则，但同时又不要太过泛化（最小泛化），可以用最大公约数来类比")]),t._v(" "),_("ul",[_("li",[t._v("对于两条规则（🤔应该需要写成合取的形式）\n"),_("ul",[_("li",[t._v("先找都有的谓词，然后对其中相同位置的常量进行考察，若相同则保留，若不相同则替换为变量（泛化）")]),t._v(" "),_("li",[t._v("对于不是都含有的谓词，直接忽略，否则 LGG 就不能特化成该规则")])])])]),t._v(" "),_("p",[t._v("🤔RLGG")]),t._v(" "),_("h3",{attrs:{id:"递归结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#递归结"}},[t._v("#")]),t._v(" 递归结")]),t._v(" "),_("p",[t._v("inverse resolution，四种方式，在一阶规则里要用到 置换 和 合一 两种操作")]),t._v(" "),_("h2",{attrs:{id:"参考文献-docsify-ignore"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献-docsify-ignore"}},[t._v("#")]),t._v(" 参考文献 {docsify-ignore}")]),t._v(" "),_("ol",[_("li",[t._v("Stephen Muggleton. Inductive Logic Programming. "),_("em",[t._v("New Generation Computing")]),t._v(". 1991. ("),_("a",{attrs:{href:"https://www.doc.ic.ac.uk/~shm/Papers/ilp.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("PDF"),_("OutboundLink")],1),t._v(")"),_("br"),t._v("\n最有用的是附录 A，正文不是很懂，只看到有很多种 operations")]),t._v(" "),_("li",[t._v("周志华. 机器学习.（第 15 章，规则学习）")])])])}),[],!1,null,null,null);v.default=r.exports}}]);