import{P as f}from"./ProductService-74c45874.js";import{r as n,o as k,a as i,b as O,c as V,d as e,f as t,g as c,t as r,h as w}from"./index-c4f39c8f.js";class C{getImages(){return fetch("/demo/data/photos.json",{headers:{"Cache-Control":"no-cache"}}).then(o=>o.json()).then(o=>o.data)}}const I={class:"grid p-fluid"},T={class:"col-12"},B={class:"card"},j=e("h5",null,"Carousel",-1),N={class:"border-round m-2 text-center p-2",style:{border:"1px solid var(--surface-d)"}},G={class:"my-5"},K=["src","alt"],M={class:"mb-1"},P={class:"mt-0 mb-3"},R={class:"my-5"},D={class:"col-12"},E={class:"card"},F=e("h5",null,"Image",-1),L={class:"flex justify-content-center"},U={class:"col-12"},W={class:"card"},$=e("h5",null,"Galleria",-1),q=["src","alt"],z=["src","alt"],J={__name:"Media",setup(m){const o=n([]),d=n([]),u=n([{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]),_=n([{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]),p=new f,h=new C;k(()=>{p.getProductsSmall().then(a=>o.value=a),h.getImages().then(a=>d.value=a)});const v=a=>({OUTOFSTOCK:"danger",LOWSTOCK:"warning",INSTOCK:"success"})[a];return(a,g)=>{const b=i("Tag"),l=i("Button"),S=i("Carousel"),y=i("Image"),x=i("Galleria");return O(),V("div",I,[e("div",T,[e("div",B,[j,t(S,{value:o.value,numVisible:3,numScroll:3,circular:!1,responsiveOptions:_.value},{item:c(s=>[e("div",N,[e("div",G,[e("img",{src:"/demo/images/product/"+s.data.image,alt:s.name,class:"shadow-4",style:{width:"50%"}},null,8,K)]),e("div",null,[e("h5",M,r(s.data.name),1),e("h6",P,"$"+r(s.data.price),1),t(b,{severity:v(s.data.inventoryStatus)},{default:c(()=>[w(r(s.data.inventoryStatus),1)]),_:2},1032,["severity"]),e("div",R,[t(l,{icon:"pi pi-search",class:"mr-2",rounded:""}),t(l,{icon:"pi pi-star-fill",class:"mr-2",severity:"success",rounded:""}),t(l,{icon:"pi pi-cog",severity:"info",rounded:""})])])])]),_:1},8,["value","responsiveOptions"])])]),e("div",D,[e("div",E,[F,e("div",L,[t(y,{src:"/demo/images/galleria/galleria11.jpg",alt:"Image",width:"250",preview:""},null,8,["src"])])])]),e("div",U,[e("div",W,[$,t(x,{value:d.value,responsiveOptions:u.value,numVisible:7,circular:!0,containerStyle:"max-width: 800px; margin: auto"},{item:c(s=>[e("img",{src:s.item.itemImageSrc,alt:s.item.alt,style:{width:"100%",display:"block"}},null,8,q)]),thumbnail:c(s=>[e("img",{src:s.item.thumbnailImageSrc,alt:s.item.alt,tyle:"width: 100%; display: block;"},null,8,z)]),_:1},8,["value","responsiveOptions"])])])])}}};export{J as default};