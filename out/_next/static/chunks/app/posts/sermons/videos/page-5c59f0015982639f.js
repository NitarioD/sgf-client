(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1480],{12936:function(e,t,r){Promise.resolve().then(r.bind(r,67642))},67642:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(57437),i=r(2265),o=r(94693),s=r(48070),u=r(59549),l=e=>{let{video:t}=e,[r,o]=(0,i.useState)(0);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{style:{display:"block",height:"auto",marginBottom:"55px",paddingBottom:"55px",position:"relative",top:0},children:[(0,n.jsxs)("h3",{style:{fontSize:"1.5rem"},children:["Teachings on: ",(0,n.jsx)("i",{children:(0,u.Z)(t[0])})]}),(0,n.jsx)("iframe",{width:"100%",height:"290px",src:t[1][r].link,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.jsx)("h4",{style:{fontSize:"1.2rem"},children:(0,u.Z)(t[1][r].title)}),(0,n.jsx)("h5",{style:{fontSize:"1rem",float:"left",clear:"both",paddingRight:"5px"},children:"Description:"}),(0,n.jsx)("p",{style:{color:"gray"},children:t[1][r].description}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"60px"},children:(0,n.jsx)(s.Z,{defaultCurrent:1,onChange:e=>{o(e-1)},pageSize:1,total:t[1].length,showSizeChanger:!1,style:{position:"absolute",bottom:"0"}})})]})})},a=r(100),c=r(67328),d=()=>{let[e,t]=(0,i.useState)(!1),[r,s]=(0,i.useContext)(a.Lq);return(0,i.useEffect)(()=>{r[0]&&t(!0)},[r]),e?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{id:"post",className:"flex justify-center ",children:[(0,n.jsx)(o.C,{variant:"outline",id:"tag",children:(0,n.jsx)("span",{children:"Videos"})}),(0,n.jsx)("div",{style:{position:"relative",top:0},className:"w-[70vw] mt-[50px] overflow-auto max-h-[80vh]",children:r.map(e=>(0,n.jsx)(l,{video:e},e[0]))})]})}):(0,n.jsx)(c.Z,{})}},67328:function(e,t,r){"use strict";var n=r(57437),i=r(78421);t.Z=()=>(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:(0,n.jsx)(i.Z,{size:"large"})})},94693:function(e,t,r){"use strict";r.d(t,{C:function(){return u}});var n=r(57437);r(2265);var i=r(12218),o=r(37440);let s=(0,i.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function u(e){let{className:t,variant:r,...i}=e;return(0,n.jsx)("div",{className:(0,o.cn)(s({variant:r}),t),...i})}},100:function(e,t,r){"use strict";r.d(t,{BasicContentProvider:function(){return p},Ho:function(){return f},Kb:function(){return h},Lq:function(){return c},Pc:function(){return l},PostsProvider:function(){return g},Qz:function(){return v},Vo:function(){return u},kZ:function(){return d},pl:function(){return a}});var n=r(57437),i=r(2265),o=r(38472),s=r(16463);let u=(0,i.createContext)(),l=(0,i.createContext)(),a=(0,i.createContext)(),c=(0,i.createContext)(),d=(0,i.createContext)(),f=e=>{let{children:t}=e,[r,l]=(0,i.useState)({user:null,token:""}),a=(0,s.useRouter)();return(0,i.useEffect)(()=>{if(localStorage.getItem("auth")){let e=JSON.parse(localStorage.getItem("auth"));r.token||l(e),o.Z.defaults.headers.common.Authorization="Bearer ".concat(e.token)}},[r]),o.Z.defaults.baseURL="https://api.scripturegracefoundation.org/api",o.Z.interceptors.response.use(function(e){return e},function(e){let t=e.response;return(null==t?void 0:t.status)===401&&(null==t?void 0:t.config)&&!(null==t?void 0:t.config.__isRetryRequest)&&(l({user:null,token:""}),localStorage.removeItem("auth"),a.push("/signin")),e}),(0,n.jsx)(u.Provider,{value:[r,l],children:t})},v=e=>{let{children:t}=e,[r,o]=(0,i.useState)("");return(0,n.jsx)(l.Provider,{value:[r,o],children:t})},p=e=>{let{children:t}=e,[r,o]=(0,i.useState)({});return(0,n.jsx)(d.Provider,{value:[r,o],children:t})},h=e=>{let{children:t}=e,[r,o]=(0,i.useState)(!1);return(0,n.jsx)(a.Provider,{value:[r,o],children:t})},g=e=>{let{children:t}=e,[r,o]=(0,i.useState)([]);return(0,n.jsx)(c.Provider,{value:[r,o],children:t})}},59549:function(e,t){"use strict";t.Z=e=>{if("string"==typeof e)return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}},37440:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(44839),i=r(96164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}},12218:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:u}=t,l=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],i=null==u?void 0:u[e];if(null===t)return null;let o=n(t)||n(i);return s[e][o]}),a=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return i(e,l,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...u,...a}[t]):({...u,...a})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[9236,1463,1675,8723,9414,8421,4868,4183,3742,1263,8070,2971,7023,1744],function(){return e(e.s=12936)}),_N_E=e.O()}]);