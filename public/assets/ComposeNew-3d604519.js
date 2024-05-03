import{q as v,r as y,a as i,b as w,c as V,d as o,f as t,g as u,F as I}from"./index-c4f39c8f.js";const j={class:"flex align-items-center px-4 md:px-0 border-top-1 surface-border md:border-none pt-4 md:pt-0"},k=o("span",{class:"block text-900 font-bold text-xl"},"Compose Message",-1),B={class:"surface-section grid mt-4 grid-nogutter formgrid p-4 gap-3 md:surface-border md:border-1 border-round"},C={class:"col-12 field"},M=o("label",{for:"to",class:"text-900 font-semibold"},"To",-1),S={class:"col-12 field"},F=o("label",{for:"Subject",class:"text-900 font-semibold"},"Subject",-1),D={class:"col-12 field"},E={class:"col-12 flex column-gap-3 justify-content-end mt-7"},U=Object.assign({inheritAttrs:!1},{__name:"ComposeNew",emits:["new:mail"],setup(N,{emit:p}){const f=p,r=v(),s=y({}),_=()=>{r.push({name:"mail-inbox"})},b=()=>{const n={...s.value,id:g(),sent:!0,archived:!1,trash:!1,spam:!1,starred:!1,important:!1,date:h(),image:"avatar.png"};f("new:mail",n),r.push({name:"mail-inbox"})},g=()=>{let n="",e="0123456789";for(let a=0;a<5;a++)n+=e.charAt(Math.floor(Math.random()*e.length));return n},h=()=>new Date().toDateString().split(" ").slice(1,4).join(" ");return(n,e)=>{const a=i("Button"),d=i("InputIcon"),c=i("InputText"),m=i("IconField"),x=i("Editor");return w(),V(I,null,[o("div",j,[t(a,{type:"button",icon:"pi pi-chevron-left",class:"surface-border text-900 w-3rem h-3rem mr-3",outlined:"",severity:"secondary",onClick:e[0]||(e[0]=l=>_())}),k]),o("div",B,[o("div",C,[M,t(m,{iconPosition:"left",class:"w-full",style:{height:"3.5rem"}},{default:u(()=>[t(d,{class:"pi pi-user",style:{left:"1.5rem"}}),t(c,{id:"to",type:"text",modelValue:s.value.to,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value.to=l),class:"w-full pl-7 text-900 font-semibold",style:{height:"3.5rem"}},null,8,["modelValue"])]),_:1})]),o("div",S,[F,t(m,{iconPosition:"left",class:"w-full",style:{height:"3.5rem"}},{default:u(()=>[t(d,{class:"pi pi-pencil",style:{left:"1.5rem"}}),t(c,{id:"subject",type:"text",modelValue:s.value.title,"onUpdate:modelValue":e[2]||(e[2]=l=>s.value.title=l),placeholder:"Subject",class:"w-full pl-7 text-900 font-semibold",style:{height:"3.5rem"}},null,8,["modelValue"])]),_:1})]),o("div",D,[t(x,{modelValue:s.value.message,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value.message=l),editorStyle:" height: 250px "},null,8,["modelValue"])]),o("div",E,[t(a,{type:"button",class:"h-3rem w-full sm:w-auto",icon:"pi pi-send",label:"Send Message",onClick:e[4]||(e[4]=l=>b())})])])],64)}}});export{U as default};