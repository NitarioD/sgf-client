(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{40753:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;let a=_interopRequireDefault(t(83482));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}s.default=a,e.exports=a},80347:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/unsubcribe",function(){return t(37120)}])},37120:function(e,s,t){"use strict";t.r(s);var a=t(85893),r=t(11163),c=t(9008),n=t.n(c),o=t(65400),u=t.n(o),i=t(51024),E=t(11187),l=t(5121),N=t(67294);s.default=()=>{let e=(0,r.useRouter)(),[s,t]=(0,N.useState)(""),[c,o]=(0,N.useState)(!1),[_,d]=(0,N.useState)(!1),[S,U]=(0,N.useState)(""),handleGetCode=async()=>{d(!0);let{data:e}=await l.Z.get("/subscriber/".concat(S));(null==e?void 0:e.error)?E.ZP.error("".concat(e.error)):(null==e?void 0:e.ok)&&(E.ZP.success("Unsubscribe code successfully sent to your email. Please enter the code to unsubscribe"),o(!0)),d(!1)},handleUnsubscribe=async()=>{d(!0);let{data:t}=await l.Z.post("/unsubscribe/".concat(S),{unsubscribeCode:s});(null==t?void 0:t.error)?E.ZP.error("".concat(t.error)):(null==t?void 0:t.ok)&&(E.ZP.success("You have successfully unsubscribed from our community, you will no longer be getting mails from us."),e.push("/")),d(!1)};return(0,a.jsxs)("form",{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("meta",{name:"description",content:"The Scripture Grace Foundation is a non-profit organization that spreads the gospel about Jesus Christ to every people, the poor and the rich. We need your support to function effectively. You can join our membership at any time"}),(0,a.jsx)("meta",{name:"keywords",content:"support, non-profit, Jesus Christ, evangelism, scripture grace foundation, membership"})]}),(0,a.jsxs)("div",{className:"subscribe",children:[(0,a.jsx)("h2",{children:"We are sorry to see you go"}),(0,a.jsx)("p",{children:"Proceed to unsubscribe from our community"}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[c?(0,a.jsx)(i.default,{placeholder:"Enter the code sent to your email",name:"code",style:{width:"500px"},value:s,onChange:e=>t(e.target.value)}):(0,a.jsx)(i.default,{placeholder:"Email",name:"email",autoComplete:"email",style:{width:"500px"},value:S,onChange:e=>U(e.target.value)}),(0,a.jsx)("div",{style:{width:280,float:"right",marginTop:24},children:c?(0,a.jsx)(u(),{block:!0,style:{background:"red",color:"white"},onClick:handleUnsubscribe,loading:_,children:"Unsubscribe"}):(0,a.jsx)(u(),{block:!0,type:"primary",onClick:handleGetCode,loading:_,children:"Get unSubscribe code"})})]})]})]})}},15105:function(e,s){"use strict";var t={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var s=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||s>=t.F1&&s<=t.F12)return!1;switch(s){case t.ALT:case t.CAPS_LOCK:case t.CONTEXT_MENU:case t.CTRL:case t.DOWN:case t.END:case t.ESC:case t.HOME:case t.INSERT:case t.LEFT:case t.MAC_FF_META:case t.META:case t.NUMLOCK:case t.NUM_CENTER:case t.PAGE_DOWN:case t.PAGE_UP:case t.PAUSE:case t.PRINT_SCREEN:case t.RIGHT:case t.SHIFT:case t.UP:case t.WIN_KEY:case t.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=t.ZERO&&e<=t.NINE||e>=t.NUM_ZERO&&e<=t.NUM_MULTIPLY||e>=t.A&&e<=t.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case t.SPACE:case t.QUESTION_MARK:case t.NUM_PLUS:case t.NUM_MINUS:case t.NUM_PERIOD:case t.NUM_DIVISION:case t.SEMICOLON:case t.DASH:case t.EQUALS:case t.COMMA:case t.PERIOD:case t.SLASH:case t.APOSTROPHE:case t.SINGLE_QUOTE:case t.OPEN_SQUARE_BRACKET:case t.BACKSLASH:case t.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};s.Z=t}},function(e){e.O(0,[352,316,24,187,774,888,179],function(){return e(e.s=80347)}),_N_E=e.O()}]);