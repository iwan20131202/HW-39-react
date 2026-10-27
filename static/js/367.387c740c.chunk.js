"use strict";(globalThis.webpackChunkhw_39_react||=[]).push([[367],{44(e,a,r){r.d(a,{z:()=>c});var o=r(43),n=r(820);const t=n.Ay.div`
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
  border: 1px solid ${e=>{let{$invalid:a}=e;return a?"var(--danger)":"var(--border)"}};
  border-radius: 10px;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &::placeholder {
    color: #a3a7c2;
  }

  &:focus {
    outline: none;
    border-color: ${e=>{let{$invalid:a}=e;return a?"var(--danger)":"var(--primary)"}};
    box-shadow: 0 0 0 3px
      ${e=>{let{$invalid:a}=e;return a?"var(--danger-soft)":"var(--primary-soft)"}};
  }
`,i=n.Ay.span`
  font-size: 13px;
  color: var(--danger);
`;var d=r(579);const c=e=>{let{label:a,name:r,type:n="text",value:c,onChange:p,error:m,placeholder:u,autoComplete:x}=e;const h=(0,o.useId)();return(0,d.jsxs)(t,{children:[(0,d.jsx)(l,{htmlFor:h,children:a}),(0,d.jsx)(s,{id:h,name:r,type:n,value:c,onChange:p,placeholder:u,autoComplete:x,"aria-invalid":Boolean(m),$invalid:Boolean(m)}),m&&(0,d.jsx)(i,{role:"alert",children:m})]})}},367(e,a,r){r.r(a),r.d(a,{default:()=>y});var o=r(43),n=r(686),t=r(44),l=r(408),s=r(672),i=r(454),d=r(978),c=r(820);const p=c.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,m=c.Ay.p`
  padding: 10px 14px;
  font-size: 14px;
  color: var(--danger);
  background: var(--danger-soft);
  border-radius: 10px;
`;var u=r(579);const x=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,h=()=>{const e=(0,n.wA)(),a=(0,n.d4)(d.ZB),r=(0,n.d4)(d.H$),[c,h]=(0,o.useState)({name:"",email:"",password:""}),[g,v]=(0,o.useState)({});(0,o.useEffect)(()=>{e((0,i.I)())},[e]);const f=r=>{const{name:o,value:n}=r.target;h(e=>({...e,[o]:n})),g[o]&&v(e=>({...e,[o]:void 0})),a&&e((0,i.I)())};return(0,u.jsxs)(p,{onSubmit:a=>{a.preventDefault();const r=(e=>{let{name:a,email:r,password:o}=e;const n={};return a.trim()||(n.name="Name is required"),r.trim()?x.test(r.trim())||(n.email="Enter a valid email, e.g. mango@mail.com"):n.email="Email is required",o?o.length<7&&(n.password="Password must be at least 7 characters"):n.password="Password is required",n})(c);v(r),Object.keys(r).length>0||e((0,s.kz)({name:c.name.trim(),email:c.email.trim(),password:c.password}))},noValidate:!0,children:[(0,u.jsx)(t.z,{label:"Name",name:"name",value:c.name,onChange:f,error:g.name,autoComplete:"name",placeholder:"Adrian Cross"}),(0,u.jsx)(t.z,{label:"Email",name:"email",type:"email",value:c.email,onChange:f,error:g.email,autoComplete:"email",placeholder:"mango@mail.com"}),(0,u.jsx)(t.z,{label:"Password",name:"password",type:"password",value:c.password,onChange:f,error:g.password,autoComplete:"new-password",placeholder:"At least 7 characters"}),a&&(0,u.jsx)(m,{role:"alert",children:a}),(0,u.jsx)(l.$,{type:"submit",disabled:r,children:r?"Creating account...":"Register"})]})};var g=r(475);const v=c.Ay.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 440px;
  margin: 24px auto 0;
  padding: 32px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`,f=c.Ay.h1`
  font-size: 26px;
`,b=c.Ay.p`
  font-size: 14px;
  color: var(--muted);
  text-align: center;
`,w=(0,c.Ay)(g.N_)`
  font-weight: 600;
  color: var(--primary);
`;function y(){return(0,u.jsxs)(v,{children:[(0,u.jsx)(f,{children:"Create account"}),(0,u.jsx)(h,{}),(0,u.jsxs)(b,{children:["Already registered? ",(0,u.jsx)(w,{to:"/login",children:"Log in"})]})]})}}}]);
//# sourceMappingURL=367.387c740c.chunk.js.map