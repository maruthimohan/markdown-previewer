(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{19:function(e,n,t){e.exports=t(30)},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),i=t.n(o),s=(t(24),t(14)),d=t(15),c=t(5),l=t(18),h=t(17),m=(t(25),t(26),function(e){return r.a.createElement("div",{className:"editor"},r.a.createElement("div",{className:"editor-header"},"Editor"),r.a.createElement("textarea",{className:"editor-text-area",id:"editor",value:e.markdown,onChange:e.handleMarkdownChange}))}),u=t(7),w=t.n(u),k=t(16),f=t.n(k),v=(t(29),function(e){return w.a.setOptions({breaks:!0}),r.a.createElement("div",{className:"previewer"},r.a.createElement("div",{className:"preview-header"},"Previewer"),r.a.createElement("div",{id:"preview",className:"preview",dangerouslySetInnerHTML:{__html:f.a.sanitize(w()(e.markdown))}}))}),g=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).handleMarkdownChange=function(e){a.setState({markdown:e.target.value})},a.state={markdown:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"},a.handleMarkdownChange=a.handleMarkdownChange.bind(Object(c.a)(a)),a}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-header"},"Markdown Previewer"),r.a.createElement(m,{handleMarkdownChange:this.handleMarkdownChange,markdown:this.state.markdown}),r.a.createElement(v,{markdown:this.state.markdown}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e98c0208.chunk.js.map