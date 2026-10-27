"use strict";(globalThis.webpackChunkhw_39_react||=[]).push([[260],{44(e,r,n){n.d(r,{z:()=>c});var a=n(43),t=n(820);const o=t.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,s=t.Ay.label`
  font-size: 14px;
  font-weight: 600;
`,i=t.Ay.input`
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
`,l=t.Ay.span`
  font-size: 13px;
  color: var(--danger);
`;var d=n(579);const c=e=>{let{label:r,name:n,type:t="text",value:c,onChange:p,error:x,placeholder:u,autoComplete:h}=e;const m=(0,a.useId)();return(0,d.jsxs)(o,{children:[(0,d.jsx)(s,{htmlFor:m,children:r}),(0,d.jsx)(i,{id:m,name:n,type:t,value:c,onChange:p,placeholder:u,autoComplete:h,"aria-invalid":Boolean(x),$invalid:Boolean(x)}),x&&(0,d.jsx)(l,{role:"alert",children:x})]})}},260(e,r,n){n.r(r),n.d(r,{default:()=>H});var a=n(43),t=n(686),o=n(44),s=n(408),i=n(23),l=n(99),d=n(580);const{selectAll:c,selectById:p,selectTotal:x}=d.tR.getSelectors(e=>e.contacts),u=e=>e.contacts.filter,h=e=>e.contacts.sortOrder,m=e=>e.contacts.isLoading,f=e=>e.contacts.error,v=(0,l.Mz)([c,u,h],(e,r,n)=>{const a=e.filter(e=>e.name.toLowerCase().includes(r.toLowerCase())),t="desc"===n?-1:1;return[...a].sort((e,r)=>e.name.localeCompare(r.name,void 0,{sensitivity:"base"})*t)});var g=n(820);const b=g.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;var y=n(579);const j=/^\+?[\d\s()-]+$/,A=()=>{const[e,r]=(0,a.useState)(""),[n,l]=(0,a.useState)(""),[d,p]=(0,a.useState)({}),x=(0,t.wA)(),u=(0,t.d4)(c);return(0,y.jsxs)(b,{onSubmit:a=>{a.preventDefault();const t=((e,r,n)=>{const a={},t=e.trim(),o=r.trim();if(t?n.some(e=>e.name.trim().toLowerCase()===t.toLowerCase())&&(a.name=`${t} is already in contacts`):a.name="Name is required",o){const e=o.replace(/\D/g,"");(!j.test(o)||e.length<7||e.length>15)&&(a.number="Enter a valid phone, e.g. +380 50 123 45 67")}else a.number="Phone is required";return a})(e,n,u);p(t),Object.keys(t).length>0||(x((0,i.IP)({name:e.trim(),number:n.trim()})),r(""),l(""))},noValidate:!0,children:[(0,y.jsx)(o.z,{label:"Name",name:"name",value:e,onChange:e=>{r(e.target.value),d.name&&p(e=>({...e,name:void 0}))},error:d.name,autoComplete:"off"}),(0,y.jsx)(o.z,{label:"Phone",name:"number",type:"tel",value:n,onChange:e=>{l(e.target.value),d.number&&p(e=>({...e,number:void 0}))},error:d.number,autoComplete:"off",placeholder:"+380 50 123 45 67"}),(0,y.jsx)(s.$,{type:"submit",children:"Add contact"})]})},w=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,C=g.Ay.label`
  font-size: 14px;
  font-weight: 600;
`,k="\n  padding: 11px 14px;\n  font: inherit;\n  color: var(--text);\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n\n  &:focus {\n    outline: none;\n    border-color: var(--primary);\n    box-shadow: 0 0 0 3px var(--primary-soft);\n  }\n",z=g.Ay.input`
  ${k}
`,S=g.Ay.select`
  ${k}
`,F=()=>{const e=(0,t.wA)(),r=(0,a.useId)(),n=(0,a.useId)(),o=(0,t.d4)(u),s=(0,t.d4)(h);return(0,y.jsxs)(w,{children:[(0,y.jsxs)($,{children:[(0,y.jsx)(C,{htmlFor:r,children:"Find contacts by name"}),(0,y.jsx)(z,{id:r,type:"text",value:o,onChange:r=>e((0,d.R6)(r.target.value))})]}),(0,y.jsxs)($,{children:[(0,y.jsx)(C,{htmlFor:n,children:"Sort by name"}),(0,y.jsxs)(S,{id:n,value:s,onChange:r=>e((0,d.HX)(r.target.value)),children:[(0,y.jsx)("option",{value:"asc",children:"A\u2013Z"}),(0,y.jsx)("option",{value:"desc",children:"Z\u2013A"})]})]})]})},I=g.Ay.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
`,L=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,B=g.Ay.span`
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`,D=g.Ay.a`
  color: var(--muted);
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: var(--primary);
  }
`,E=e=>{let{contact:r}=e;const n=(0,t.wA)();return(0,y.jsxs)(I,{children:[(0,y.jsxs)(L,{children:[(0,y.jsx)(B,{children:r.name}),(0,y.jsx)(D,{href:`tel:${r.number}`,children:r.number})]}),(0,y.jsx)(s.$,{variant:"danger",onClick:()=>n((0,i.MO)(r.id)),children:"Delete"})]})};var N=n(455);const O=g.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,P=g.Ay.p`
  padding: 10px 14px;
  font-size: 14px;
  color: ${e=>{let{$error:r}=e;return r?"var(--danger)":"var(--muted)"}};
  background: ${e=>{let{$error:r}=e;return r?"var(--danger-soft)":"transparent"}};
  border-radius: 10px;
`,q=()=>{const e=(0,t.d4)(v),r=(0,t.d4)(x),n=(0,t.d4)(m),a=(0,t.d4)(f);return(0,y.jsxs)(y.Fragment,{children:[n&&(0,y.jsx)(N.a,{}),a&&(0,y.jsxs)(P,{$error:!0,children:["Error: ",a]}),!n&&!a&&0===r&&(0,y.jsx)(P,{children:"Your phonebook is empty. Add the first contact."}),r>0&&0===e.length&&(0,y.jsx)(P,{children:"No contacts match your search."}),(0,y.jsx)(O,{children:e.map(e=>(0,y.jsx)(E,{contact:e},e.id))})]})},M=g.Ay.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,R=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,T=g.Ay.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`,Z=g.Ay.h2`
  font-size: 20px;
`,_=g.Ay.span`
  margin-left: 8px;
  padding: 2px 10px;
  font-size: 14px;
  color: var(--primary);
  background: var(--primary-soft);
  border-radius: 999px;
`;function H(){const e=(0,t.wA)(),r=(0,t.d4)(x);return(0,a.useEffect)(()=>{e((0,i.oe)())},[e]),(0,y.jsxs)(M,{children:[(0,y.jsxs)(R,{children:[(0,y.jsxs)(T,{children:[(0,y.jsx)(Z,{children:"Add contact"}),(0,y.jsx)(A,{})]}),(0,y.jsxs)(T,{children:[(0,y.jsx)(Z,{children:"Search"}),(0,y.jsx)(F,{})]})]}),(0,y.jsxs)(T,{children:[(0,y.jsxs)(Z,{children:["Contacts",(0,y.jsx)(_,{children:r})]}),(0,y.jsx)(q,{})]})]})}}}]);
//# sourceMappingURL=260.7002720e.chunk.js.map