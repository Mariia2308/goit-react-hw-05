import{a as n,r as m,j as s}from"./index-CrQmsTPE.js";import{d}from"./movies-mJJ1m02I.js";import{c as a}from"./MovieDetail.module-5uuLD94V.js";function p(){const{movieId:c}=n(),[r,o]=m.useState(null);return m.useEffect(()=>{async function e(){const t=await d(c);o(t)}e()},[c]),s.jsx("div",{children:r&&s.jsx("ul",{className:a.castlist,children:r.map(({name:e,id:t,profile_path:i,character:l})=>s.jsx("li",{children:s.jsxs("div",{className:a.card,children:[s.jsx("img",{className:a.img,src:i?`https://image.tmdb.org/t/p/w200//${i}`:"",alt:e}),s.jsx("h4",{className:a.name,children:e}),s.jsxs("p",{className:a.character,children:[s.jsx("span",{className:a["character-title"],children:"Character: "}),l]})]})},t))})})}export{p as default};
//# sourceMappingURL=MovieCast-XZbR6li5.js.map
