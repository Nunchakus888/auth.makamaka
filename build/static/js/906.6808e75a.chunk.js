"use strict";(self.webpackChunkauth_makamaka_io=self.webpackChunkauth_makamaka_io||[]).push([[906],{4387:function(e,t,n){n(2791);t.Z=n.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5177:function(e,t,n){var r=n(2791);t.Z=()=>{const e=(0,r.useRef)(!0);return(0,r.useEffect)((()=>()=>{e.current=!1}),[]),e}},4904:function(e,t,n){var r=n(3504),i=n(3197),s=n(3701),a=n(4554),l=(n(2791),n(9381)),o=n(184);t.Z=e=>{const t=l.sj?l.yR:l.Oo,n=l.sj?"100px":"200px";return(0,o.jsx)(s.Z,{disableRipple:!0,component:r.rU,to:i.Z.defaultPath,children:(0,o.jsx)(a.Z,{sx:{display:"flex",gap:"5px",alignItems:"center"},children:(0,o.jsx)("img",{src:t,style:{width:n}})})})}},8714:function(e,t,n){var r=n(2791),i=n(8258),s=n(6760),a=n(184);const l=(0,r.forwardRef)(((e,t)=>{var n,r;let l,o,{children:c,type:d,direction:h,offset:u,scale:m}=e;switch(h){case"up":case"left":l=u,o=0;break;default:l=0,o=u}const[x,p]=(0,i.n)(l,o),[j,Z]=(0,i.n)(l,o);switch(d){case"rotate":return(0,a.jsx)(s.E.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:c});case"slide":return"up"===h||"down"===h?(0,a.jsx)(s.E.div,{ref:t,animate:{y:void 0!==j?j:""},onHoverEnd:()=>Z(),onHoverStart:()=>Z(),children:c}):(0,a.jsx)(s.E.div,{ref:t,animate:{x:void 0!==x?x:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:c});default:return"number"===typeof m&&(m={hover:m,tap:m}),(0,a.jsx)(s.E.div,{ref:t,whileHover:{scale:null===(n=m)||void 0===n?void 0:n.hover},whileTap:{scale:null===(r=m)||void 0===r?void 0:r.tap},children:c})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.Z=l},7453:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(4554),i=n(2791),s=n(3967),a=n(7621),l=n(9585),o=n(890),c=n(7924),d=n(9504),h=n(184);const u={"& .MuiCardHeader-action":{mr:0}};var m=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:r,children:i,content:m=!0,contentClass:x="",contentSX:p={},darkTitle:j,secondary:Z,shadow:f,sx:v={},title:g,...b}=e;const y=(0,s.Z)();return(0,h.jsxs)(a.Z,{ref:t,...b,sx:{border:n?"1px solid":"none",borderColor:y.palette.primary[200]+75,":hover":{boxShadow:r?f||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},backgroundColor:"#E5E2FF",...v,".MuiCardContent-root:last-child":{paddingBottom:"12px"}},children:[!j&&g&&(0,h.jsx)(l.Z,{sx:u,title:g,action:Z}),j&&g&&(0,h.jsx)(l.Z,{sx:u,title:(0,h.jsx)(o.Z,{variant:"h3",children:g}),action:Z}),g&&(0,h.jsx)(c.Z,{}),m&&(0,h.jsx)(d.Z,{sx:p,className:x,children:i}),!m&&i]})}));var x=e=>{let{children:t,...n}=e;return(0,h.jsx)(m,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,children:(0,h.jsx)(r.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},2828:function(e,t,n){const r=(0,n(7630).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=r},5906:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(3504),i=n(3967),s=n(5193),a=n(1889),l=n(3767),o=n(890),c=n(7924),d=n(2828),h=n(7453),u=n(2791),m=n(9434),x=n(8096),p=n(4925),j=n(635),Z=n(7071),f=n(4554),v=n(6151),g=n(1724),b=n(5705),y=n(5177),w=n(8714),P=n(8124),C=(n(4387),n(1731)),S=n(184);var k=e=>{let{...t}=e;const n=(0,i.Z)(),r=(0,y.Z)(),[a,l]=((0,s.Z)(n.breakpoints.down("md")),(0,m.v9)((e=>e.customization)),(0,u.useState)(!0)),o=(0,C.Z)(),[c,d]=(0,u.useState)(!1);return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(b.J9,{initialValues:{email:"",submit:null},validationSchema:g.Ry().shape({email:g.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:async(e,t)=>{let{setErrors:n,setStatus:i,setSubmitting:s}=t;const{code:a,info:l,msg:c}=await P.M2(e).catch((e=>e));0===a?location.replace("/checking"):o(c||"\u9a8c\u8bc1\u5931\u8d25",{variant:"warning"});try{r.current&&(i({success:!0}),s(!1))}catch(d){console.error(d),r.current&&(i({success:!1}),n({submit:d.message}),s(!1))}},children:e=>{let{errors:r,handleBlur:i,handleChange:s,handleSubmit:a,isSubmitting:l,touched:o,values:c}=e;return(0,S.jsxs)("form",{noValidate:!0,onSubmit:a,...t,children:[(0,S.jsxs)(x.Z,{fullWidth:!0,error:Boolean(o.email&&r.email),sx:{...n.typography.customInput},children:[(0,S.jsx)(p.Z,{htmlFor:"outlined-adornment-email-Reset",children:"Email Address"}),(0,S.jsx)(j.Z,{id:"outlined-adornment-email-Reset",type:"email",value:c.email,name:"email",onBlur:i,onChange:s,label:"Email Address",inputProps:{}}),o.email&&r.email&&(0,S.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-email-Reset",children:r.email})]}),r.submit&&(0,S.jsx)(f.Z,{sx:{mt:3},children:(0,S.jsx)(Z.Z,{error:!0,children:r.submit})}),(0,S.jsx)(f.Z,{sx:{mt:2},children:(0,S.jsx)(w.Z,{children:(0,S.jsx)(v.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Submit"})})})]})}})})},E=n(4904);n(9652);var R=()=>{const e=(0,i.Z)(),t=(0,s.Z)(e.breakpoints.down("md"));return(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,S.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,S.jsx)(h.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,S.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,S.jsx)(r.rU,{to:"#",children:(0,S.jsx)(E.Z,{})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(a.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,S.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset Password"}),(0,S.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Please enter your email. We will send an email to reset your password."})]})})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(k,{})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{})})]})})})})})})})}}}]);
//# sourceMappingURL=906.6808e75a.chunk.js.map