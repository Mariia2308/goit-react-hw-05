import{c as l,r as a,j as e}from"./index-C8AUqx6P.js";import{c as m}from"./movies-mJJ1m02I.js";import{c as t}from"./MovieDetail.module-5uuLD94V.js";function x(){const{movieId:c}=l(),[o,r]=a.useState(null);return a.useEffect(()=>{async function s(){const i=await m(c);r(i)}s()},[c]),e.jsxs("div",{children:[e.jsx("h2",{className:t.title,children:"Reviews"}),e.jsx("ul",{children:o!==null&&o.map(({id:s,author:i,content:n})=>e.jsxs("li",{children:[e.jsx("h3",{className:t.author,children:i}),e.jsx("p",{className:t.text,children:n})]},s))})]})}export{x as default};
//# sourceMappingURL=MovieReviews-DXMScniE.js.map