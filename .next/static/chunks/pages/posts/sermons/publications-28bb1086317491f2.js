(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{73337:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/sermons/publications",function(){return n(70855)}])},78466:function(t,e,n){"use strict";var s=n(85893),i=n(89552);e.Z=()=>(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:(0,s.jsx)(i.default,{size:"large"})})},39104:function(t,e){"use strict";e.Z=t=>{if("string"==typeof t){let e=t.split(" "),n=e.map(t=>{let e=t.charAt(0).toUpperCase();return e+t.slice(1)});return n.join(" ")}}},29674:function(t,e,n){"use strict";var s=n(39104);e.Z=t=>{let e=null==t?void 0:t.split("</h1>")[0].split("<h1>")[1],n=null==t?void 0:t.split("</h1>")[1],i=(0,s.Z)(e);return"<h1>"+i+"</h1>"+n}},70855:function(t,e,n){"use strict";let s;n.r(e);var i=n(85893),o=n(67294),r=n(5121),a=n(9008),l=n.n(a),u=n(69843),c=n(42752),p=n(96575),h=n(50601),d=n(71284),f=n(54929),g=n(29674),m=n(78466);e.default=()=>{let[t,e]=(0,o.useState)(!1),[n,a]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let getPost=async()=>{let{data:t}=await r.Z.get("/posts/publication");t.toString()&&a(t);let n=(0,g.Z)(t[0].content);s=new c.ML({extensions:[f.Z,h.ZP,p.ZP],content:n,editable:!1}),e(!0)};getPost()},[]),t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("meta",{name:"description",content:"The Scripture Grace Foundation is a non-profit organization that spreads the gospel about Jesus Christ to every people, the poor and the rich. We need your support to function effectively. You can join our membership at any time. You can also read our publications"}),(0,i.jsx)("meta",{name:"keywords",content:"support, non-profit, Jesus Christ, evangelism, scripture grace foundation, membership"})]}),(0,i.jsxs)("div",{className:"post",children:[(0,i.jsx)("span",{children:(0,i.jsx)("h2",{children:"Publication"})}),(0,i.jsxs)("div",{style:{position:"relative",top:0},children:[(0,i.jsx)(d.kg,{editor:s}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"60px"},children:(0,i.jsx)(u.default,{defaultCurrent:1,onChange:t=>{s.commands.setContent((0,g.Z)(n[t-1].content))},pageSize:1,total:n.length,showSizeChanger:!1,style:{position:"absolute",bottom:"0"}})})]})]})]}):(0,i.jsx)(m.Z,{})}}},function(t){t.O(0,[911,352,316,228,43,461,548,951,499,843,774,888,179],function(){return t(t.s=73337)}),_N_E=t.O()}]);