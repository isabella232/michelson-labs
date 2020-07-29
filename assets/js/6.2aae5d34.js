(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{353:function(t,e,a){t.exports=a.p+"assets/img/binder.ed37a17a.gif"},354:function(t,e,a){t.exports=a.p+"assets/img/notebook.fec16052.gif"},369:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Before we move on to the first chapter, here are two things you should know:")]),t._v(" "),s("ul",[s("li",[t._v("Installation options;")]),t._v(" "),s("li",[t._v("How a notebook is structured.")])]),t._v(" "),s("h2",{attrs:{id:"try-online"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-online"}},[t._v("#")]),t._v(" Try online")]),t._v(" "),s("p",[t._v("In order to feel what interactive notebooks are you can open course chapters in the Binder service, that provides a temporary Jupyter environment.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(353),alt:"Open in Binder"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Your changes won't be saved unless you download the notebook to your computer."),s("br"),t._v("\nFor regular use consider local setup (options below).")])]),t._v(" "),s("h2",{attrs:{id:"run-in-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-in-docker"}},[t._v("#")]),t._v(" Run in Docker")]),t._v(" "),s("p",[t._v("Ensure you have "),s("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),s("OutboundLink")],1),t._v(" installed.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("docker pull bakingbad/michelson-kernel\ndocker run --rm -it -p 127.0.0.1:8888:8888 -v $(pwd):/home/jupyter/notebooks bakingbad/michelson-kernel\n")])])]),s("p",[t._v("Open "),s("em",[t._v("http://127.0.0.1:8888")]),t._v(" in your browser.")]),t._v(" "),s("p",[t._v("Note, that the "),s("em",[t._v("notebooks")]),t._v(" folder is mounted to your local filesystem by default, so you won't loose any changes made.")]),t._v(" "),s("h2",{attrs:{id:"install-jupyter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-jupyter"}},[t._v("#")]),t._v(" Install Jupyter")]),t._v(" "),s("p",[t._v("First of all, install several crypto libraries:")]),t._v(" "),s("ul",[s("li",[t._v("Ubuntu: "),s("code",[t._v("sudo apt install libsodium-dev libsecp256k1-dev libgmp-dev")])]),t._v(" "),s("li",[t._v("MacOS: "),s("code",[t._v("brew install libsodium libsecp256k1 gmp")])]),t._v(" "),s("li",[t._v("Windows: follow the "),s("a",{attrs:{href:"https://github.com/baking-bad/pytezos#windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Ensure you have a suitable Python version (3.5+).\nThe recomended way is "),s("a",{attrs:{href:"https://github.com/pyenv/pyenv-installer",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyenv"),s("OutboundLink")],1),t._v(".\nMake sure you have installed all the "),s("a",{attrs:{href:"https://github.com/pyenv/pyenv/wiki/Common-build-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("dependencies"),s("OutboundLink")],1),t._v(" first.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("pip install jupyter michelson-kernel\njupyter notebook\n")])])]),s("p",[t._v("Open the link from the command output, create new notebook with Michelson kernel.")]),t._v(" "),s("h2",{attrs:{id:"notebook-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notebook-workflow"}},[t._v("#")]),t._v(" Notebook workflow")]),t._v(" "),s("p",[t._v("A notebook is a set of cells that can contain text (markdown), executable code, and the result of an execution.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(354),alt:"Notebook"}})]),t._v(" "),s("p",[t._v("The code is executed using a special extension called the kernel. Michelson kernel is actually a wrapped interpreter that supports an extended instruction set: in addition to the language primitives it also expands Michelson macros and special debugging "),s("a",{attrs:{href:"/chapters/99"}},[t._v("helpers")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"code-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-block"}},[t._v("#")]),t._v(" Code block")]),t._v(" "),s("p",[t._v("This is a cell holding a Michelson expression that can be executed. Keep in mind, that all cells share the state, so the order of execution does matter.")]),t._v(" "),s("div",{staticClass:"language-Michelson extra-class"},[s("pre",{staticClass:"language-Michelson"},[s("code",{staticClass:"language-Michelson"},[s("span",{staticClass:"token operator"},[t._v("PUSH")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token class-name"},[t._v("string")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token number"},[t._v('"Hello"')]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token punctuation"},[t._v("\n")])])])]),s("h3",{attrs:{id:"execution-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-log"}},[t._v("#")]),t._v(" Execution log")]),t._v(" "),s("p",[t._v("By default verbose logging is enabled and you will see a step-by-step instruction execution.")]),t._v(" "),s("div",{staticClass:"stdout"},[s("pre",[s("span",{staticClass:"stream-name"},[t._v("stdout")]),s("br"),t._v("PUSH: push Hello;")])]),t._v(" "),s("h3",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),s("p",[t._v("In case of a runtime error you will see a red box with the message and traceback.")]),t._v(" "),s("div",{staticClass:"stderr"},[s("pre",[s("span",{staticClass:"stream-name"},[t._v("stderr")]),s("br"),t._v("MichelsonRuntimeError")])]),t._v(" "),s("h3",{attrs:{id:"stack-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stack-values"}},[t._v("#")]),t._v(" Stack values")]),t._v(" "),s("p",[t._v("If a stack entry occurs as a result of the execution, you will see the value, its type, and name (if any).")]),t._v(" "),s("div",{staticClass:"embedded-html"},[s("table",[s("thead",[s("tr",[s("th",[t._v("value                                             ")]),s("th",[t._v("type                                       ")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("pre",{staticStyle:{"text-align":"left"}},[t._v('"Hello"')])]),s("td",[s("pre",{staticStyle:{"text-align":"left"}},[t._v("string")])])])])])]),t._v(" "),s("h3",{attrs:{id:"helpers-and-macros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpers-and-macros"}},[t._v("#")]),t._v(" Helpers and macros")]),t._v(" "),s("p",[t._v("You will notice that different primitives are painted in different colors. The kernel distinguishes between standard language instructions, "),s("a",{attrs:{href:"https://tezos.gitlab.io/whitedoc/michelson.html#macros",target:"_blank",rel:"noopener noreferrer"}},[t._v("macros"),s("OutboundLink")],1),t._v(" (not part of the specification), and "),s("a",{attrs:{href:"/chapters/99"}},[t._v("helpers")]),t._v(" that do not work outside the Jupyter environment.")]),t._v(" "),s("div",{staticClass:"language-Michelson extra-class"},[s("pre",{staticClass:"language-Michelson"},[s("code",{staticClass:"language-Michelson"},[s("span",{staticClass:"token operator"},[t._v("DROP")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token comment"},[t._v("## Michelson instruction")]),s("span",{staticClass:"token punctuation"},[t._v("\n")]),s("span",{staticClass:"token variable"},[t._v("FAIL")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token comment"},[t._v("## Michelson macro")]),s("span",{staticClass:"token punctuation"},[t._v("\n")]),s("span",{staticClass:"token keyword"},[t._v("DUMP")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token punctuation"},[t._v(" ")]),s("span",{staticClass:"token comment"},[t._v("## Jupyter kernel helper")]),s("span",{staticClass:"token punctuation"},[t._v("\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);