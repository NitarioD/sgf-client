(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4966],{87644:function(e,s,n){Promise.resolve().then(n.bind(n,1039))},1039:function(e,s,n){"use strict";n.r(s);var a=n(57437),r=n(2265),t=n(95956),l=n(77733),i=n(95381),o=n(73454),d=n(56286),c=n(78421),m=n(46682),p=n(38472),u=n(16463),h=n(22521),f=n(20357);s.default=()=>{let e=(0,u.useRouter)(),[s,n]=(0,r.useState)({fname:"",lname:"",email:"",password:"",password_confirmed:""}),[x,j]=(0,r.useState)(!1),[w,g]=(0,r.useState)(!1),[y,_]=(0,r.useState)(!0);(0,r.useEffect)(()=>{s.fname&&s.lname&&s.email&&s.password&&s.password_confirmed?_(!1):_(!0)},[s]);let C=e=>{n(s=>({...s,[e.target.name]:e.target.value}))},Z=async()=>{if(s.password!=s.password_confirmed){t.Am.error("Passwords do not match");return}let n=f.env.NEXT_PUBLIC_API;j(!0);let{data:a}=await p.Z.post("".concat(n,"/signup"),{...s,password_confirmed:void 0});a.error&&t.Am.error(a.error),a._id&&(t.Am.success("successful signup"),e.push("/signin")),j(!1)};return(0,a.jsx)("div",{style:{display:"flex",alignItems:"center",height:"86vh",justifyContent:"center"},children:(0,a.jsxs)("div",{style:{width:"700px"},children:[(0,a.jsx)("h2",{className:"text-blue-950 text-[1.5rem] text-center mb-[30px]",children:"Create Account"}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{span:10,offset:7,children:(0,a.jsxs)(o.Z,{layout:"horizontal",style:{marginTop:"15px"},children:[(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(d.default,{placeholder:"First name",name:"fname",value:s.fname,onChange:C})}),(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(d.default,{placeholder:"Last name",name:"lname",value:s.lname,onChange:C})}),(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(d.default,{placeholder:"Email",name:"email",type:"email",value:s.email,onChange:C})}),(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(d.default,{placeholder:"Password",name:"password",type:"password",value:s.password,onChange:C})}),(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(d.default,{placeholder:"Confirm Password",name:"password_confirmed",type:"password",value:s.password_confirmed,onChange:C})}),(0,a.jsxs)(o.Z.Item,{children:[(0,a.jsxs)("a",{style:{float:"right",fontSize:"1rem",marginBottom:"16px"},onClick:()=>{e.push("/signin"),g(!0)},children:[(0,a.jsx)(c.Z,{spinning:w}),(0,a.jsxs)("i",{children:["Login ",(0,a.jsx)(h.Z,{})]})]}),y?(0,a.jsx)(m.ZP,{type:"primary",block:!0,className:"px-7 py-3",onClick:Z,loading:x,disabled:!0,children:"Submit"}):(0,a.jsx)(m.ZP,{type:"primary",block:!0,onClick:Z,children:"Submit"})]})]})})})]})})}}},function(e){e.O(0,[9236,1463,1675,8723,9414,8421,6286,9412,5956,4983,2971,7023,1744],function(){return e(e.s=87644)}),_N_E=e.O()}]);