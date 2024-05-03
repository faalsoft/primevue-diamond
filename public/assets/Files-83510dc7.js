import{_ as G,r as n,a as m,b as d,c,F as j,e as k,d as e,f as a,g as v,i as X,t as h,j as g,k as R,A as Y,B as K}from"./index-c4f39c8f.js";class O{getFiles(){return fetch("/demo/data/file-management.json",{headers:{"Cache-Control":"no-cache"}}).then(l=>l.json()).then(l=>l.files)}getMetrics(){return fetch("/demo/data/file-management.json",{headers:{"Cache-Control":"no-cache"}}).then(l=>l.json()).then(l=>l.metrics)}getFoldersSmall(){return fetch("/demo/data/file-management.json",{headers:{"Cache-Control":"no-cache"}}).then(l=>l.json()).then(l=>l.folders_small)}getFoldersLarge(){return fetch("/demo/data/file-management.json",{headers:{"Cache-Control":"no-cache"}}).then(l=>l.json()).then(l=>l.folders_large)}}const b=f=>(Y("data-v-852d0330"),f=f(),K(),f),$={class:"grid"},q={class:"card h-full"},H={class:"flex align-items-center justify-content-between mb-3"},J={class:"text-900 text-xl font-semibold"},Q={class:"flex align-item-center justify-content-between"},Z={class:"text-900 mt-3 text-md font-medium"},ee={class:"text-900 mt-3 text-md font-medium"},te={class:"col-12 md:col-5 xl:col-3"},se={class:"card"},le=b(()=>e("div",{class:"text-900 text-xl font-semibold mb-3"},"Account Storage",-1)),oe={class:"flex flex-row justify-content-center",style:{height:"200px"}},ae={class:"mt-5 flex gap-3"},ne=X('<div class="card" data-v-852d0330><div class="text-900 text-xl font-semibold mb-3" data-v-852d0330>Categories</div><ul class="list-none p-0 m-0" data-v-852d0330><li class="p-3 mb-3 flex align-items-center justify-content-between cursor-pointer border-round bg-indigo-50 text-indigo-900" data-v-852d0330><div class="flex align-items-center" data-v-852d0330><i class="pi pi-image text-2xl mr-3" data-v-852d0330></i><span class="ext-lg font-medium" data-v-852d0330>Images</span></div><span class="text-lg font-bold" data-v-852d0330>85</span></li><li class="p-3 mb-3 flex align-items-center justify-content-between cursor-pointer border-round bg-purple-50 text-purple-900" data-v-852d0330><div class="flex align-items-center" data-v-852d0330><i class="pi pi-file text-2xl mr-3" data-v-852d0330></i><span class="ext-lg font-medium" data-v-852d0330>Documents</span></div><span class="text-lg font-bold" data-v-852d0330>231</span></li><li class="p-3 flex align-items-center justify-content-between cursor-pointer border-round bg-teal-50 text-teal-900" data-v-852d0330><div class="flex align-items-center" data-v-852d0330><i class="pi pi-video text-2xl mr-3" data-v-852d0330></i><span class="ext-lg font-medium" data-v-852d0330>Videos</span></div><span class="text-lg font-bold" data-v-852d0330>40</span></li></ul></div>',1),ie={class:"card p-0"},de={class:"card"},ce={key:0,class:"w-full py-3",style:{cursor:"copy"}},re={class:"remove-file-wrapper h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto",style:{padding:"1px"}},ue=["src","alt"],pe=b(()=>e("div",{class:"h-full flex flex-column justify-content-center align-items-center"},[e("i",{class:"pi pi-upload text-900 text-2xl mb-3"}),e("span",{class:"font-bold text-900 text-xl mb-3"},"Upload Files"),e("span",{class:"font-medium text-600 text-md text-center"},"Drop or select files")],-1)),me=[pe],he={class:"col-12 md:col-7 xl:col-9"},fe={class:"card"},_e=b(()=>e("div",{class:"text-900 text-xl font-semibold mb-3"},"Folders",-1)),ve={class:"grid"},xe={class:"p-3 border-1 surface-border flex align-items-center justify-content-between hover:surface-100 cursor-pointer border-round"},ge={class:"flex align-items-center"},be={class:"text-900 text-lg font-medium"},ye={class:"text-600 text-lg font-semibold"},Ce={class:"card"},we=b(()=>e("div",{class:"text-900 text-xl font-semibold mb-3"},"Recent Uploads",-1)),Fe={class:"flex align-items-center"},Se={class:"text-center"},je={__name:"Files",setup(f){const l=n([]),V=n([]),z=n([]),B=n([]),U=n({}),D=n({}),T=n([{label:"View",icon:"pi pi-search"},{label:"Refresh",icon:"pi pi-refresh"}]),I=n(null),M=n(null),p=n([]),y=new O;y.getFiles().then(s=>V.value=s),y.getMetrics().then(s=>l.value=s),y.getFoldersLarge().then(s=>z.value=s);const _=getComputedStyle(document.documentElement),P=_.getPropertyValue("--text-color");D.value=[{beforeDraw:function(s){let o=s.ctx,i=s.width,x=s.height,C=1.5,w=o.fillStyle;o.restore(),o.font=C+"rem sans-serif",o.textBaseline="middle";let r="Free Space",F="50GB / 80GB",t=Math.round((i-o.measureText(r).width)/2),u=(x+s.chartArea.top)/2.25,S=Math.round((i-o.measureText(r).width)/2.1),E=(x+s.chartArea.top)/1.75;o.fillStyle=s.config.data.datasets[0].backgroundColor[0],o.fillText(r,t,u),o.fillText(F,S,E),o.fillStyle=w,o.save()}}],B.value={datasets:[{data:[300,100],backgroundColor:[_.getPropertyValue("--primary-600"),_.getPropertyValue("--primary-100")],hoverBackgroundColor:[_.getPropertyValue("--primary-700"),_.getPropertyValue("--primary-200")],borderColor:"transparent",fill:!0}]},U.value={animation:{duration:0},responsive:!0,maintainAspectRatio:!1,cutout:"90%",plugins:{legend:{labels:{color:P}}}};const A=(s,o)=>{I.value[o].toggle(s)},N=()=>{M.value.choose()},L=s=>{p.value=s.files},W=s=>{p.value=p.value.filter(o=>o.name!==s.name)};return(s,o)=>{const i=m("Button"),x=m("Menu"),C=m("Chart"),w=m("FileUpload"),r=m("Column"),F=m("DataTable");return d(),c("div",$,[(d(!0),c(j,null,k(l.value,(t,u)=>(d(),c("div",{key:u,class:"col-12 md:col-6 lg:col-3"},[e("div",q,[e("div",H,[e("span",J,h(t.title),1),e("div",null,[a(i,{size:"small",onClick:S=>A(S,u),icon:t.icon,text:"",rounded:""},null,8,["onClick","icon"]),a(x,{ref_for:!0,ref_key:"menuRef",ref:I,popup:"",model:T.value},null,8,["model"])])]),e("div",null,[e("div",{class:g(["border-round",t.color]),style:{height:"6px"}},[e("div",{class:g(["h-full border-round",t.fieldColor]),style:{width:"34%"}},null,2)],2),e("div",Q,[e("span",Z,h(t.files),1),e("span",ee,h(t.fileSize),1)])])])]))),128)),e("div",te,[e("div",se,[le,e("div",oe,[a(C,{type:"doughnut",plugins:D.value,data:B.value,options:U.value},null,8,["plugins","data","options"])]),e("div",ae,[a(i,{icon:"pi pi-search",class:"flex-1",label:"Details",outlined:""}),a(i,{icon:"pi pi-upload",class:"flex-1",label:"Upgrade"})])]),ne,e("div",ie,[e("div",de,[a(w,{ref_key:"fileUploaderRef",ref:M,id:"files-fileupload",name:"demo[]",url:"./upload.php",accept:"image/*",customUpload:"",multiple:"",auto:"",class:"upload-button-hidden w-full",invalidFileSizeMessage:"Invalid File Size",invalidFileTypeMessage:"Invalid File Type",maxFileSize:1e6,onSelect:L,pt:{buttonbar:{class:"hidden"},content:{class:"border-none"}}},{content:v(()=>[p.value.length>0?(d(),c("div",ce,[(d(!0),c(j,null,k(p.value,t=>(d(),c("div",{key:t.name,class:"flex flex-wrap gap-5"},[e("div",re,[e("img",{src:t.objectURL,alt:t.name,class:"w-full h-full border-round shadow-2"},null,8,ue),a(i,{icon:"pi pi-times",class:"remove-button text-sm absolute justify-content-center align-items-center cursor-pointer",rounded:"",style:{top:"-10px",right:"-10px",display:"none"},onClick:u=>W(t)},null,8,["onClick"])])]))),128))])):R("",!0)]),empty:v(()=>[p.value.length<1?(d(),c("div",{key:0,onClick:N,class:"w-full py-3",style:{cursor:"copy"}},me)):R("",!0)]),_:1},512)])])]),e("div",he,[e("div",fe,[_e,e("div",ve,[(d(!0),c(j,null,k(z.value,(t,u)=>(d(),c("div",{key:u,class:"col-12 md:col-6 xl:col-4"},[e("div",xe,[e("div",ge,[e("i",{class:g(["text-2xl mr-3",t.icon])},null,2),e("span",be,h(t.name),1)]),e("span",ye,h(t.size),1)])]))),128))])]),e("div",Ce,[we,a(F,{value:V.value,dataKey:"id",paginator:"",rows:8},{default:v(()=>[a(r,{field:"name",header:"Name",sortable:"",headerStyle:{minWidth:"12rem"}},{body:v(({data:t})=>[e("div",Fe,[e("i",{class:g(["text-xl text-primary mr-2",t.icon])},null,2),e("span",null,h(t.name),1)])]),_:1}),a(r,{field:"date",header:"Date",headerClass:"white-space-nowrap",headerStyle:{minWidth:"12rem"}}),a(r,{field:"fileSize",header:"File Size",sortable:"",headerStyle:{minWidth:"12rem"}}),a(r,{class:"w-10rem"},{body:v(()=>[e("div",Se,[a(i,{icon:"pi pi-times",class:"mr-2",severity:"danger",text:"",rounded:""}),a(i,{icon:"pi pi-search",text:"",rounded:""})])]),_:1})]),_:1},8,["value"])])])])}}},Ve=G(je,[["__scopeId","data-v-852d0330"]]);export{Ve as default};