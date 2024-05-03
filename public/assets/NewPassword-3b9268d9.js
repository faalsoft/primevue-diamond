import{_ as p}from"./logo-dark-5e4d63be.js";import{q as u,a as o,b as m,c as f,d as e,f as s,g as r,h as t,F as _,S as w}from"./index-c4f39c8f.js";const h={class:"flex h-screen"},g={class:"w-full lg:w-4 h-full text-center px-6 py-6 flex flex-column justify-content-between"},x=e("img",{src:p,class:"h-4rem mt-4",alt:"diamond-layout"},null,-1),b={class:"flex flex-column align-items-center gap-4"},y=e("div",{class:"mb-3"},[e("h2",null,"Create a new password"),e("p",null,"Lorem ipsum dolor sit amet")],-1),k={class:"flex flex-column gap-4"},C={class:"flex flex-wrap gap-2 justify-content-between"},v=e("div",{class:"w-8 hidden lg:flex flex-column justify-content-between align-items-center px-6 py-6 bg-cover bg-norepeat",style:{"background-image":"url('/demo/images/auth/bg-login.jpg')"}},[e("div",{class:"mt-auto mb-auto"},[e("span",{class:"block text-white text-7xl font-semibold"},[t("Change your"),e("br"),t("Password")]),e("span",{class:"block text-white text-3xl mt-4"},[t("Lorem ipsum dolor sit amet, consectetur"),e("br"),t(" adipiscing elit. Donec posuere velit nec enim"),e("br"),t(" sodales, nec placerat erat tincidunt. ")])])],-1),j={__name:"NewPassword",setup(I){const d=u(),l=()=>{d.push({name:"e-commerce"})};return(P,B)=>{const a=o("InputIcon"),n=o("Password"),c=o("IconField"),i=o("Button");return m(),f(_,null,[e("div",h,[e("div",g,[x,e("div",b,[y,e("div",k,[s(c,{iconPosition:"left",class:"w-full"},{default:r(()=>[s(a,{class:"pi pi-lock z-2"}),s(n,{id:"password",placeholder:"Password",styleClass:"w-full",inputStyle:{paddingLeft:"2.5rem"},inputClass:"w-full md:w-25rem ",toggleMask:"",showIcon:"pi pi-eye"})]),_:1}),s(c,{iconPosition:"left",class:"w-full"},{default:r(()=>[s(a,{class:"pi pi-lock z-2"}),s(n,{id:"password",placeholder:"Repeat Password",styleClass:"w-full",inputStyle:{paddingLeft:"2.5rem"},inputClass:"w-full md:w-25rem",toggleMask:"",feedback:!1,showIcon:"pi pi-eye"})]),_:1}),e("div",C,[s(i,{label:"CANCEL",class:"flex-auto",outlined:"",onClick:l}),s(i,{label:"SUBMIT",class:"flex-auto",onClick:l})])])]),e("p",{class:"text-color-secondary font-semibold"},[t("A problem? "),e("a",{href:"#",class:"primary-color",onClick:l},"Click here"),t(" and let us help you.")])]),v]),s(w,{simple:""})],64)}}};export{j as default};