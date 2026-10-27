"use strict";(globalThis.webpackChunkhw_39_react||=[]).push([[844],{44(e,r,a){a.d(r,{z:()=>p});var o=a(43),n=a(820);const t=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,l=n.Ay.label`
  font-size: 14px;
  font-weight: 600;
`,s=n.Ay.input`
  padding: 11px 14px;
  font: inherit;
  color: var(--text);
  background: #fff;
  border: 1px solid ${e=>{let{$invalid:r}=e;return r?"var(--danger)":"var(--border)"}};
  border-radius: 10px;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &::placeholder {
    color: #a3a7c2;
  }

  &:focus {
    outline: none;
    border-color: ${e=>{let{$invalid:r}=e;return r?"var(--danger)":"var(--primary)"}};
    box-shadow: 0 0 0 3px
      ${e=>{let{$invalid:r}=e;return r?"var(--danger-soft)":"var(--primary-soft)"}};
  }
`,i=n.Ay.span`
  font-size: 13px;
  color: var(--danger);
`;var d=a(579);const p=e=>{let{label:r,name:a,type:n="text",value:p,onChange:c,error:u,placeholder:x,autoComplete:m}=e;const h=(0,o.useId)();return(0,d.jsxs)(t,{children:[(0,d.jsx)(l,{htmlFor:h,children:r}),(0,d.jsx)(s,{id:h,name:a,type:n,value:p,onChange:c,placeholder:x,autoComplete:m,"aria-invalid":Boolean(u),$invalid:Boolean(u)}),u&&(0,d.jsx)(i,{role:"alert",children:u})]})}},844(e,r,a){a.r(r),a.d(r,{default:()=>y});var o=a(43),n=a(686),t=a(44),l=a(408),s=a(672),i=a(454),d=a(978),p=a(820);const c=p.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u=p.Ay.p`
  padding: 10px 14px;
  font-size: 14px;
  color: var(--danger);
  background: var(--danger-soft);
  border-radius: 10px;
`;var x=a(579);const m=()=>{const e=(0,n.wA)(),r=(0,n.d4)(d.ZB),a=(0,n.d4)(d.H$),[p,m]=(0,o.useState)({email:"",password:""}),[h,v]=(0,o.useState)({});(0,o.useEffect)(()=>{e((0,i.I)())},[e]);const g=a=>{const{name:o,value:n}=a.target;m(e=>({...e,[o]:n})),h[o]&&v(e=>({...e,[o]:void 0})),r&&e((0,i.I)())};return(0,x.jsxs)(c,{onSubmit:r=>{r.preventDefault();const a=(e=>{let{email:r,password:a}=e;const o={};return r.trim()||(o.email="Email is required"),a||(o.password="Password is required"),o})(p);v(a),Object.keys(a).length>0||e((0,s.E8)({email:p.email.trim(),password:p.password}))},noValidate:!0,children:[(0,x.jsx)(t.z,{label:"Email",name:"email",type:"email",value:p.email,onChange:g,error:h.email,autoComplete:"email",placeholder:"mango@mail.com"}),(0,x.jsx)(t.z,{label:"Password",name:"password",type:"password",value:p.password,onChange:g,error:h.password,autoComplete:"current-password"}),r&&(0,x.jsx)(u,{role:"alert",children:r}),(0,x.jsx)(l.$,{type:"submit",disabled:a,children:a?"Signing in...":"Log In"})]})};var h=a(475);const v=p.Ay.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 440px;
  margin: 24px auto 0;
  padding: 32px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`,g=p.Ay.h1`
  font-size: 26px;
`,f=p.Ay.p`
  font-size: 14px;
  color: var(--muted);
  text-align: center;
`,b=(0,p.Ay)(h.N_)`
  font-weight: 600;
  color: var(--primary);
`;function y(){return(0,x.jsxs)(v,{children:[(0,x.jsx)(g,{children:"Welcome back"}),(0,x.jsx)(m,{}),(0,x.jsxs)(f,{children:["No account yet? ",(0,x.jsx)(b,{to:"/register",children:"Register"})]})]})}}}]);
//# sourceMappingURL=844.746939be.chunk.js.map