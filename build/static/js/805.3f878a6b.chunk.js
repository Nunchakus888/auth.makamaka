"use strict";(self.webpackChunkauth_makamaka_io=self.webpackChunkauth_makamaka_io||[]).push([[805],{4904:function(e,t,r){r(3197);var n=r(3701),a=r(4554),o=r(6630),s=r(184);t.Z=e=>{const t=o.Z.logo,r=o.Z.logoWidth;return(0,s.jsx)(n.Z,{disabled:!0,children:(0,s.jsx)(a.Z,{sx:{display:"flex",gap:"5px",alignItems:"center"},children:(0,s.jsx)("img",{src:t,alt:"logo",style:{width:r}})})})}},5876:function(e,t,r){r.d(t,{Z:function(){return A}});var n=r(4554),a=r(2791),o=r(3967),s=r(2793),i=r(1048),l=r(8182),c=r(4419),d=r(7630),x=r(3736),u=r(703),h=r(1217),m=r(9407);function Z(e){return(0,h.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var p=r(184);const v=["className","raised"],g=(0,d.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var j=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiCard"}),{className:n,raised:a=!1}=r,o=(0,i.Z)(r,v),d=(0,s.Z)({},r,{raised:a}),u=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},Z,t)})(d);return(0,p.jsx)(g,(0,s.Z)({className:(0,l.Z)(u.root,n),elevation:a?8:void 0,ref:t,ownerState:d},o))})),f=r(890);function y(e){return(0,h.Z)("MuiCardHeader",e)}var C=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);const b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],P=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,s.Z)({[`& .${C.title}`]:t.title,[`& .${C.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),w=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),M=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),N=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var R=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:a,className:o,component:d="div",disableTypography:u=!1,subheader:h,subheaderTypographyProps:m,title:Z,titleTypographyProps:v}=r,g=(0,i.Z)(r,b),j=(0,s.Z)({},r,{component:d,disableTypography:u}),C=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},y,t)})(j);let R=Z;null==R||R.type===f.Z||u||(R=(0,p.jsx)(f.Z,(0,s.Z)({variant:a?"body2":"h5",className:C.title,component:"span",display:"block"},v,{children:R})));let k=h;return null==k||k.type===f.Z||u||(k=(0,p.jsx)(f.Z,(0,s.Z)({variant:a?"body2":"body1",className:C.subheader,color:"text.secondary",component:"span",display:"block"},m,{children:k}))),(0,p.jsxs)(P,(0,s.Z)({className:(0,l.Z)(C.root,o),as:d,ref:t,ownerState:j},g,{children:[a&&(0,p.jsx)(w,{className:C.avatar,ownerState:j,children:a}),(0,p.jsxs)(N,{className:C.content,ownerState:j,children:[R,k]}),n&&(0,p.jsx)(M,{className:C.action,ownerState:j,children:n})]}))})),k=r(7924);function H(e){return(0,h.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);const S=["className","component"],T=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var _=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiCardContent"}),{className:n,component:a="div"}=r,o=(0,i.Z)(r,S),d=(0,s.Z)({},r,{component:a}),u=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},H,t)})(d);return(0,p.jsx)(T,(0,s.Z)({as:a,className:(0,l.Z)(u.root,n),ownerState:d,ref:t},o))}));const I={"& .MuiCardHeader-action":{mr:0}};var B=(0,a.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:n,children:a,content:s=!0,contentClass:i="",contentSX:l={},darkTitle:c,secondary:d,shadow:x,sx:u={},title:h,...m}=e;const Z=(0,o.Z)();return(0,p.jsxs)(j,{ref:t,...m,sx:{border:r?"1px solid":"none",borderColor:Z.palette.primary[200]+75,":hover":{boxShadow:n?x||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},backgroundColor:"#E5E2FF",...u,".MuiCardContent-root:last-child":{paddingBottom:"12px"}},children:[!c&&h&&(0,p.jsx)(R,{sx:I,title:h,action:d}),c&&h&&(0,p.jsx)(R,{sx:I,title:(0,p.jsx)(f.Z,{variant:"h3",children:h}),action:d}),h&&(0,p.jsx)(k.Z,{}),s&&(0,p.jsx)(_,{sx:l,className:i,children:a}),!s&&a]})}));var A=e=>{let{children:t,...r}=e;return(0,p.jsx)(B,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,p.jsx)(n.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},2828:function(e,t,r){const n=(0,r(7630).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=n},1805:function(e,t,r){r.r(t);var n=r(3504),a=r(3967),o=r(5193),s=r(1889),i=r(3767),l=r(890),c=r(7924),d=r(6513),x=r(2828),u=r(5876),h=r(4904),m=r(3714),Z=(r(9652),r(9021)),p=r(184);t.default=()=>{const e=(0,a.Z)(),t=(0,o.Z)(e.breakpoints.down("md"));return(0,p.jsx)(x.Z,{children:(0,p.jsx)(s.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:(0,p.jsx)(s.ZP,{item:!0,xs:12,children:(0,p.jsx)(s.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,p.jsx)(s.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,p.jsx)(u.Z,{children:(0,p.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,p.jsx)(s.ZP,{item:!0,sx:{mb:3},children:(0,p.jsx)(h.Z,{})}),(0,p.jsx)(s.ZP,{item:!0,xs:12,children:(0,p.jsx)(s.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,p.jsx)(s.ZP,{item:!0,children:(0,p.jsx)(i.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:(0,p.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:(0,p.jsx)(d.cC,{i18nKey:"user.register_lable",children:Z.Z.user.register_lable})})})})})}),(0,p.jsx)(s.ZP,{item:!0,xs:12,children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)(s.ZP,{item:!0,xs:12,children:(0,p.jsx)(c.Z,{})}),(0,p.jsx)(s.ZP,{item:!0,xs:12,children:(0,p.jsx)(s.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,p.jsx)(l.Z,{component:n.rU,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:(0,p.jsx)(d.cC,{i18nKey:"user.register_tosignup",children:Z.Z.user.register_tosignup})})})})]})})})})})})})}}}]);
//# sourceMappingURL=805.3f878a6b.chunk.js.map