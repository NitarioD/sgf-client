(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{40753:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;let E=_interopRequireDefault(a(83482));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}s.default=E,e.exports=E},73532:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/reset_password",function(){return a(4279)}])},4279:function(e,s,a){"use strict";a.r(s);var E=a(85893),t=a(11163),r=a(65400),c=a.n(r),N=a(51024),_=a(11187),i=a(5121),n=a(67294);s.default=()=>{(0,t.useRouter)();let[e,s]=(0,n.useState)({email:"",reset_password:""}),[a,r]=(0,n.useState)(!1),[l,u]=(0,n.useState)(!1),handleVerifyEmail=async()=>{let{data:s}=await i.Z.get("/reset_password/".concat(e.email));s.error?_.ZP.error("".concat(s.error)):(_.ZP.success("A reset code has been sent to your email. Please enter it"),r(!0))},handleSubmit=async()=>{};return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("div",{className:"password_reset",children:(0,E.jsxs)("div",{style:{width:"300px"},children:[(0,E.jsx)("div",{children:"To reset your password"}),(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{children:[(0,E.jsx)(N.default,{placeholder:"Email",type:"email",value:e.email,style:{width:"200px"},disabled:a,onChange:a=>s({...e,email:a.target.value})}),(0,E.jsx)(c(),{disabled:a,onClick:handleVerifyEmail,type:"primary",loading:l,children:"Verify mail"})]}),(0,E.jsxs)("div",{className:a?"":"hide",children:[(0,E.jsx)(N.default,{placeholder:"Reset Code",value:e.reset_password,style:{width:"200px"},onChange:a=>s({...e,lname:a.target.value})}),(0,E.jsx)(c(),{type:"primary",onClick:handleSubmit,loading:l,children:"Subscribe"})]})]})]})})})}},15105:function(e,s){"use strict";var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var s=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||s>=a.F1&&s<=a.F12)return!1;switch(s){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE||e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY||e>=a.A&&e<=a.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};s.Z=a}},function(e){e.O(0,[352,316,24,187,774,888,179],function(){return e(e.s=73532)}),_N_E=e.O()}]);