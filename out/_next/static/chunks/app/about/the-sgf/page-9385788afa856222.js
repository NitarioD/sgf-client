(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7716],{50868:function(e,t,n){Promise.resolve().then(n.bind(n,53011))},53011:function(e,t,n){"use strict";let r;n.r(t);var i=n(57437),u=n(2265),o=n(29572),s=n(93922),c=n(70227),l=n(23705),a=n(42214),f=n(100),d=n(29341),h=n(67328);t.default=()=>{let[e,t]=(0,u.useState)(!1),[n,v]=(0,u.useContext)(f.kZ);return(0,u.useEffect)(()=>{var e;if(null===(e=n.point_man)||void 0===e?void 0:e.content){let e=(0,d.Z)("<h1>".concat(n.the_sgf.title,"</h1> ").concat(n.the_sgf.content));r=new o.ML({extensions:[a.Z,c.ZP,s.ZP],content:e,editable:!1}),t(!0)}},[n]),e?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{id:"post",className:"flex justify-center",children:(0,i.jsx)("div",{style:{position:"relative",top:0},className:"w-[80vw]",children:(0,i.jsx)(l.kg,{editor:r})})})}):(0,i.jsx)(h.Z,{})}},67328:function(e,t,n){"use strict";var r=n(57437),i=n(78421);t.Z=()=>(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:(0,r.jsx)(i.Z,{size:"large"})})},100:function(e,t,n){"use strict";n.d(t,{BasicContentProvider:function(){return v},Ho:function(){return d},Kb:function(){return p},Lq:function(){return a},Pc:function(){return c},PostsProvider:function(){return x},Qz:function(){return h},Vo:function(){return s},kZ:function(){return f},pl:function(){return l}});var r=n(57437),i=n(2265),u=n(38472),o=n(16463);let s=(0,i.createContext)(),c=(0,i.createContext)(),l=(0,i.createContext)(),a=(0,i.createContext)(),f=(0,i.createContext)(),d=e=>{let{children:t}=e,[n,c]=(0,i.useState)({user:null,token:""}),l=(0,o.useRouter)();return(0,i.useEffect)(()=>{if(localStorage.getItem("auth")){let e=JSON.parse(localStorage.getItem("auth"));n.token||c(e),u.Z.defaults.headers.common.Authorization="Bearer ".concat(e.token)}},[n]),u.Z.defaults.baseURL="https://api.scripturegracefoundation.org/api",u.Z.interceptors.response.use(function(e){return e},function(e){let t=e.response;return(null==t?void 0:t.status)===401&&(null==t?void 0:t.config)&&!(null==t?void 0:t.config.__isRetryRequest)&&(c({user:null,token:""}),localStorage.removeItem("auth"),l.push("/signin")),e}),(0,r.jsx)(s.Provider,{value:[n,c],children:t})},h=e=>{let{children:t}=e,[n,u]=(0,i.useState)("");return(0,r.jsx)(c.Provider,{value:[n,u],children:t})},v=e=>{let{children:t}=e,[n,u]=(0,i.useState)({});return(0,r.jsx)(f.Provider,{value:[n,u],children:t})},p=e=>{let{children:t}=e,[n,u]=(0,i.useState)(!1);return(0,r.jsx)(l.Provider,{value:[n,u],children:t})},x=e=>{let{children:t}=e,[n,u]=(0,i.useState)([]);return(0,r.jsx)(a.Provider,{value:[n,u],children:t})}},59549:function(e,t){"use strict";t.Z=e=>{if("string"==typeof e)return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}},29341:function(e,t,n){"use strict";var r=n(59549);t.Z=e=>{let t=null==e?void 0:e.split("</h1>")[0].split("<h1>")[1],n=null==e?void 0:e.split("</h1>")[1];return"<h1>"+(0,r.Z)(t)+"</h1>"+n}},76415:function(e,t,n){"use strict";n.d(t,{M2:function(){return i},Tm:function(){return o},wm:function(){return u}});var r=n(2265);function i(e){return e&&r.isValidElement(e)&&e.type===r.Fragment}let u=(e,t,n)=>r.isValidElement(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t;function o(e,t){return u(e,e,t)}}},function(e){e.O(0,[3572,7902,9236,1463,8421,4274,2971,7023,1744],function(){return e(e.s=50868)}),_N_E=e.O()}]);