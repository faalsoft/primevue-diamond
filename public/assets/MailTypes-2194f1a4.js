import{q as P,r as m,o as j,J as K,K as W,a as r,m as z,b as u,v as b,g as a,f as s,d as i,c as R,j as $,k as B,t as k,p as w,L as H}from"./index-c4f39c8f.js";const J={class:"flex -ml-2"},G=i("div",null,null,-1),Q={key:0,class:"w-4rem"},X=["onClick"],Y={key:1,class:"w-4rem"},Z=["onClick"],ee=["onClick"],te=["onClick"],oe={style:{minWidth:"10rem"}},ne={class:"flex justify-content-end w-full px-0"},se={ref:"actionRef",class:"action-buttons",style:{display:"none"}},ie={__name:"MailTypes",props:{mails:{type:Array}},emits:["spam","archive","trash","change:mail:type","reply"],setup(S,{emit:E}){const d=E,D=P(),g=m(null),x=m(null),c=m([]),L=m([{label:"Archive",icon:"pi pi-file",command:()=>y("archive")},{label:"Spam",icon:"pi pi-ban",command:()=>y("spam")},{label:"Delete",icon:"pi pi-trash",command:()=>y("trash")}]),v=m({global:{value:null,matchMode:H.CONTAINS}});j(()=>{f("addEventListener")}),K(async()=>{await f("removeEventListener"),await f("addEventListener")}),W(()=>{f("addEventListener")});const f=o=>{[...x.value.$el.querySelectorAll("tbody > tr")].forEach(n=>{n[o]("mouseenter",l=>C(l,n)),n[o]("mouseleave",l=>C(l,n))})},C=(o,t)=>{const n=t.querySelector(".action-buttons"),l=t.querySelector(".date-text");!n||!l||(o.type==="mouseenter"?(n.style.display="flex",l.style.display="none"):(n.style.display="none",l.style.display="flex"))},y=o=>{if(c.value.length!==0){for(const t of c.value)A(t);d(o,c.value),c.value=[]}},M=(o,t)=>{A(t),d(o,t),c.value=[]},T=(o,t)=>{d("change:mail:type",o,t,!t[o])},N=o=>{d("reply",o)},h=o=>{D.push({name:"mail-detail",params:{id:o}})},A=o=>{Object.keys(o).forEach(t=>{o[t]===!0&&(o[t]=!1)})};return(o,t)=>{const n=r("Column"),l=r("Button"),V=r("Menu"),I=r("Avatar"),F=r("InputIcon"),U=r("InputText"),q=r("IconField"),O=r("DataTable"),_=z("tooltip");return u(),b(O,{ref_key:"mailTable",ref:x,value:S.mails,selection:c.value,"onUpdate:selection":t[2]||(t[2]=e=>c.value=e),filters:v.value,"onUpdate:filters":t[3]||(t[3]=e=>v.value=e),rows:10,paginator:"",rowsPerPageOptions:[10,20,30],dataKey:"id",rowHover:"",globalFilterFields:["from","to","title","message"]},{default:a(()=>[s(n,{selectionMode:"multiple",style:{width:"4rem"}}),s(n,{style:{width:"8rem"}},{header:a(()=>[i("div",J,[s(l,{type:"button",icon:"pi pi-refresh",text:"",plain:"",rounded:""}),s(l,{type:"button",icon:"pi pi-ellipsis-v",class:"ml-3",text:"",plain:"",rounded:"",onClick:t[0]||(t[0]=e=>g.value.toggle(e))}),s(V,{ref_key:"menuRef",ref:g,popup:"",model:L.value,class:"w-8rem"},null,8,["model"])]),G]),body:a(({data:e})=>[!e.trash&&!e.spam?(u(),R("td",Q,[i("span",{class:"cursor-pointer",onClick:p=>T("starred",e)},[i("i",{class:$(["pi pi-fw text-xl",{"pi-star-fill":e.starred,"pi-star":!e.starred}])},null,2)],8,X)])):B("",!0),!e.trash&&!e.spam?(u(),R("td",Y,[i("span",{class:"cursor-pointer ml-3",onClick:p=>T("important",e)},[i("i",{class:$(["pi pi-fw text-xl",{"pi-bookmark-fill":e.important,"pi-bookmark":!e.important}])},null,2)],8,Z)])):B("",!0)]),_:1}),s(n,{style:{"min-width":"4rem"}},{body:a(({data:e})=>[e.image?(u(),b(I,{key:1,onClick:p=>h(e.id),id:e.id,image:`/demo/images/avatar/${e.image?e.image:".png"}`,class:"cursor-pointer"},null,8,["onClick","id","image"])):(u(),b(I,{key:0,icon:"pi pi-user",shape:"circle"}))]),_:1}),s(n,{style:{"min-width":"4rem"}},{body:a(({data:e})=>[i("div",{onClick:p=>h(e.id),style:{minWidth:"12rem"},class:"text-900 font-semibold cursor-pointer"},k(e.from||e.to),9,ee)]),_:1}),s(n,{style:{"min-width":"30rem"}},{body:a(({data:e})=>[i("span",{onClick:p=>h(e.id),class:"font-medium white-space-nowrap overflow-hidden text-overflow-ellipsis block cursor-pointer",style:{"max-width":"30rem"}},k(e.title),9,te)]),_:1}),s(n,{field:"date"},{header:a(()=>[s(q,{iconPosition:"left",class:"w-full"},{default:a(()=>[s(F,{class:"pi pi-search"}),s(U,{type:"text",placeholder:"Search Mail",class:"w-full sm:w-auto",modelValue:v.value.global.value,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value.global.value=e)},null,8,["modelValue"])]),_:1})]),body:a(({data:e})=>[i("div",oe,[i("div",ne,[i("span",{ref:"dateRef",class:"date-text text-700 font-semibold white-space-nowrap"},k(e.date),513),i("div",se,[w(s(l,{onClick:p=>M("archive",e),type:"button",icon:"pi pi-inbox",class:"h-2rem w-2rem mr-2"},null,8,["onClick"]),[[_,"Archive",void 0,{top:!0}]]),w(s(l,{onClick:p=>N(e),type:"button",icon:"pi pi-reply",class:"h-2rem w-2rem mr-2",severity:"secondary"},null,8,["onClick"]),[[_,"Reply",void 0,{top:!0}]]),w(s(l,{onClick:p=>M("trash",e),type:"button",icon:"pi pi-trash",class:"h-2rem w-2rem",severity:"danger"},null,8,["onClick"]),[[_,"Trash",void 0,{top:!0}]])],512)])])]),_:1})]),_:1},8,["value","selection","filters"])}}};export{ie as default};