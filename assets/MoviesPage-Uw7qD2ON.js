import{r as s,j as e,u as v,L as y}from"./index-C8AUqx6P.js";import{a as g}from"./movies-mJJ1m02I.js";import{M as j}from"./MovieList-Cm1I-VVn.js";import{E}from"./Error-CUKj9aNL.js";const M=({onSearch:i})=>{const[o,t]=s.useState(""),n=a=>{a.preventDefault(),i(o.trim().toLowerCase()),t("")},c=a=>{t(a.target.value)};return e.jsx("div",{children:e.jsxs("form",{onSubmit:n,children:[e.jsx("input",{type:"text",value:o,onChange:c,autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),e.jsx("button",{type:"submit",children:"Search"})]})})},L=()=>e.jsx("p",{children:"There are no results."}),A=()=>{const[i,o]=v(),t=i.get("query"),[n,c]=s.useState([]),[a,l]=s.useState(!1),[p,u]=s.useState(!1),[x,m]=s.useState(""),[S,h]=s.useState(!1);s.useEffect(()=>{if(!t)return;(async()=>{try{h(!1),l(!0),u(!1);const r=await g(t);console.log("Movies Data:",r),Array.isArray(r)?r.length===0?(h(!0),c([])):c(r):(u(!0),m("Unexpected response structure."))}catch(r){u(!0),m(r.message||"An error occurred while fetching movies.")}finally{l(!1)}})()},[t]);const d=f=>{o({query:f})};return e.jsxs(e.Fragment,{children:[e.jsx(M,{onSearch:d}),p&&e.jsx(E,{errorName:x}),a&&e.jsx(y,{}),n.length>0&&e.jsx(j,{movies:n}),S&&e.jsx(L,{})]})};export{A as default};
//# sourceMappingURL=MoviesPage-Uw7qD2ON.js.map
