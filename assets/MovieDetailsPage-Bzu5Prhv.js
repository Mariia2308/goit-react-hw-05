import{j as s,L as i,a as o,r,O as d}from"./index-D4NPjm9_.js";import{b as m}from"./movies-mJJ1m02I.js";import{c as t}from"./MovieDetail.module-5uuLD94V.js";function p({movieDetails:e}){return s.jsx("div",{children:e&&s.jsxs("div",{className:t.card,children:[s.jsx("h2",{className:t.title,children:e.title}),s.jsx("img",{className:t.img,src:e.poster_path?`https://image.tmdb.org/t/p/w300/${e.poster_path}`:"",alt:e.original_title}),s.jsx("p",{className:t.overview,children:e.overview}),s.jsxs("p",{className:t.genres,children:["Genres: ",e.genres.map(a=>a.name).join(", ")]}),s.jsxs("div",{className:t.links,children:[s.jsx(i,{className:t.link,to:"cast",children:"Cast"}),s.jsx(i,{className:t.link,to:"reviews",children:"Review"})]})]},e.id)})}function u(){const{movieId:e}=o(),[a,n]=r.useState(null);return r.useEffect(()=>{async function c(){const l=await m(e);n(l)}c()},[e]),s.jsxs("div",{children:[s.jsx(p,{movieDetails:a}),s.jsx(d,{})]})}export{u as default};
//# sourceMappingURL=MovieDetailsPage-Bzu5Prhv.js.map